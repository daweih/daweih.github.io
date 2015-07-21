title: batch BLAT
date: 2011-07-20 22:04:18
tags: [bioinformatics, perl] 
categories: profession
---
> 原载于[我的 wordpress 博客](https://daweimhuang.wordpress.com/)

这个脚本可以自动化BLAT的运行。
提供以下功能：
1. 提供打包后的并行运行功能。
2. 监控所有节点上进程并在结束后更新log文件
3. 通过生成ooc文件加快比对速度
4. 所有中间文件被保存。单个任务的错误只学要重新提交单个包即可

适用：
1. 主要适用cDNA对基因组注释的提速
2. 可以指定包的数量；对于大的任务，可以拆分为更多的小包来提速。
3. 通过修改system函数内的命令，可以应用于其他序列比对软件的提速。

使用：
1. 必须用nohup命令在login上提交（cluster的管理节点）。
2. 使用>符来指定log文件的输出位置。
3. 提交后可以关闭console，但必须在log文件输出Done making ooc file.。这个位置的功能尚需要改进。

经过测试，单个基因组水平（使用人，小鼠，水稻测试）的cDNA注释可以在20分钟内完成。
cpuinfo:
Intel(R) Xeon(R)  Processor (Intel64 Harpertown)
=====  Processor composition  =====
Processors(CPUs)  : 8
Packages(sockets) : 2
Cores per package : 4
Threads per core  : 1

memory: 16G

[下载](https://github.com/daweih/d3_bioviz/blob/master/batch_blat/package_blat.pl)