title: "使用DEVONthink搭建个人wiki＋Safari使用技巧"
date: 2012-07-26 10:37:41
updated: 2012-07-26 10:37:41
tags: [baby step, database, OS X, app]
categories: profession
---

<div align=center>
<img src="http://daweih.github.io/images/devonthink1.jpg">
</div>

DEVONthink是很强大的个人数据库软件。我计划写一个系列的帖子来介绍。

由于最近比较忙，所以先按部分来写，逐步发出来。

今天介绍一下用DEVONthink搭建个人web数据服务，类似个人wiki。

当然，更常用的方法是用MediaWiki来搭建个人wiki，同样在Mac下，也很简单。这是题外话，我以后单独写个帖子介绍。

#### 用DEVONthink搭建个人web数据服务

使用DEVONthink搭建个人wiki的好处就在于简单——开箱即用。下载了DEVONthink Office之后，就可以将你的个人数据导入了。

这个软件的好处之一还在于它支持AppleScript，是个深度脚本化的程序，继承了Mac系统下好的软件编写风格。以此，它是个专业级别的软件。如果你懂这种和英语差不多的Apple自带的编程语言，完全可以写一些脚本来配合你特定的工作。当然，DEVONthink自己也带了很多脚本。比如图1中所演示的导入UNIX下man和perldoc两个命令的输出结果的脚本。你完全可以使用这两个脚本将自己常用的命令保存后，方便日后检索。之前也看过帖子介绍如何让Preview来导入man命令的输出结果。显然在DEVONthink中，自带了管理和检索的工具，日后反复使用中要更方便。
<div align=center>
<img src="http://daweih.github.io/images/devonthink2.jpg">
</div><center>图1，DEVONthink自带的AppleScript，可以导入man和perldoc的帮助文档。（点击图片，在新窗口显示原始尺寸）

<br>

你的数据积累了一些之后，就可以启动DEVONthink的web server服务了。使用[ Command⌘ + , ] 启动Preference...，在server这个选项卡中，键入需要的信息，如Port（使用固定值，方便访问）、用户名、密码等。如果你可以为你的Mac server分配固定的ip，那么就可以随时随地通过外网访问。之后点击启动，这按钮变为stop之后，服务就启动了。可以通过stop按钮后面的任何一个网址来访问。为了方便，你可以将这些网址保存在你笔记本、手机或iPad浏览器的收藏夹中。

<div align=center>
<img src="http://daweih.github.io/images/devonthink3.jpg">
</div><center>图2，启动Web server服务。（点击图片，在新窗口显示原始尺寸）

<br>


之后，就可以通过其他设备上的浏览器来访问了：在地址栏中输入图2中stop按钮后面你设置的地址，如果设置了用户名和密码，会要求你输入，如图3:

<div align=center>
<img src="http://daweih.github.io/images/devonthink4.jpg">
</div><center>图3，使用浏览器访问数据库。（点击图片，在新窗口显示原始尺寸）

<br>



登陆之后，就可以进行常规的浏览，检索，如图4.1，2，3。

<div align=center>
<img src="http://daweih.github.io/images/devonthink5.jpg">
</div><center>图4.1，Safari登陆后的显示情况。（点击图片，在新窗口显示原始尺寸）

<br>

<div align=center>
<img src="http://daweih.github.io/images/devonthink6.jpg">
</div><center>图4.2，Chrome 在IOS下的登陆
<br>

<div align=center>
<img src="http://daweih.github.io/images/devonthink7.jpg">
</div><center>图4.3，Chrome 在IOS下的浏览

<br>

在web浏览模式下，也可以向数据库中添加文件，支持大多数文档、图片甚至音乐、影片的文件格式。

<div align=center>
<img src="http://daweih.github.io/images/devonthink8.jpg">
</div><center>图5，上传一个图片。

<br>

点击图片，在新窗口显示原始尺寸

<div align=center>
<img src="http://daweih.github.io/images/devonthink9.jpg">
</div><center>图6，图片上传后的效果。（点击图片，在新窗口显示原始尺寸）

<br>

也可以在数据库中进行搜索。搜索功能其实是DEVONthink作为数据库软件擅长的，不过对中文搜索要用波浪线“~”间隔关键词。

<div align=center>
<img src="http://daweih.github.io/images/devonthink10.jpg">
</div><center>图7，搜索的界面。（点击图片，在新窗口显示原始尺寸）

<br>

<div align=center>
<img src="http://daweih.github.io/images/devonthink11.jpg">
</div><center>图8，搜索的结果。（点击图片，在新窗口显示原始尺寸）

<br>

其中比较好的一点是，可以采用浏览器内置的搜索。使用Safari内置的高亮搜索效果，看man和perldoc的结果，实在是一种享受。

<div align=center>
<img src="http://daweih.github.io/images/devonthink12.jpg">
</div><center>图9，使用浏览器内置的搜索功能。（点击图片，在新窗口显示原始尺寸）

<br>

下面介绍一个Safari的小技巧。

有时候，我们需要一次性打开多个网页，当一个一个点击或输入麻烦又耗时。这时候，可以利用一个Safari文件夹，将需要打开的连接都放进去，如图10，之后选中那个Auto-Click的选项。此时在Bookmark bar中的文件夹图标的右侧会出现一个小方块。这时，点击这个就可以打开里面保存的所有链接。如果想点击其中的单个链接，按住command⌘同时点击即可。

<div align=center>
<img src="http://daweih.github.io/images/devonthink13.jpg">
</div><center>图10，建立自动打开多个链接的文件夹。（点击图片，在新窗口显示原始尺寸）

<br>


<div align=center>
<img src="http://daweih.github.io/images/devonthink14.jpg">
</div><center>图11，打开后的效果。（点击图片，在新窗口显示原始尺寸）

<br>

好了。说了这么多，个人wiki的方法先介绍到这里吧。DEVONthink提供一个月的试用期。虽然价格稍贵，但确实是很好用的跟人数据库软件。Enjoy!


#### 更多帖子
- [读书笔记、读书卡片与DEVONthink](http://kangjian.net/blog/1260/)