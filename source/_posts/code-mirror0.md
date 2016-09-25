title: CodeMirror 学习笔记（0）
date: 2016-09-25 17:10:34
updated: 2016-09-25 17:10:34
tags: [baby step, bioinformatics, visualization, web, javascript]
categories: profession
---

由于开发 FileMaker 系统下的脚本编辑和执行功能，需要让 FileMaker 内置更友好的代码编辑功能。因此调研了一番之后，发现在线支持语法高亮的代码编辑器 CodeMirror 适合，也方便移植，因此入坑（[官方介绍](http://codemirror.net)）。

本项目有个简单的实现在[这里](https://github.com/daweih/FileMakerScriptEditor)。

##### 部署

部署其实很简单 (以下代码不是真实的 Code Mirror)：

``` html
<link rel="stylesheet" href="codemirror.css">
<script src="codemirror.js"></script>
```
接着引用需要显示的代码语言对应的 JS 库：

``` html
<script src="javascript.js"></script>
```

##### In FileMaker

在 FileMaker 内部引用，直接将代码提取到字段内，然后引用该字段，写入 web viewer 的代码区域即可：

``` bash
"data:text/html,"
 &"<!DOCTYPE html><html><head><meta charset='utf-8' />"
 & "<script charset='utf-8'>"
 & ExecuteSQL ( "SELECT "
 & RightValues ( Substitute ( GetFieldName ( WebPackages::code ) ; "::" ; ¶ ) ; 1 ) & " FROM "
 & LeftValues (  Substitute ( GetFieldName ( WebPackages::code ) ; "::" ; ¶ ) ; 1 ) & " WHERE "
 & RightValues ( Substitute ( GetFieldName ( WebPackages::Filename ) ; "::" ; ¶ ) ; 1 ) & "='codemirror.js' "; "" ; "" )
 & "</script>"
 & "<style type='text/css'>¶"
 & ExecuteSQL ( "SELECT "
 & RightValues ( Substitute ( GetFieldName ( WebPackages::code ) ; "::" ; ¶ ) ; 1 ) & " FROM "
 & LeftValues (  Substitute ( GetFieldName ( WebPackages::code ) ; "::" ; ¶ ) ; 1 ) & " WHERE "
 & RightValues ( Substitute ( GetFieldName ( WebPackages::Filename ) ; "::" ; ¶ ) ; 1 ) & "='codemirror.css' "; "" ; "" )
 & "</style>"
 & "<script charset='utf-8'>"
 & ExecuteSQL ( "SELECT "
 & RightValues ( Substitute ( GetFieldName ( WebPackages::code ) ; "::" ; ¶ ) ; 1 ) & " FROM "
 & LeftValues (  Substitute ( GetFieldName ( WebPackages::code ) ; "::" ; ¶ ) ; 1 ) & " WHERE "
 & RightValues ( Substitute ( GetFieldName ( WebPackages::Filename ) ; "::" ; ¶ ) ; 1 ) & "='"
 & Case ( Script Editor » Scripts::dtLanguage="Perl Moudle" ; "perl" ; Lower ( Script Editor » Scripts::dtLanguage ) )
 & ".js' "; "" ; "" )
 & "</script>"
```

注意，这里采用了 SQL 语句调用存储在表 WebPackages 中的代码，为了保证代码的鲁棒性，中间的 SQL 语句嵌套了很多 FileMaker 函数，如果简单写，则是这样：

``` bash
"data:text/html,"
 & "<!DOCTYPE html><html><meta charset='utf-8' />"
 & "<script charset='utf-8'>"
 & ExecuteSQL ( "SELECT code FROM WebPackages WHERE Filename='codemirror.css' "; "" ; "" )
 & "</script>"
 & "<style type='text/css'>¶"
 & ExecuteSQL ( "SELECT code FROM WebPackages WHERE Filename='codemirror.css' "; "" ; "" )
 & "</style>"
 & "<script charset='utf-8'>"
 & ExecuteSQL ( "SELECT code FROM WebPackages WHERE Filename='perl.js' "; "" ; "" )
 & "</script>"
```

将环境部署好之后，就可以调试功能了。加载脚本编辑器：

``` javascript
var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
	//options
	lineNumbers: true,
	matchBrackets: true,
	lineWrapping: true,
	indentUnit: 4
});
editor.setSize('auto', 'auto');
```
添加行号，折行（因为我们不希望 FileMaker 用户频繁地左右拖动，那个动作太反人类），让代码区域根据长度自动调整尺寸。

这个项目中采用了直接加载 DOM 中文本的模式加载数据，又有其他方法，比如使用上个语句块中 options 区域中的参数 value 传递。

##### 更多参数

###### indentUnit

integer. 定义锁进的单位。个人比较喜欢制表符大小的锁进，4个空格。

###### theme

string. 配置编辑器的主题样式。个人感觉 ambiance 这个主题还是很好看的，如图:

<center>![1](http://daweih.github.io/images/cm.0.png "CodeMirrorOnFM")


###### smartIndent

boolean. 自动缩进: 是否根据上下文自动缩进，默认true。


###### lineNumbers

boolean. 是否在编辑器左侧显示行号。

###### undoDepth

integer. 最大撤消次数，默认为200。



#### Reference
1. [Code Mirror](http://codemirror.net/)
<br>
<div align=center>
<img src="http://daweih.github.io/images/wechat_small_black.jpg">
</div>