title: SNP calling 测试
date: 2015-07-28 08:19:55
updated: 2015-07-28 08:19:55
tags: [baby step, bioinformatics, NGS]
categories: profession
---

本笔记应用的实例 [SNP calling 流程](http://sz.ctfs.ftn.qq.com/ftn_handler/3ef34cec7f4edc05a63d67886080331fcdebd7642054d1bbc1dc6b092209e9005fbf8d577e460c008a04633bdf9bb7ccdbb6bb5dab58571a835c7b60eb118d7d/snp-calling数据及流程实例.zip) 来自于生物信息菜鸟群。

### 安装软件

- [Bwa](http://nchc.dl.sourceforge.net/project/bio-bwa/bwa-0.7.12.tar.bz2)
- [Bowtie2](http://vorboss.dl.sourceforge.net/project/bowtie-bio/bowtie2/2.2.5/bowtie2-2.2.5-linux-x86_64.zip)
- [Samtools](http://cznic.dl.sourceforge.net/project/samtools/samtools/1.2/samtools-1.2.tar.bz2)
  - [samtools](http://nchc.dl.sourceforge.net/project/samtools/samtools/1.0/samtools-1.0.tar.bz2)
  - [htslib](http://cznic.dl.sourceforge.net/project/samtools/samtools/1.0/htslib-1.0.tar.bz2)
  - [bcftools](http://cznic.dl.sourceforge.net/project/samtools/samtools/1.0/bcftools-1.0.tar.bz2)
- [Bcftools]()
- [Varscan.jar]()

``` bash
$ tar -xvf samtools-1.2.tar.bz2 
$ cd samtools-1.2
$ make
$ make prefix=~/bin/samtools/ install
```

参考[另一篇笔记](SNP-calling-note.md)。

### 文件纵览及解压缩

``` bash
$ ls
BRCA_gene.fa   SRR258838.sra  SRR258843.sra  SRR258848.sra
SRR258834.sra  SRR258839.sra  SRR258844.sra  SRR258849.sra
SRR258835.sra  SRR258840.sra  SRR258845.sra  SRR258850.sra
SRR258836.sra  SRR258841.sra  SRR258846.sra  SRR258851.sra
SRR258837.sra  SRR258842.sra  SRR258847.sra  SRR258852.sra

 fastq-dump --split-files *.sra
$ for i in `ls *.sra`; do fastq-dump $i; done
```

### Bwa 输出 sam

#### 用bwa构建索引

``` bash
$ bwa index BRCA_gene.fa 
[bwa_index] Pack FASTA... 0.00 sec
[bwa_index] Construct BWT for the packed sequence...
[bwa_index] 0.03 seconds elapse.
[bwa_index] Update BWT... 0.00 sec
[bwa_index] Pack forward-only FASTA... 0.00 sec
[bwa_index] Construct SA from BWT and Occ... 0.01 sec
[main] Version: 0.7.12-r1039
[main] CMD: bwa index BRCA_gene.fa
[main] Real time: 0.068 sec; CPU: 0.048 sec
```

#### 输出sai文件

``` bash
$ bwa aln BRCA_gene.fa SRR258841.fastq > SRR258841.sai
[bwa_aln] 17bp reads: max_diff = 2
[bwa_aln] 38bp reads: max_diff = 3
[bwa_aln] 64bp reads: max_diff = 4
[bwa_aln] 93bp reads: max_diff = 5
[bwa_aln] 124bp reads: max_diff = 6
[bwa_aln] 157bp reads: max_diff = 7
[bwa_aln] 190bp reads: max_diff = 8
[bwa_aln] 225bp reads: max_diff = 9
[bwa_aln_core] calculate SA coordinate... 0.75 sec
[bwa_aln_core] write to the disk... 0.00 sec
[bwa_aln_core] 17910 sequences have been processed.
[main] Version: 0.7.12-r1039
[main] CMD: bwa aln BRCA_gene.fa SRR258841.fastq
[main] Real time: 0.794 sec; CPU: 0.785 sec

$ for i in `ls *.fastq| awk -F'.' '{print $1}'`; do bwa aln BRCA_gene.fa $i.fastq > $i.sai; done
```

#### sai 文件转换为 sam 文件

``` bash
$ bwa samse BRCA_gene.fa SRR258841.sai SRR258841.fastq >SRR258841.sam
$ for i in `ls *.fastq| awk -F'.' '{print $1}'`; do bwa samse BRCA_gene.fa $i.sai $i.fastq > $i.sam; done
```


### Bowtie 输出 sam

#### 创建索引

``` bash
$ bowtie2-build BRCA_gene.fa BRCA_gene_index	
```

#### align, 输出 sam文件

``` bash
$ bowtie2 -x BRCA_gene_index -U SRR258841.fastq -S SRR258841.sam
17910 reads; of these:
  17910 (100.00%) were unpaired; of these:
    4935 (27.55%) aligned 0 times
    12975 (72.45%) aligned exactly 1 time
    0 (0.00%) aligned >1 times
72.45% overall alignment rate

$ for i in `ls *.fastq| awk -F'.' '{print $1}'`; do  echo $i; bowtie2 -x BRCA_gene_index -U $i.fastq -S $i.sam; echo ; echo ; echo ; done >log.Bowtie.txt
```
### 结果比较

- Bwa:

``` bash
$ head -10 SRR258841.sam 
@SQ	SN:17	LN:81189
@PG	ID:bwa	PN:bwa	VN:0.7.12-r1039	CL:bwa samse BRCA_gene.fa SRR258841.sai SRR258841.fastq
SRR258841.1	16	17	54309	37	36M	*	0	0	CTGAAGACAGAGCCCCAGAGTCAGCTCGTGTTGGCA	////////////////////////////////////	XT:A:U	NM:i:0	X0:i:1	X1:i:0	XM:i:0	XO:i:0	XG:i:0	MD:Z:36
SRR258841.2	16	17	48902	37	45M	*	0	0	CCTATAAGCCAGAATCCAGAAGGCCTTTCTGCTGACAAGTTTGAG	/////////////////////////////////////////////	XT:A:U	NM:i:0	X0:i:1	X1:i:0	XM:i:0	XO:i:0	XG:i:0	MD:Z:45
SRR258841.3	16	17	42997	37	43M	*	0	0	CTTCTAACAGCTACCCTTCCATCATAAGTGACTCTTCTGCCCT	///////////////////////////////////////////	XT:A:U	NM:i:0	X0:i:1	X1:i:0	XM:i:0	XO:i:0	XG:i:0	MD:Z:43
SRR258841.4	4	*	0	0	*	*	0	0	GCCAGCTGTTTGCTATTTATTACAGAATTCAGCCTT	////////////////////////////////////
SRR258841.5	16	17	33825	37	28M1D11M	*	0	0	TATCTGCTAGCTTGTTTTCTTCACAGTGAGTGAATTGGA	///////////////////////////////////////	XT:A:U	NM:i:3	X0:i:1	X1:i:0	XM:i:2	XO:i:1	XG:i:1	MD:Z:0G0T26^C11
SRR258841.6	0	17	29585	37	34M	*	0	0	AAATCACCCCTCAAGGAACCAGGGATGAAATCAG	//////////////////////////////////	XT:A:U	NM:i:0	X0:i:1	X1:i:0	XM:i:0	XO:i:0	XG:i:0	MD:Z:34
SRR258841.7	16	17	25655	37	31M	*	0	0	CTGAGGACAAAGCAGCGGATACAACCTCAAA	///////////////////////////////	XT:A:U	NM:i:X0:i:1	X1:i:0	XM:i:0	XO:i:0	XG:i:0	MD:Z:31
SRR258841.8	16	17	62065	37	34M	*	0	0	ACGTTCTTCTGCTGTATGTAACCTGTCTTTTCTA	//////////////////////////////////	XT:A:U	NM:i:0	X0:i:1	X1:i:0	XM:i:0	XO:i:0	XG:i:0	MD:Z:34
```

- Bowtie2:

``` bash
$ head -10 SRR258841.sam 
@HD	VN:1.0	SO:unsorted
@SQ	SN:17	LN:81189
@PG	ID:bowtie2	PN:bowtie2	VN:2.2.5	CL:"/home/data2/huangdawei/bin/bowtie2-2.2.5/bowtie2-align-s --wrapper basic-0 -x BRCA_gene_index -S SRR258841.sam -U SRR258841.fastq"
SRR258841.1	16	17	54309	42	36M	*	0	0	CTGAAGACAGAGCCCCAGAGTCAGCTCGTGTTGGCA	////////////////////////////////////	AS:i:0	XN:i:0	XM:i:0	XO:i:0	XG:i:0	NM:i:0	MD:Z:36	YT:Z:UU
SRR258841.2	16	17	48902	42	45M	*	0	0	CCTATAAGCCAGAATCCAGAAGGCCTTTCTGCTGACAAGTTTGAG	/////////////////////////////////////////////	AS:i:0	XN:i:0	XM:i:0	XO:i:0	XG:i:0	NM:i:0	MD:Z:45	YT:Z:UU
SRR258841.3	16	17	42997	42	43M	*	0	0	CTTCTAACAGCTACCCTTCCATCATAAGTGACTCTTCTGCCCT	///////////////////////////////////////////	AS:i:0	XN:i:0	XM:i:0	XO:i:0	XG:i:0	NM:i:0	MD:Z:43	YT:Z:UU
SRR258841.4	4	*	0	0	*	*	0	0	GCCAGCTGTTTGCTATTTATTACAGAATTCAGCCTT	////////////////////////////////////	YT:Z:UU
SRR258841.5	4	*	0	0	*	*	0	0	TCCAATTCACTCACTGTGAAGAAAACAAGCTAGCAGATA	///////////////////////////////////////	YT:Z:UU
SRR258841.6	0	17	29585	42	34M	*	0	0	AAATCACCCCTCAAGGAACCAGGGATGAAATCAG	//////////////////////////////////	AS:i:0	XN:i:0	XM:i:0	XO:i:0	XG:i:0	NM:i:0	MD:Z:34	YT:Z:UU
SRR258841.7	16	17	25655	42	31M	*	0	0	CTGAGGACAAAGCAGCGGATACAACCTCAAA	///////////////////////////////	AS:i:0	XN:i:XM:i:0	XO:i:0	XG:i:0	NM:i:0	MD:Z:31	YT:Z:UU
```

### delete unmapped reads: SAMtools

``` bash
$ samtools view -SF 4  SRR258841.sam > SRR258841.F.sam
$ for i in `ls *.sam| awk -F'.' '{print $1}'`; do samtools view -SF 4  $i.sam > $i.F.sam; done
```

### create dictionary of ref: Picard-tools

``` bash
$ java -jar /home/data2/huangdawei/bin/picard/dist/picard.jar CreateSequenceDictionary OUTPUT=ref.sam R=BRCA_gene.fa
[Tue Jul 28 21:10:54 HKT 2015] picard.sam.CreateSequenceDictionary REFERENCE=BRCA_gene.fa OUTPUT=ref.sam    TRUNCATE_NAMES_AT_WHITESPACE=true NUM_SEQUENCES=2147483647 VERBOSITY=INFO QUIET=false VALIDATION_STRINGENCY=STRICT COMPRESSION_LEVEL=5 MAX_RECORDS_IN_RAM=500000 CREATE_INDEX=false CREATE_MD5_FILE=false GA4GH_CLIENT_SECRETS=client_secrets.json
[Tue Jul 28 21:10:54 HKT 2015] Executing as huangdawei@cluster.genomics.net.cn on Linux 2.6.32-431.11.2.el6.x86_64 amd64; Java HotSpot(TM) 64-Bit Server VM 1.7.0_51-b13; Picard version: 1.137(c8c9f584d7042e98867ea3cfc355fb7b89acd2e6_1438018139) JdkDeflater
[Tue Jul 28 21:10:54 HKT 2015] picard.sam.CreateSequenceDictionary done. Elapsed time: 0.00 minutes.
Runtime.totalMemory()=759693312
```

``` bash
cat ref.sam > unsorted_file.sam
cp bowtie/SRR258841.F.sam ./1.F.sam
cat 1.F.sam >> unsorted_file.sam

java -jar /home/data2/huangdawei/bin/picard/dist/picard.jar SortSam INPUT= unsorted_file.sam OUTPUT=1.sorted.sam SO=coordinate

samtools view -bS 1.sorted.sam –o 1.bam



bwa index BRCA_gene.fa -a bwtsw

bwa aln –e 10 –t 4 BRCA_gene.fa SRR258841.fastq –f 1_1_1.sai

```

<br>
<div align=center>
<img src="http://daweih.github.io/images/wechat_small_black.jpg">
</div>


mkdir snp_calling_test_new
cp snp-calling-eg/BRCA_gene.fa snp_calling_test/ref.fasta
cd snp_calling_test/
bwa index -a bwtsw ref.fasta
cp ../snp-calling-eg/SRR258841.fastq ./1_1_1.fastq
bwa aln -e 10 -t 4 ref.fasta 1_1_1.fastq -f 1_1_1.sai
bwa samse  ref.fasta 1_1_1.sai  1_1_1.fastq  -f 1.sam 
#samse
#sampe
samtools view -SF 4 1.sam > 1.F.sam
java -jar /home/data2/huangdawei/bin/picard/dist/picard.jar CreateSequenceDictionary OUTPUT=ref.sam R=ref.fasta
cat ref.sam > unsorted_file.sam && cat 1.F.sam >> unsorted_file.sam
java -jar /home/data2/huangdawei/bin/picard/dist/picard.jar SortSam INPUT=unsorted_file.sam OUTPUT=1.sorted.sam SO=coordinate
samtools view -bS 1.sorted.sam -o 1.bam
java -jar /home/data2/huangdawei/bin/picard/dist/picard.jar AddOrReplaceReadGroups I=1.bam O=1.addhead.bam ID=i_1ID LB=i_1ID    PL=Illumina  PU=i_1PU SM=i_1
java -jar /home/data2/huangdawei/bin/picard/dist/picard.jar MergeSamFiles INPUT=1.addhead.bam  OUTPUT=i_1.bam
java -jar /home/data2/huangdawei/bin/picard/dist/picard.jar MarkDuplicates MAX_FILE_HANDLES_FOR_READ_ENDS_MAP=8000 INPUT=i_1.bam     OUTPUT=i_1.dedup.bam METRICS_FILE=i_1.dedup.metrics
