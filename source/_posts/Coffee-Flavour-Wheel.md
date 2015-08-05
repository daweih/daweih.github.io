title: "移植，测试嵌入的 D3: Coffee Flavour Wheel"
date: 2015-08-04 21:09:31
updated: 2015-08-04 21:09:31
tags: [baby step, visualization, d3, coffee]
categories: profession
---


为了在 Hexo 系统的 `markdown` 正文中测试 `D3` 的可用性，移植了一个`咖啡风味轮`的可视化，如下：

#### Coffee Flavour Wheel

<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js" charset="utf-8"></script>
<div align=center id="vis" style="font-size:13pt;font-family:helvetica;zoom:0.4;"></div>
<script src="http://daweih.github.io/js/coffee_flavour_wheel.js" charset="utf-8"></script>
<script>
//	d3.select("div#vis").remove();
</script>

``` bash
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js" charset="utf-8"></script>
<div align=center id="vis" style="font-size:13pt;font-family:helvetica;zoom:0.4;"></div>
<script src="http://daweih.github.io/js/coffee_flavour_wheel.js" charset="utf-8"></script>
```

#### 代码注释：
- 第一行装载 `D3` 包。
- 第二行，插入绘图区域，这里的绘图区域是用 `div#viz` 来定位并操作
- 第三行，引用绘图用代码，保存在 `Hexo` 博客系统的 `js` 文件夹下，会被同步到 github。当然你也可以通过用 `<script></script>` 直接嵌入本页。个人更推荐单独存放，避免 markdown 页面太长。

#### 编写小贴士

- **改动 `md` 文件后直接看效果：**对 DOM 的 `attr` 和 `style` 编写，更改无需 `hexo d`, `hexo d`，就可以在 `hexo s` 开启状态的浏览器中查看。写可视化代码时候，需要经常看改动带来的变化，此时可以省去前述的两步。
- **在 md 文件中编写并测试 `js` 代码：**使用 `hexo s` 测试中，代码需要写在页面内测试。测试完毕后再移动到独立文件。因为 gihub 处的代码改动需要 `git commit`, `git push` 之后才会生效。如果每次改动后都进行前面 2 项操作，则无妨。这里的问题在于，`hexo s` 状态下，无法引用本地的文件。这个问题在图片的引用代码中，也是让人不爽。
- **模块化：**重复使用的 js 代码，尽量放在一处，引用到每个页面，减少维护的复杂度。

目前，文章页面的 `CSS` 还是无法通过嵌入正文生效。需要 D3 直接写入 `DOM` 的属性。

`D3` 在本站嵌入成功后，我就可以做一些可视化的学习笔记。这样，在笔记里面，就可以添加实时的演示了。

本次嵌入的可视化来自[这里](http://www.jasondavies.com/coffee-wheel/)。

#### 其他相关博文

- [一个染色体的可视化](http://daweih.github.io/2015/07/20/viz-of-chromosome/)

<br>
<div align=center>
<img src="http://daweih.github.io/images/wechat_small_black.jpg">
</div>
