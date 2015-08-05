title: SNP calling 的一般流程
date: 2015-07-29 08:19:55
updated: 2015-07-29 08:19:55
tags: [baby step, bioinformatics, NGS, SNP]
categories: profession
---

本笔记的测试数据来源于 [SNP calling 流程](http://sz.ctfs.ftn.qq.com/ftn_handler/3ef34cec7f4edc05a63d67886080331fcdebd7642054d1bbc1dc6b092209e9005fbf8d577e460c008a04633bdf9bb7ccdbb6bb5dab58571a835c7b60eb118d7d/snp-calling数据及流程实例.zip) by 生物信息菜鸟群。

### 安装软件

- [Bwa](http://nchc.dl.sourceforge.net/project/bio-bwa/bwa-0.7.12.tar.bz2)
- [Samtools](http://cznic.dl.sourceforge.net/project/samtools/samtools/1.2/samtools-1.2.tar.bz2)
  - [samtools](http://nchc.dl.sourceforge.net/project/samtools/samtools/1.0/samtools-1.0.tar.bz2)
  - [htslib](http://cznic.dl.sourceforge.net/project/samtools/samtools/1.0/htslib-1.0.tar.bz2)
  - [bcftools](http://cznic.dl.sourceforge.net/project/samtools/samtools/1.0/bcftools-1.0.tar.bz2)
- [picard](https://github.com/broadinstitute/picard)
- [GATK](https://github.com/broadgsa/gatk)
- [vcftools](https://github.com/vcftools/vcftools)

``` bash

mkdir snp_calling_test_new
cp snp-calling-eg/BRCA_gene.fa snp_calling_test_new/ref.fasta
cd snp_calling_test_new/
bwa index -a bwtsw ref.fasta
cp ../snp_calling_test/1_1_1.fastq .

bwa aln -e 10 -t 4 ref.fasta 1_1_1.fastq -f 1_1_1.sai
bwa aln -e 10 -t 4 ref.fasta 1_1_2.fastq -f 1_1_2.sai
bwa samse  ref.fasta 1_1_1.sai  1_1_1.fastq  -f 1.sam 
bwa sampe  ref.fasta 1_1_1.sai 1_1_2.sai 1_1_1.fastq 1_1_2.fastq -f 1.sam
#samse
#sampe
samtools view -SF 4 1.sam > 1.F.sam
java -jar /home/data2/huangdawei/bin/picard/dist/picard.jar CreateSequenceDictionary OUTPUT=ref.sam R=ref.fasta
cat ref.sam > unsorted_file.sam && cat 1.F.sam >> unsorted_file.sam
java -jar /home/data2/huangdawei/bin/picard/dist/picard.jar SortSam INPUT=unsorted_file.sam OUTPUT=1.sorted.sam SO=coordinate
samtools view -bS 1.sorted.sam -o 1.bam
java -jar /home/data2/huangdawei/bin/picard/dist/picard.jar AddOrReplaceReadGroups I=1.bam O=1.addhead.bam ID=i_1ID LB=i_1ID    PL=Illumina  PU=i_1PU SM=i_1
java -jar /home/data2/huangdawei/bin/picard/dist/picard.jar MergeSamFiles INPUT=1.addhead.bam  OUTPUT=i_1.bam
java -jar /home/data2/huangdawei/bin/picard/dist/picard.jar MarkDuplicates MAX_FILE_HANDLES_FOR_READ_ENDS_MAP=8000 INPUT=i_1.bam OUTPUT=i_1.dedup.bam METRICS_FILE=i_1.dedup.metrics

java -jar /home/data2/huangdawei/bin/gatk/GenomeAnalysisTK.jar -R ref.fasta -T RealignerTargetCreator -o i_1.realn.intervals -I i_1.dedup.bam



# install bwa
$ tar -xvf bwa-0.7.12.tar.bz2
$ make
# 修改环境变量

# install samtools
$ wget http://cznic.dl.sourceforge.net/project/samtools/samtools/1.0/samtools-bcftools-htslib-1.0_x64-linux.tar.bz2
$ tar -xvf samtools-bcftools-htslib-1.0_x64-linux.tar.bz2 
# 修改环境变量

# install picard
$ git clone git@github.com:broadinstitute/picard.git
$ git clone  https://github.com/samtools/htsjdk.git
$ cd htsjdk/
$ ant htsjdk-jar
$ ant -lib lib/ant package-commands

# install GATK
$ git clone https://github.com/broadgsa/gatk.git


# install vcftools
$ git clone https://github.com/vcftools/vcftools.git
$ cd vcftools
$ make
# 修改环境变量

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

$ fastq-dump SRR258841.sra
# 得到 SRR258841.fastq

# 修改文件名为流程中的名字
$ cp BRCA_gene.fa ref.fasta
$ cp SRR258841.fastq 1_1_1.fastq
```
### bwa 输出 sam

#### 创建索引

``` bash
$ bwa index -a bwtsw ref.fasta
```

#### align, 输出 sam文件

``` bash
$ bwa aln -e 10 -t 4 ref.fasta 1_1_1.fastq -f 1_1_1.sai
[bwa_aln] 17bp reads: max_diff = 2
[bwa_aln] 38bp reads: max_diff = 3
[bwa_aln] 64bp reads: max_diff = 4
[bwa_aln] 93bp reads: max_diff = 5
[bwa_aln] 124bp reads: max_diff = 6
[bwa_aln] 157bp reads: max_diff = 7
[bwa_aln] 190bp reads: max_diff = 8
[bwa_aln] 225bp reads: max_diff = 9
[bwa_aln] fail to locate the index
$ bwa samse  ref.fasta 1_1_1.sai  1_1_1.fastq  -f 1.sam 
[bwa_sai2sam_se] fail to locate the index
#samse
#sampe
```

### 进一步处理

#### delete unmapped reads: SAMtools

``` bash
$ samtools view -SF 4 1.sam > 1.F.sam
```
#### create dictionary of ref: Picard-tools

``` bash
$ java -jar /home/data2/huangdawei/bin/picard/dist/picard.jar CreateSequenceDictionary OUT
PUT=ref.sam R=ref.fasta
[Wed Jul 29 09:05:13 HKT 2015] picard.sam.CreateSequenceDictionary REFERENCE=ref.fasta OUTPUT=ref.sam    TRUNCATE_NAMES_AT_WHITESPACE=true NUM_SEQUENCES=2147483647 VERBOSITY=INFO QUIET=false VALIDATION_STRINGENCY=STRICT COMPRESSION_LEVEL=5 MAX_RECORDS_IN_RAM=500000 CREATE_INDEX=false CREATE_MD5_FILE=false GA4GH_CLIENT_SECRETS=client_secrets.json
[Wed Jul 29 09:05:13 HKT 2015] Executing as huangdawei@cluster.genomics.net.cn on Linux 2.6.32-431.11.2.el6.x86_64 amd64; Java HotSpot(TM) 64-Bit Server VM 1.7.0_51-b13; Picard version: 1.137(c8c9f584d7042e98867ea3cfc355fb7b89acd2e6_1438018139) JdkDeflater
[Wed Jul 29 09:05:13 HKT 2015] picard.sam.CreateSequenceDictionary done. Elapsed time: 0.00 minutes.
Runtime.totalMemory()=759693312
$cat ref.sam > unsorted_file.sam && cat 1.F.sam >> unsorted_file.sam
$java -jar /home/data2/huangdawei/bin/picard/dist/picard.jar SortSam INPUT=unsorted_file.
sam OUTPUT=1.sorted.sam SO=coordinate
[Wed Jul 29 09:05:13 HKT 2015] picard.sam.SortSam INPUT=unsorted_file.sam OUTPUT=1.sorted.sam SORT_ORDER=coordinate    VERBOSITY=INFO QUIET=false VALIDATION_STRINGENCY=STRICT COMPRESSION_LEVEL=5 MAX_RECORDS_IN_RAM=500000 CREATE_INDEX=false CREATE_MD5_FILE=false GA4GH_CLIENT_SECRETS=client_secrets.json
[Wed Jul 29 09:05:13 HKT 2015] Executing as huangdawei@cluster.genomics.net.cn on Linux 2.6.32-431.11.2.el6.x86_64 amd64; Java HotSpot(TM) 64-Bit Server VM 1.7.0_51-b13; Picard version: 1.137(c8c9f584d7042e98867ea3cfc355fb7b89acd2e6_1438018139) JdkDeflater
INFO	2015-07-29 09:05:13	SortSam	Finished reading inputs, merging and writing to output now.
[Wed Jul 29 09:05:13 HKT 2015] picard.sam.SortSam done. Elapsed time: 0.00 minutes.
Runtime.totalMemory()=759693312
```

#### 生成 bam 文件

``` bash
$samtools view -bS 1.sorted.sam -o 1.bam
```
#### add head

``` bash
$java -jar /home/data2/huangdawei/bin/picard/dist/picard.jar AddOrReplaceReadGroups I=1.b
am O=1.addhead.bam ID=i_1ID LB=i_1ID    PL=Illumina  PU=i_1PU SM=i_1
[Wed Jul 29 09:05:14 HKT 2015] picard.sam.AddOrReplaceReadGroups INPUT=1.bam OUTPUT=1.addhead.bam RGID=i_1ID RGLB=i_1ID RGPL=Illumina RGPU=i_1PU RGSM=i_1    VERBOSITY=INFO QUIET=false VALIDATION_STRINGENCY=STRICT COMPRESSION_LEVEL=5 MAX_RECORDS_IN_RAM=500000 CREATE_INDEX=false CREATE_MD5_FILE=false GA4GH_CLIENT_SECRETS=client_secrets.json
[Wed Jul 29 09:05:14 HKT 2015] Executing as huangdawei@cluster.genomics.net.cn on Linux 2.6.32-431.11.2.el6.x86_64 amd64; Java HotSpot(TM) 64-Bit Server VM 1.7.0_51-b13; Picard version: 1.137(c8c9f584d7042e98867ea3cfc355fb7b89acd2e6_1438018139) JdkDeflater
INFO	2015-07-29 09:05:14	AddOrReplaceReadGroups	Created read group ID=i_1ID PL=Illumina LB=i_1ID SM=i_1

[Wed Jul 29 09:05:14 HKT 2015] picard.sam.AddOrReplaceReadGroups done. Elapsed time: 0.00 minutes.
Runtime.totalMemory()=759693312
```
#### merge 多个文件

``` bash
$java -jar /home/data2/huangdawei/bin/picard/dist/picard.jar MergeSamFiles INPUT=1.addhea
d.bam  OUTPUT=i_1.bam
[Wed Jul 29 09:05:15 HKT 2015] picard.sam.MergeSamFiles INPUT=[1.addhead.bam] OUTPUT=i_1.bam    SORT_ORDER=coordinate ASSUME_SORTED=false MERGE_SEQUENCE_DICTIONARIES=false USE_THREADING=false VERBOSITY=INFO QUIET=false VALIDATION_STRINGENCY=STRICT COMPRESSION_LEVEL=5 MAX_RECORDS_IN_RAM=500000 CREATE_INDEX=false CREATE_MD5_FILE=false GA4GH_CLIENT_SECRETS=client_secrets.json
[Wed Jul 29 09:05:15 HKT 2015] Executing as huangdawei@cluster.genomics.net.cn on Linux 2.6.32-431.11.2.el6.x86_64 amd64; Java HotSpot(TM) 64-Bit Server VM 1.7.0_51-b13; Picard version: 1.137(c8c9f584d7042e98867ea3cfc355fb7b89acd2e6_1438018139) JdkDeflater
INFO	2015-07-29 09:05:15	MergeSamFiles	Input files are in same order as output so sorting to temp directory is not needed.
INFO	2015-07-29 09:05:15	MergeSamFiles	Finished reading inputs.
[Wed Jul 29 09:05:15 HKT 2015] picard.sam.MergeSamFiles done. Elapsed time: 0.00 minutes.
Runtime.totalMemory()=759693312
```

#### deduplicate

``` bash
$ java -jar /home/data2/huangdawei/bin/picard/dist/picard.jar MarkDuplicates MAX_FILE_HAND
LES_FOR_READ_ENDS_MAP=8000 INPUT=i_1.bam     OUTPUT=i_1.dedup.bam METRICS_FILE=i_1.dedup.metrics
[Wed Jul 29 09:05:15 HKT 2015] picard.sam.markduplicates.MarkDuplicates MAX_FILE_HANDLES_FOR_READ_ENDS_MAP=8000 INPUT=[i_1.bam] OUTPUT=i_1.dedup.bam METRICS_FILE=i_1.dedup.metrics    MAX_SEQUENCES_FOR_DISK_READ_ENDS_MAP=50000 SORTING_COLLECTION_SIZE_RATIO=0.25 PROGRAM_RECORD_ID=MarkDuplicates PROGRAM_GROUP_NAME=MarkDuplicates REMOVE_DUPLICATES=false ASSUME_SORTED=false DUPLICATE_SCORING_STRATEGY=SUM_OF_BASE_QUALITIES READ_NAME_REGEX=[a-zA-Z0-9]+:[0-9]:([0-9]+):([0-9]+):([0-9]+).* OPTICAL_DUPLICATE_PIXEL_DISTANCE=100 VERBOSITY=INFO QUIET=false VALIDATION_STRINGENCY=STRICT COMPRESSION_LEVEL=5 MAX_RECORDS_IN_RAM=500000 CREATE_INDEX=false CREATE_MD5_FILE=false GA4GH_CLIENT_SECRETS=client_secrets.json
[Wed Jul 29 09:05:15 HKT 2015] Executing as huangdawei@cluster.genomics.net.cn on Linux 2.6.32-431.11.2.el6.x86_64 amd64; Java HotSpot(TM) 64-Bit Server VM 1.7.0_51-b13; Picard version: 1.137(c8c9f584d7042e98867ea3cfc355fb7b89acd2e6_1438018139) JdkDeflater
INFO	2015-07-29 09:05:16	MarkDuplicates	Start of doWork freeMemory: 754679352; totalMemory: 759693312; maxMemory: 11274289152
INFO	2015-07-29 09:05:16	MarkDuplicates	Reading input file and constructing read end information.
INFO	2015-07-29 09:05:16	MarkDuplicates	Will retain up to 43362650 data points before spilling to disk.
INFO	2015-07-29 09:05:16	MarkDuplicates	Read 0 records. 0 pairs never matched.
INFO	2015-07-29 09:05:18	MarkDuplicates	After buildSortedReadEndLists freeMemory: 409517832; totalMemory: 759693312; maxMemory: 11274289152
INFO	2015-07-29 09:05:18	MarkDuplicates	Will retain up to 352321536 duplicate indices before spilling to disk.
INFO	2015-07-29 09:05:22	MarkDuplicates	Traversing read pair information and detecting duplicates.
INFO	2015-07-29 09:05:22	MarkDuplicates	Traversing fragment information and detecting duplicates.
INFO	2015-07-29 09:05:22	MarkDuplicates	Sorting list of duplicate records.
INFO	2015-07-29 09:05:23	MarkDuplicates	After generateDuplicateIndexes freeMemory: 757079816; totalMemory: 3578789888; maxMemory: 11274289152
INFO	2015-07-29 09:05:23	MarkDuplicates	Marking 0 records as duplicates.
INFO	2015-07-29 09:05:23	MarkDuplicates	Found 0 optical duplicate clusters.
INFO	2015-07-29 09:05:23	MarkDuplicates	Before output close freeMemory: 3575245984; totalMemory: 3578789888; maxMemory: 11274289152
INFO	2015-07-29 09:05:23	MarkDuplicates	After output close freeMemory: 3575310936; totalMemory: 3578789888; maxMemory: 11274289152
[Wed Jul 29 09:05:23 HKT 2015] picard.sam.markduplicates.MarkDuplicates done. Elapsed time: 0.12 minutes.
Runtime.totalMemory()=3578789888
```


<br>
<div align=center>
<img src="http://daweih.github.io/images/wechat_small_black.jpg">
</div>