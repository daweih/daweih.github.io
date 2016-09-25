title: "FileMaker 和我的一些小故事 (2): 版本的故事－Base64Decode"
date: 2016-09-25 14:12:32
updated: 2016-09-25 14:12:32
tags: [baby step, FileMaker, web, javascript, writting]
categories: profession
---
似乎每次版本更新，FileMaker 都会给开发者带来一些“早就该有的”新功能。然而和 Apple Inc. 出 iPhone 的习惯一样，FileMaker 也不爱啰嗦把每次更新的内容说清楚，于是有了 Base64Decode 这个坑。

<center>![1](http://daweih.github.io/images/fm2.0.png "Export records")

在开发解决方案时，常常需要将数据库内的数据导出。除了常用的导出通道（Export）之外，FileMaker 14 支持将数据保存为容器中的文件。导出容器中的文件是 FileMaker 已经支持的功能，也可以用脚本执行。[这里](https://github.com/daweih/FileMakerScriptEditor/blob/master/base64encode.container.fmp12)有一个示例，演示在 13，14，15 上此功能的差别。采用的代码如下：

``` bash
$ Set Field [ container::container ; Base64Decode ( Base64Encode ( GetAsText ( container::text ) );"demo.txt" ) ] 
$ Set Field [ container::File2Text ; Base64Decode ( Base64Encode ( container::container ) ) ] 
```

可以看出，将字段内的数据直接导出为文件或从文件导入到字段，一个命令搞定，非常方便。下一步就可以用这个文件调用外部程序处理了，比如用插件 [ScriptMaster](http://www.360works.com/scriptmaster/) 的运行脚本功能使用 perl 语言处理文本，会比 FileMaker 自带的脚本强大得多。基于这个设计，我做了 [FileMakerScriptEditor](https://github.com/daweih/FileMakerScriptEditor) 这个项目，可以在 FileMaker 内编辑脚本，运行脚本处理 FileMaker 内存储的数据。

<center>![2](http://daweih.github.io/images/fm2.1.png "base64encode.container.fmp12")

目前，FileMaker 最新的发行版是 15。在这个平台下开发出来的解决方案常常遇到需要对旧版本适配的问题。比如我供职的公司，就有大量的用户还在使用 FileMaker 13。比如上述功能，就产生了不兼容。于是免不了到处搜寻bug......最终，针对 FileMakerScriptEditor，采用了先计算客户端版本，在判断为 13 后，选择用 ScriptMaster 替代 Base64Decode 实现了此功能。

此外，从文件导入内容到字段的功能，最常用的另一个方面是库内置包的更新。我们知道，FileMaker 在 14 及以后的版本中，对 javascript 的支持越来越好。我们常用的 JS 包如果内置在库内部，直接调用，会比调用外部的包稳定很多。采用对拖入容器（container）的包直接提取代码，可以简单地实现拖入包文件即升级系统 JS 的包代码。此外，拖入文本文件直接导入其中的数据也是很便捷的一个应用。


#### Reference
1. [Base64Decode](http://www.filemaker.com/help/13/fmp/en/html/func_ref1.31.13.html)
2. [FileMakerScriptEditor](https://github.com/daweih/FileMakerScriptEditor)
3. [ScriptMaster](http://www.360works.com/scriptmaster/)

<br>
<div align=center>
<img src="http://daweih.github.io/images/wechat_small_black.jpg">
</div>