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

```
<iframe src="//player.bilibili.com/player.html?aid=651820362&bvid=BV1he4y1w7wB&cid=1006811391&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
```

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

## 更好的代码块

从https://blog.csdn.net/chuck_robert/article/details/118467038复制来的

```
<!DOCTYPE html>
<head>
  <style>
    #cnblogs_post_body .cnblogs_code {
      /* background-color: rgba(152, 147, 147, 0.28); */
      /* border: 1px solid rgba(255, 251, 251, 0); */
      border-radius: 4px;
      color: #000;
      font-family: Courier New !important;
      font-size: 13px !important;
      margin: 5px 0;
      overflow: auto;
      padding: 5px;
    }
    .hljs-built_in,
    .hljs-keyword,
    .hljs-name,
    .hljs-selector-tag,
    .hljs-tag {
      color: #332870 !important;
    }

    .hljs-emphasis,
    .hljs-strong {
      color: #a8a8a2 !important;
    }
    .hljs-built_in,
    .hljs-keyword,
    .hljs-name,
    .hljs-selector-tag,
    .hljs-tag {
      color: #bababa !important;
    }

    .hljs-bullet,
    .hljs-link,
    .hljs-literal,
    .hljs-number,
    .hljs-quote,
    .hljs-regexp {
      color: #27c94a !important;
    }

    .hljs-code,
    .hljs-selector-class {
      color: #eeff00 !important;
    }

    .hljs-emphasis {
      font-style: italic !important;
    }

    .hljs-attribute,
    .hljs-keyword,
    .hljs-name,
    .hljs-section,
    .hljs-selector-tag,
    .hljs-variable {
      color: #00c3ff !important;
    }

    .hljs-attr,
    .hljs-params {
      color: #b9b9b9 !important;
    }

    .hljs-string {
      color: #ffbb00 !important;
    }

    .hljs-addition,
    .hljs-built_in,
    .hljs-builtin-name,
    .hljs-selector-attr,
    .hljs-selector-id,
    .hljs-selector-pseudo,
    .hljs-subst,
    .hljs-symbol,
    .hljs-template-tag,
    .hljs-template-variable,
    .hljs-title,
    .hljs-type {
      color: #dfe231 !important;
    }

    .hljs-comment,
    .hljs-deletion {
      color: #008839 !important;
    }

    .hljs-meta {
      color: #00ff0d !important;
    }
    #cnblogs_post_body .toc ul {
      max-height: 550px;
      overflow-y: auto;
    }

    .cnblogs-markdown .hljs {
      display: block;
      overflow-x: auto;
      padding: 0.5em !important;
      background: #2b2b2b !important;
      font-size: 14px !important;
      color: #bababa !important;
      font-family: Source Code Pro, Consolas, Menlo, Monaco, Courier New,
        monospace !important;
    }
    #cnblogs_post_body h1::before {
      content: "H1";
      margin-right: 10px;
      color: gainsboro;
    }
    #cnblogs_post_body h2::before {
      content: "H2";
      margin-right: 10px;
      color: gainsboro;
    }
    #cnblogs_post_body h3::before {
      content: "H3";
      margin-right: 10px;
      color: gainsboro;
    }
    #mainContent #post_detail #cnblogs_post_body h4::before {
      content: "h4";
      margin-right: 10px;
      color: gainsboro;
    }
    #cnblogs_post_body h5::before {
      content: "h5";
      margin-right: 10px;
      color: gainsboro;
    }
    #cnblogs_post_body h6::before {
      content: "h6";
      margin-right: 10px;
      color: gainsboro;
    }
    #cnblogs_post_body td.hljs-ln-numbers {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      text-align: center;
      color: #ccc;
      border-right: 1px solid #ccc;
      vertical-align: top;
      padding-right: 5px;

      /* your custom style here */
    }

    #cnblogs_post_body .hljs td {
      border-collapse: inherit;
      min-width: unset;
      padding-left: 20px;
      padding-right: 10px;
    }
  </style>
</head>
<body>
  <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
    <pre>
            <code class="language-css">/* your custom style here */
#cnblogs_post_body h6::before {
    content: "h6";
    margin-right: 10px;
    color: gainsboro;
}
@font-face {
	font-family: "EBG12-Re";
    src: url("fonts/EBGaramond12-Regular.ttf") format("truetype");
}
            </code>
        </pre>
  </div>
  <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
    <pre>
            <code class="language-python">import pandas                     #导入数据统计模块
data = {'A': [1,2,3,4,5],'B': [6,7,8,9,10],'C': [11,12,13,14,15]}
data__frame = pandas.DataFrame(data)
print(data__frame)
            </code>
        </pre>
  </div>
  <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
    <pre>
            <code class="language-c">我好像不会c语言
            </code>
        </pre>
  </div>
  <div>
    <script src="https://common.cnblogs.com/highlight/10.3.1/highlight.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/highlightjs-line-numbers.js/2.8.0/highlightjs-line-numbers.min.js"></script>
    <script type="text/javascript">
      hljs.initHighlightingOnLoad();

      hljs.initLineNumbersOnLoad();

      $(document).ready(function () {
        $("code.hljs").each(function (i, block) {
          hljs.lineNumbersBlock(block);
        });
      });
    </script>
  </div>
</body>
```

{% raw %}
<!DOCTYPE html>
<head>
  <style>
    #cnblogs_post_body .cnblogs_code {
      /* background-color: rgba(152, 147, 147, 0.28); */
      /* border: 1px solid rgba(255, 251, 251, 0); */
      border-radius: 4px;
      color: #000;
      font-family: Courier New !important;
      font-size: 13px !important;
      margin: 5px 0;
      overflow: auto;
      padding: 5px;
    }
    .hljs-built_in,
    .hljs-keyword,
    .hljs-name,
    .hljs-selector-tag,
    .hljs-tag {
      color: #332870 !important;
    }

    .hljs-emphasis,
    .hljs-strong {
      color: #a8a8a2 !important;
    }
    .hljs-built_in,
    .hljs-keyword,
    .hljs-name,
    .hljs-selector-tag,
    .hljs-tag {
      color: #bababa !important;
    }

    .hljs-bullet,
    .hljs-link,
    .hljs-literal,
    .hljs-number,
    .hljs-quote,
    .hljs-regexp {
      color: #27c94a !important;
    }

    .hljs-code,
    .hljs-selector-class {
      color: #eeff00 !important;
    }

    .hljs-emphasis {
      font-style: italic !important;
    }

    .hljs-attribute,
    .hljs-keyword,
    .hljs-name,
    .hljs-section,
    .hljs-selector-tag,
    .hljs-variable {
      color: #00c3ff !important;
    }

    .hljs-attr,
    .hljs-params {
      color: #b9b9b9 !important;
    }

    .hljs-string {
      color: #ffbb00 !important;
    }

    .hljs-addition,
    .hljs-built_in,
    .hljs-builtin-name,
    .hljs-selector-attr,
    .hljs-selector-id,
    .hljs-selector-pseudo,
    .hljs-subst,
    .hljs-symbol,
    .hljs-template-tag,
    .hljs-template-variable,
    .hljs-title,
    .hljs-type {
      color: #dfe231 !important;
    }

    .hljs-comment,
    .hljs-deletion {
      color: #008839 !important;
    }

    .hljs-meta {
      color: #00ff0d !important;
    }
    #cnblogs_post_body .toc ul {
      max-height: 550px;
      overflow-y: auto;
    }

    .cnblogs-markdown .hljs {
      display: block;
      overflow-x: auto;
      padding: 0.5em !important;
      background: #2b2b2b !important;
      font-size: 14px !important;
      color: #bababa !important;
      font-family: Source Code Pro, Consolas, Menlo, Monaco, Courier New,
        monospace !important;
    }
    #cnblogs_post_body h1::before {
      content: "H1";
      margin-right: 10px;
      color: gainsboro;
    }
    #cnblogs_post_body h2::before {
      content: "H2";
      margin-right: 10px;
      color: gainsboro;
    }
    #cnblogs_post_body h3::before {
      content: "H3";
      margin-right: 10px;
      color: gainsboro;
    }
    #mainContent #post_detail #cnblogs_post_body h4::before {
      content: "h4";
      margin-right: 10px;
      color: gainsboro;
    }
    #cnblogs_post_body h5::before {
      content: "h5";
      margin-right: 10px;
      color: gainsboro;
    }
    #cnblogs_post_body h6::before {
      content: "h6";
      margin-right: 10px;
      color: gainsboro;
    }
    #cnblogs_post_body td.hljs-ln-numbers {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      text-align: center;
      color: #ccc;
      border-right: 1px solid #ccc;
      vertical-align: top;
      padding-right: 5px;

      /* your custom style here */
    }

    #cnblogs_post_body .hljs td {
      border-collapse: inherit;
      min-width: unset;
      padding-left: 20px;
      padding-right: 10px;
    }
  </style>
</head>
<body>
  <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
    <pre>
            <code class="language-css">/* your custom style here */
#cnblogs_post_body h6::before {
    content: "h6";
    margin-right: 10px;
    color: gainsboro;
}
@font-face {
	font-family: "EBG12-Re";
    src: url("fonts/EBGaramond12-Regular.ttf") format("truetype");
}
            </code>
        </pre>
  </div>
  <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
    <pre>
            <code class="language-python">import pandas                     #导入数据统计模块
data = {'A': [1,2,3,4,5],'B': [6,7,8,9,10],'C': [11,12,13,14,15]}
data__frame = pandas.DataFrame(data)
print(data__frame)
            </code>
        </pre>
  </div>
  <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
    <pre>
            <code class="language-c">我好像不会c语言
            </code>
        </pre>
  </div>
  <div>
    <script src="https://common.cnblogs.com/highlight/10.3.1/highlight.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/highlightjs-line-numbers.js/2.8.0/highlightjs-line-numbers.min.js"></script>
    <script type="text/javascript">
      hljs.initHighlightingOnLoad();

      hljs.initLineNumbersOnLoad();

      $(document).ready(function () {
        $("code.hljs").each(function (i, block) {
          hljs.lineNumbersBlock(block);
        });
      });
    </script>
  </div>
</body>
{% endraw %}