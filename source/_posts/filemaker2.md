title: "FileMaker 和我的一些小故事 (2): 版本的故事"
date: 2016-09-25 14:12:32
updated: 2016-09-25 14:12:32
tags: [baby step, FileMaker, web, javascript, writting]
categories: profession
---
似乎每次版本更新，FileMaker 都会给开发者带来一些新功能。然而和 Apple Inc. 出 iPhone 的习惯一样，FileMaker 也不爱啰嗦把每次更新的内容说清楚，于是有了 Base64Decode 这个坑。

在开发解决方案时，常常需要将数据库内的数据导出。除了常用的导出通道（export）之外，FileMaker 14 支持将数据保存为容器中的文件。导出容器中的文件是 FileMaker 已经支持的功能，也可以用脚本执行。[这里](https://github.com/daweih/FileMakerScriptEditor/blob/master/base64encode.container.fmp12)有一个示例，演示在 13，14，15 上此功能的差别。

目前，FileMaker 最新的发行版..

#### Reference
1. [Base64Decode](http://www.filemaker.com/help/13/fmp/en/html/func_ref1.31.13.html)
2. [FileMakerScriptEditor](https://github.com/daweih/FileMakerScriptEditor)

<br>
<div align=center>
<img src="http://daweih.github.io/images/wechat_small_black.jpg">
</div>