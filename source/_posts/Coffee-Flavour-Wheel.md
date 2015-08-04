title: "移植可视化来测试本地嵌入 D3: Coffee Flavour Wheel"
date: 2015-08-04 21:09:31
updated: 2015-08-04 21:09:31
tags: [baby step, visualization, d3, coffee]
categories: life
---

为了测试 `D3` 在 `markdown` 正文中是否正常使用，移植了一个对咖啡风味轮的可视化，如下：

<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js" charset="utf-8"></script>

<div align=center id="vis" style="font-size:13pt;font-family:helvetica;zoom:0.6;"></div>

<script src="http://daweih.github.io/js/coffee_flavour_wheel.js" charset="utf-8"></script>

目前，本地的 `CSS` 还是无法直接嵌入。需要 D3 直接写入 `DOM`。

`D3` 在本站嵌入成功后，我会开始做一些可视化的学习笔记上来。这样，在笔记里面，就可以添加实时的演示了。

本次嵌入的可视化来自[这里](http://www.jasondavies.com/coffee-wheel/)。