title: Install and test bowtie and tophat
date: 2015-07-24 16:27:11
updated: 2015-07-24 16:27:11
tags: [bioinformatics, NGS, baby step]
categories: profession
---

### Install and test bowtie and tophat

注意 `/abs_path/filename` 表示存放 `filename` 文件的绝对路径。

#### 下载可执行程序：

``` bash
# 查看系统的版本
$ uname -a
*x86_64*

# 下载
$ wget http://vorboss.dl.sourceforge.net/project/bowtie-bio/bowtie2/2.2.5/bowtie2-2.2.5-linux-x86_64.zip
$ wget http://ccb.jhu.edu/software/tophat/downloads/tophat-2.1.0.Linux_x86_64.tar.gz
```

#### 修改环境变量

``` bash
$ vi ~/.bash_profile

# 添加下面一行
export PATH=/abs_path/tophat-2.1.0.Linux_x86_64:/abs_path/bowtie2-2.2.5:$PATH

# 环境变量生效
$ source ~/.bash_profile
```

#### 下载测试用数据，用 bowtie2 做 index，测试 tophat:

``` bash
$ wget http://ccb.jhu.edu/software/tophat/downloads/test_data.zip
$ unzip test_data.zip
$ cd test_data
$ bowtie2-build /abs_path/test_ref.fa /abs_path/test_ref
$ tophat /abs_path/test_ref test_reads.fq
```

#### Reference
- [Indexing and Barcoding for Illumina NextGen Sequencing](http://www.umassmed.edu/uploadedFiles/nemo/Landing_Pages/Indexing%20and%20Barcoding%20for%20Illumina%20NextGen%20Sequencing.pdf)

#### Software
- [tophat](http://ccb.jhu.edu/software/tophat/index.shtml): [test_data_set](http://ccb.jhu.edu/software/tophat/downloads/test_data.zip)
- [bowtie](http://bowtie-bio.sourceforge.net/index.shtml)


<br>
<div align=center>
<img src="http://daweih.github.io/images/wechat_small_black.jpg">
</div>
