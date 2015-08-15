title: sra data try out
date: 2015-07-26 22:54:15
updated: 2015-07-26 22:54:15
tags: [baby step, bioinformatics, NGS, SRA]
categories: profession
---

#### 获取感兴趣的 sra 的数据

从文章中得到 id

到 sra 网站找到对应的页面

#### 下载 sra 的数据
[Aspera download data from SRA](http://daweih.github.io/2015/07/24/aspera-download-data-from-sra/)

#### 解压缩

下载 [SRA Toolkit](http://www.ncbi.nlm.nih.gov/Traces/sra/?view=software):

``` bash
$ wget http://ftp-trace.ncbi.nlm.nih.gov/sra/sdk/2.5.2/sratoolkit.2.5.2-centos_linux64.tar.gz
```

#### 前处理 sra 的数据

参考[NGS note](NGS-note.md)。

``` bash
--split-files                    Dump each read into a separate file.Files will received suffix corresponding to read number
 --split-3                        Legacy 3-file splitting for mate-pairs:
                                  First 2 biological reads satisfying dumping conditions
                                  are placed in files *_1.fastq and *_2.fastq
                                  If only 1 biological read is dumpable - it is placed in *.fastq
                                  
fastq-dump --split-files SRR189044.sra

```

#### 参考文献
- [Huang,X. et al. (2012) A map of rice genome variation reveals the origin of cultivated rice. Nature, 490, 497–501.](http://www.ncbi.nlm.nih.gov/pubmed/?term=23034647)


<br>
<div align=center>
<img src="http://daweih.github.io/images/wechat_small_black.jpg">
</div>