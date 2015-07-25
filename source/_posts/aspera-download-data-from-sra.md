title: Aspera download data from SRA
date: 2015-07-24 22:15:54
updated: 2015-07-24 22:15:54
tags: [bioinformatics, NGS, SRA]
categories: profession
---

#### 背景

- 为什么要使用 aspera？
  - 因为测序数据迈入 NGS 时代后，通量增长很快，尤其是 NCBI SRA 的数据，单个压缩包很大，需要使用更快速的传输工具。
  - aspera 提供命令行的交互，便于管理

- aspera 比传统的 scp, wget 速度更快，同时具有命令行程序的纯文本输出特性。

- aspera 还有图形界面版本，适合多种偏好的用户。

[博耘生物说](http://boyun.sh.cn/bio/?p=1933):
> 速铂Aspera是一套商业的高速文件传输解决方案，随着高通量数据的大量产生，从而对于大文件快速传输的需求，开始应用到生物领域，目前NCBI、EBI的SRA库都提供这样的服务。
...
一句话，远距离，大文件，Aspera优势巨大。

我说：
> 你如果经历过使用 `wget` 下载 sra 数据要等几天几个星期，还可能断掉，就知道用下面这个黑科技有多爽了。


#### 安装 aspera-connect：

``` bash
# 查看系统的版本
$ uname -a
*x86_64*

# 下载对应的版本（目前测试需要翻墙）
$ wget http://download.asperasoft.com/download/sw/connect/3.6.0/aspera-connect-3.6.0.106805-linux-64.tar.gz

$ gunzip aspera-connect-3.6.0.106805-linux-64.tar.gz
$ tar -xvf aspera-connect-3.6.0.106805-linux-64.tar

# 安装
$ sh aspera-connect-3.6.0.106805-linux-64.sh 
```

安装输出结果

``` bash
Installing Aspera Connect

Deploying Aspera Connect (/home/your_user_name/.aspera/connect) for the current user only.
Restart firefox manually to load the Aspera Connect plug-in

Install complete.
```

#### 修改环境变量

``` bash
$ vi ~/.bash_profile

# 添加下面一行
export PATH=/home/your_user_name/.aspera/connect/bin:$PATH

# 环境变量生效
$ source ~/.bash_profile
```

#### 配置参数，测试下载
``` bash
# PRIVATE-KEY-FILE 文件位置
~/.aspera/connect/etc/asperaweb_id_dsa.openssh


# 下载用的命令
$ ascp  -i asperaweb_id_dsa.openssh --mode recv --host ftp-private.ncbi.nlm.nih.gov --user anonftp   --file-list  sra_list.txt  -k 1 -QT -l 200m  /path_to_save_download/


# 对参数的解释
Usage: ascp [OPTION] SRC... DEST
          SRC to DEST, or multiple SRC to DEST dir
          SRC, DEST format: [[user@]host:]PATH
  -h,--help                       Display usage
  -A,--version                    Display version.
  -i PRIVATE-KEY-FILE             Private-key file name (id_rsa)
  --mode=MODE                     MODE: send, recv
  --host=HOSTNAME
  --user=USERNAME
  --file-list=FILENAME            File with list of sources
  -k RESUME-LEVEL                 Resume criterion: 0,3,2,1
  -l MAX-RATE                     Max transfer rate
  -q                              Disable progress display
  -T                              Disable encryption
# 一般来说，你只要修改 `--file-list` `-i` 对因你自己的情况即可
```

#### 获取下载文件地址

一个 `sra_list.txt` 例子:

``` bash
/sra/sra-instant/reads/ByRun/sra/ERR/ERR009/ERR009428/ERR009428.sra
```

如何获取此地址：

1. 找到 `sra` 文件的页面（发表的文章一般会提供这个页面的 ID），点击红框进入下一页

  ![找到sra文件的页面（发表的文章一般会提供这个页面的 ID），点击红框进入下一页](http://daweih.github.io/images/sra1.png)

2. 地址栏里显示了地址，然后按照上文的 `sra_list.txt` 模式编写

  ![地址栏里显示了地址，然后按照上文的 `sra_list.txt` 模式编写](http://daweih.github.io/images/sra2.png)
 

#### OS X 如何使用？

在 OS X 下，可以直接从官网下载 dmg 的安装包。安装之后，注意：

``` bash
# 程序的可执行文件路径
/Users/your_user_name/Applications/Aspera\ Connect.app/Contents/Resources/ascp

# PRIVATE-KEY-FILE 文件位置
/Users/your_user_name/Applications/Aspera\ Connect.app/Contents/Resources/asperaweb_id_dsa.openssh
```

其他上述参数沿用。

最后，请欣赏华丽丽的下载速度。

  ![ascp](http://daweih.github.io/images/ascp.png)

<br>
<br>
<div align=center>
<img src="http://daweih.github.io/images/wechat_small_black.jpg">
</div>