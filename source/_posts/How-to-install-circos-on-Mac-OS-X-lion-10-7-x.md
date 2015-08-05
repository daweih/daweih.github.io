title: How to install circos on Mac OS X lion (10.7.x)
date: 2011-11-17 20:02:24
tags: [bioinformatics, visualization, OS X] 
categories: profession
---
> 原载于[我的 wordpress 博客](https://daweimhuang.wordpress.com/)

<div align=center>
<img src="http://daweih.github.io/images/cancer-genome-challenge.jpg">
</div>


Circos 是个画圈图的好工具。在基因组相关文章里展示基因排列，同源性区段，duplication 等，效果很好。由于现在高对平文章对图表的美观程度都有了更高的要求，所以转移到 circos 下来绘制圈图很有必要了（虽然有很多其他的软件和工具）。

Circos 可以安装在 unix based os 上。由于 Mac OS X 是 unix 内核，于是就没有理由不研究一下 circus 的本地化。另外一个原因就是，做生物信息，如果完全把软件问题交给管理员，那么能学的技术问题就很有限。而且走人之后，服务器肯定是不能带走的。因此完全本地化工具包是很有必要的。

#### 安装依赖的包
circus 的安装其实很简单。下载解压后，cd ../circos-0.55/bin，运行 ./test.modules，就可以看到需要的包有那些已经安装，那些需要手动安装。比如：

``` bash
ok Carp
ok Config::General
ok Data::Dumper
ok Digest::MD5
ok File::Basename
ok File::Spec::Functions
ok FindBin
ok GD
ok GD::Polyline
ok Getopt::Long
ok Graphics::ColorObject
ok IO::File
ok List::MoreUtils
ok List::Util
ok Math::Bezier
ok Math::BigFloat
ok Math::Round
ok Math::VecStat
ok Memoize
ok POSIX
ok Params::Validate
ok Pod::Usage
ok Readonly
ok Regexp::Common
ok Set::IntSpan
ok Storable
ok Time::HiRes
```

#### 其他

以上是全部安装正常的结果。如果第一次运行这个 check 脚本，显示有未安装的。可以尝试以下两种方法来安装：

1. fink
2. cpan

由于 cirsos 是个基于 perl+svg 编写的软件，所以大部分要安装的包都可以通过 cpan。
在 os x下，sudo perl -MCPAN -e shel，之后键入 install + 包名称即可，如键入`install Math::Bezier`。

由于未知原因，GD 无法用 cpan 安装，于是借助 fink。

fink 下移植了大部分的 linux 通用的软件，只是更新会比 osx 稍慢。不过象 GD 这种常用的包更新还很快。bioperl 就没那么幸运了（bioperl 我只能通过 cpan 来安装了，发现比 fink 的速度更快，只是 perldoc 无法调用）。

GD 安装的日志竟然跑了 1 万多行。

#### 配置

##### 修改/bin/env

由于mac os x的默认路径和一般linux不同，因此要将程序的第一行中“/bin/env”修改为“/usr/bin/env”。

或者使用命令“ sudo ln -s /usr/bin/env /bin/en”建立一个镜像。

#### 测试

现在可以用circos提供的测试文件来检查安装是否成功了。

``` bash
cd /Applications/Bioinformatics/circos-0.55/example/
/Applications/Bioinformatics/circos-0.55/bin/circos -conf ./circos.conf
```

circos 提供的 tutorials 需要跳转到 tutorials 这个文件夹而不是 data 下运行，这个在官方的手册里是错误的。

搞定。


<br>
<div align=center>
<img src="http://daweih.github.io/images/wechat_small_black.jpg">
</div>