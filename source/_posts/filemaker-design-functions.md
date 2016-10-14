title: FileMaker Design Functions
date: 2016-10-13 23:39:29
updated: 2016-10-13 23:39:29
tags: [baby step,FileMaker]
categories: profession
---
FileMaker 系统内提供了大量的函数，其中有一大类称为 Design，顾名思义就是设计用函数。

<center>![1](http://daweih.github.io/images/fm3.0.png "Design Functions")

官方的说法：
Design functions return information about the structure of open database files. For example, you could determine the names of all the layouts or fields in an open database file.

也就是说，Design funciton 是用于提取数据库设计信息的工具。这对于快速获取一个不熟悉的数据库非常有用。我们甚至可以使用数据库保存这些函数返回的信息，用于追踪数据库设计的变化或撰写开发日志，乃至开发完整的 FileMaker 开发日志系统。

我们先来看看这类函数都有哪些。
DatabaseNames: A list of the names of all files open on the computer.

Get(LayoutTableName)


``` bash
/*  copyright Ulf Carlsson, ulf.carlsson@studentlitteratur.se, free to use if this row is here
     copyright Dawei Huang, daweih@me.com, free to use if this row is here
     在原作的基础上增加了对重复出现布局名称情况的处理，会返回错误值 (-1)

```
#### Reference
1. [title](http://www.ncbi.nlm.nih.gov/pubmed/?term=)
<br>
<div align=center>
<img src="http://daweih.github.io/images/wechat_small_black.jpg">
</div>