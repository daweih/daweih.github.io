title: 'Reading note: Becoming a technical leader'
date: 2015-08-04 18:17:05
updated: 2015-08-08 18:17:05
tags: [reading] 
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



#### Reference
1. [Becoming a Technical Leader](http://book.douban.com/subject/1807715/) by Gerald M. Weinberg
2. [成为技术领导者](http://book.douban.com/subject/26419762/) by Gerald M. Weinberg, 译者: 余晟
