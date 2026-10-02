---
title: cloudflare单域名优选
date: 2026-10-02 14:54:09
tags: 
  - Cloudflare
  - 域名优化
  - 网络加速
  - Workers
categories: 
  - 网络技术
  - 优化教程
---

# 为什么要这么做

对于一些极其难以获取的免费域名(如：[eu.org](https://nic.eu.org))，你几乎无法获取到第二个域名，这个时候，要想进行常规cloudflare优选就会面临一个问题：

**你没法获得一个稳定的回源域名**

这个时候，你就只能尝试使用Worker路由+反代的方式来进行IP优选

# 优选步骤：

总体步骤：
1. 创建一个Workers,从Hello World开始，然后将脚本换成下面提到的。
2. 将你要优选的网站的子域名解析记录后加上`-source`字段。
3. 在你原来解析的域名加上Workers路由，如果你想要访问`bas.blockhaity.eu.org`,则在路由规则上写`bas.blockhaity.eu.org/*`。
4. 将你要访问的域名CNAME解析到优选服务。

## Workers 脚本

根据[二叉树树](https://2x.nz)的[试试Cloudflare IP优选！让Cloudflare在国内再也不是减速器！](https://www.acofork.com/posts/cf-fastip/)修改的workers脚本如下：

把入口域名后缀换成你添加到cloudflare的域名就行

``` javascript
// 这是蓝色大肥鱼改动的

// ====== 配置 ======
// 入口域名后缀（用户访问的域名）
const ENTRY_SUFFIX = 'blockhaity.eu.org';

// 源站域名后缀（真实后端所在域名）
const ORIGIN_SUFFIX = 'blockhaity.eu.org';

// 源站子域名上加的后缀
// bas.blockhaity.eu.org -> bas-source.blockhaity.eu.org
const ORIGIN_LABEL = '-source';

// 可选：个别域名想走不同源站，就写在这里，会优先命中
// 不想要就留空对象
const OVERRIDES = {
  // 'gitea.blockhaity.eu.org': 'gitea.backend.com',
};

// ====== Worker 入口 ======
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const current_host = url.host;

  // 强制 HTTPS
  if (url.protocol === 'http:') {
    url.protocol = 'https:';
    return Response.redirect(url.href, 301);
  }

  // 解析目标源站
  const target_host = resolveTargetHost(current_host);
  if (!target_host) {
    return new Response('No matching target host', { status: 404 });
  }

  // 构造目标 URL
  const new_url = new URL(request.url);
  new_url.protocol = 'https:';
  new_url.host = target_host;

  // CORS 预检
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders(request)
    });
  }

  const new_headers = new Headers(request.headers);
  new_headers.set('Host', target_host);
  new_headers.set('Referer', new_url.href);
  new_headers.set('X-Forwarded-Host', current_host);
  new_headers.set('X-Forwarded-Proto', 'https');

  // WebSocket 透传
  const upgrade = request.headers.get('Upgrade');
  if (upgrade && upgrade.toLowerCase() === 'websocket') {
    return fetch(new Request(new_url.href, request));
  }

  try {
    const response = await fetch(new_url.href, {
      method: request.method,
      headers: new_headers,
      body:
        request.method !== 'GET' && request.method !== 'HEAD'
          ? request.body
          : undefined,
      redirect: 'manual'
    });

    const response_headers = new Headers(response.headers);

    // CORS
    const origin = request.headers.get('Origin');
    if (origin) {
      response_headers.set('Access-Control-Allow-Origin', origin);
      response_headers.set('Access-Control-Allow-Credentials', 'true');
      response_headers.set('Vary', 'Origin');
    } else {
      response_headers.set('Access-Control-Allow-Origin', '*');
    }

    response_headers.delete('Content-Security-Policy');
    response_headers.delete('Content-Security-Policy-Report-Only');

    // 重写 Location，避免跳回源站域名
    const location = response_headers.get('Location');
    if (location) {
      try {
        const loc = new URL(location, new_url.href);
        if (loc.host === target_host) {
          loc.protocol = 'https:';
          loc.host = current_host;
          response_headers.set('Location', loc.href);
        }
      } catch {}
    }

    // 去掉 Set-Cookie 里的 Domain，避免写到源站域
    if (typeof response_headers.getSetCookie === 'function') {
      const cookies = response_headers.getSetCookie();
      if (cookies.length) {
        response_headers.delete('Set-Cookie');
        for (const c of cookies) {
          response_headers.append(
            'Set-Cookie',
            c.replace(/;\s*Domain=[^;]+/ig, '')
          );
        }
      }
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: response_headers
    });
  } catch (err) {
    return new Response(`Proxy Error: ${err.message}`, { status: 502 });
  }
}

// ====== 自动推导目标源站 ======
function resolveTargetHost(host) {
  // 1) 优先看 OVERRIDES
  if (OVERRIDES[host]) return OVERRIDES[host];

  // 2) 必须是入口后缀的子域名
  const suffix = '.' + ENTRY_SUFFIX;
  if (!host.endsWith(suffix)) return null;

  // 取子域名部分，例如 bas / blog-edgeone / a.bas
  const sub = host.slice(0, -suffix.length);
  if (!sub) return null;

  // 3) 防止源站域名被当作入口，造成回环
  //    例如 bas-origin.blockhaity.eu.org 直接拒绝
  if (sub.endsWith(ORIGIN_LABEL)) return null;

  // 4) 拼接
  return sub + ORIGIN_LABEL + '.' + ORIGIN_SUFFIX;
}

function corsHeaders(request) {
  const headers = new Headers();
  const origin = request.headers.get('Origin') || '*';
  headers.set('Access-Control-Allow-Origin', origin);
  headers.set(
    'Access-Control-Allow-Methods',
    'GET,HEAD,POST,PUT,PATCH,DELETE,OPTIONS'
  );
  headers.set(
    'Access-Control-Allow-Headers',
    request.headers.get('Access-Control-Request-Headers') || '*'
  );
  headers.set('Access-Control-Allow-Credentials', 'true');
  headers.set('Access-Control-Max-Age', '86400');
  return headers;
}
```

## 解析设置示例

路由配置示例:

![路由配置示例](/assets/img/cloudflare单域名优选/路由配置示例.png)

域名解析示例:

![域名解析示例](/assets/img/cloudflare单域名优选/域名解析示例.png)
