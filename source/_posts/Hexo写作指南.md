---
title: Hexo写作指南
date: 2023-06-05 11:27:58
tags:
---

！：这片文章是写给作者自己看的 ~~不会考虑其他人的感受~~

## 插入图片

先将图片上传到图床，然后采用Markdown图片插入即可。

插入图片语法

```
![这是图片](/assets/img/philly-magic-garden.jpg "Magic Gardens")
```

## 锚点

链接语法右侧括号内填写 `#+二级标题` 即可

链接语法

```
[Markdown语法](https://markdown.com.cn)
```

## 插入B站视频

只需要把 `//player.bilibili.com/player.html?aid=90978812&cid=155358422&page=1` 替换成自己的就行。

以 **【8K超高清完整版】瑞克·埃斯利（你被骗了）《Never Gonna Give You Up》** 作为演示

从B战复制过来的

~~~
<iframe src="//player.bilibili.com/player.html?aid=651820362&bvid=BV1he4y1w7wB&cid=1006811391&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
~~~

实际使用的

```
{% raw %}
<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;">
<iframe src="//player.bilibili.com/player.html?aid=651820362&bvid=BV1he4y1w7wB&cid=1006811391&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; width: 100%; height: 100%; Left: 0; top: 0;" ></iframe></div>
{% endraw %}
```

{% raw %}
<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;">
<iframe src="//player.bilibili.com/player.html?aid=651820362&bvid=BV1he4y1w7wB&cid=1006811391&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; width: 100%; height: 100%; Left: 0; top: 0;" ></iframe></div>
{% endraw %}

