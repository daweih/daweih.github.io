title: Hexo quick ref.
date: 2015-07-22 09:15:19
updated: 
tags: [blog, web, hexo] 
categories: profession
---

``` bash
$ hexo new draft "draft title"
$ hexo server --drafts/hexo s --drafts
$ hexo publish [layout] <filename>
```

##### 禁用特定页面的评论功能

在那个页面的设置区域添加代码 ([ref.](http://hexo.chenall.net/post/nocomments/))：

```
comments: false
````

比如 tags 页面（`/source/tags/index.md`）：

```
title: All tags
date: 2015-07-20 09:52:36
type: "tags"
comments: false
---

```
#### 相关资源
- [Hexo 官网](http://hexo.io)
- [next theme](http://notes.iissnan.com)
- Hexo 系列教程 [1](http://zipperary.com/2013/05/28/hexo-guide-1/)，[2](http://zipperary.com/2013/05/28/hexo-guide-2/)，[3](http://zipperary.com/2013/05/28/hexo-guide-3/)，[4](http://zipperary.com/2013/05/28/hexo-guide-4/)，[5](http://zipperary.com/2013/05/28/hexo-guide-5/).
