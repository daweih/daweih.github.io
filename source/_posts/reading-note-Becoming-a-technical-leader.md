title: 'Reading note: Becoming a technical leader'
date: 2015-08-04 18:17:05
updated: 2015-08-08 18:17:05
tags: [reading, OmniOutliner, iframe, SOP] 
categories: reading
---
<div align=center>
<img src="http://daweih.github.io/images/leader.jpg">
</div>

### 优化博客的笔记系统

是我第一本认真去读的管理类书籍。本着不作就不会死的精神，配置个让自己舒坦的笔记系统。

#### 植入目录

使用了 `OmniOutliner` 来整理笔记，所以想直接嵌入到博客系统里。于是采用了 `iframe` 。

``` bash
<div align=center>
<iframe scrolling="value" src="http://daweih.github.io/js/becoming_a_technical_leader.html/index.html" width=90% height=450px frameborder="0" scrolling="yes"></iframe>
</div>
```

- 第 1 行：目录块在页面居中对齐
- 第 2 行：目录文件采用嵌入方式进入博客文章，其文件是 OmniOutliner 生成的动态 html。


#### 优化效果

为了让目录的效果在不同设备上达到一样的水准，以便长期使用，做了一些优化，有以下几点：
1. `width` 采用了 `90%`是为了在 `iPad`、`iPhone` 和电脑上都有比较好的显示效果；`height` 采用固定高度，为了避免页面过长。
2. 为了缩放之后，iframe 内容依然可以居中，在 `oo3` 转化的网页中 `table` 根处添加属性：
``` html
<table align="center"
```
3. 为了改进缩放，强制 oo3 转化的网页宽度为 `310px`，修改代码为:
``` css
table.row {
						width: 310px;
			
			}
```

得到的目录效果如下。

### 本书目录

<div align=center>
<iframe scrolling="value" src="http://daweih.github.io/js/becoming_a_technical_leader.html/index.html" width=90% height=450px frameborder="0" scrolling="yes"></iframe>
</div>

### 本周进度

周四、五非常忙，以至于周二拿到的书，只两天拿出时间来看。

本书在前言中说：

> 如果你真的希望提升行动力，应该首先制订计划，制订好计划之后应该按时执行......想要有时间做自己的事情，应当把一切事情保持在井然有序的状态......

我的评论：

- 阅读的质量还在其次，目前的要务还是要提高计划的执行度。
- 之前了解过的法国厨房标准操作流程，其原则的目的和“保持一切井然有序”的目的是一致的。

读后，思考本周五的工作中，SOP 的问题也在于，流程繁琐，没有模块化，导致“保持一切井然有序”的操作步骤过多，时间成本升高。SOP 的文档写作不够清晰。对细节的记述不够详细。所以会依赖员工的`经验`。

`经验`之类，如果没有`记录在案`，就不能流传。所以员工的遗忘，会造成额外的时间成本（二次培训、操作错误等）。解决方法无外乎：
- 去掉需要`经验`的部分，将流程封装为黑匣子，减少可能出错的步骤。
- 将经验写入标准操作流程。

显然后者，会给 SOP 的作者和读者都带来更多成本（写作、阅读、操作）。依据模块化的原则，第一种方法更可行。

### 实践出真知

工作的主要目标，还是要完成项目。但不改进流程，完成项目的水平难以提升，效率也难提高。

磨刀不误砍柴工的道理，看似浅显，但包含了短期效益和长期效益的博弈。从发展的视角看，打磨是长期规划中必不可少的部分。

井然有序，是控制狂人的标签。我被如此看待也是无奈。但对工作的优化与打磨还是要推行的。



### Reference
1. [Becoming a Technical Leader](http://book.douban.com/subject/1807715/) by Gerald M. Weinberg
2. [成为技术领导者](http://book.douban.com/subject/26419762/) by Gerald M. Weinberg, 译者: 余晟
