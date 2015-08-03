title: Looing for data at SRA
date: 2015-08-01 04:24:05
updated: 2015-08-03 03:24:05
tags: [baby step, bioinformatics, NGS, SRA]
categories: profession
---
<div align=center>
<img src="http://daweih.github.io/images/sra.jpg">
</div>

最近 2 年，NGS 的成本越来越低，让研究者可以产生大量的数据，其中有很多优秀的工作，发表了高水平文章。

### 主要的 NGS 原始数据库

按照学术期刊的要求（比如CNS），NGS 的原始数据，在发表前一般会被上传到几个主要的数据库，包括：

- [NCBI European Nucleotide Archive (SRA)](http://www.ncbi.nlm.nih.gov/sra)
- [EBI European Nucleotide Archive (ENA)](http://www.ebi.ac.uk/ena)

作为期刊的读者，我们需要下载某些数据，无非是基于以下一些原因：

- 数据基于的物种 / 组织是研究对象。通过下载公共数据而非自产，来节约研究的开支
- 对研究者发表的结果感兴趣，想进行重复或深入研究；认为发表数据的研究者有遗漏或忽略了重要的研究方向，想对其数据进入深入挖掘
- 想用数据来练手（这个动机在学生中很普遍）

当然，还会有其它原因，欢迎补充。于是，如何下载呢？

### 通过文章正文内的线索来寻找

这种情况下，发表的文章会直接给出数据提交到的数据库，数据的 accession。比如：

>DNA sequencing data are deposited in the `European Nucleotide Archive` (http://www.ebi.ac.uk/ena/) under <u style="color:darkred">`accession numbers` ERP001143, ERP000729 and ERP000106.</u> De novo assembly and genome annotation of wild rice W1943, the genotype dataset of 1,529 rice accessions and the imputed dataset of 446 O. rufipogon accessions for GWAS are available at the Rice Haplotype Map Project database (http://www.ncgr.ac.cn/RiceHap3). [1]

再比如：

>Accession codes. Raw sequences have been deposited in the EBI European Nucleotide Archive with <u style="color:darkred">accession number ERP000729 for worldwide rice germplasm (330 worldwide rice accessions: ERS037511–ERS037840)</u> and with accession number ERP000106 for Chinese rice landraces (100 newly added Chinese rice landraces: ERS039279–ERS039378). [2]

### 通过数据库的分类系统来寻找，筛选

通过关键词系统、分类系统，你可以在一个数据库，整合所有符合你研究兴趣的数据。

### 通过其他信息定位

但很多时候，文章的作者并没有给出数据具体的存放位置，或者没有给出数据的ID。我们无法很简单地确定数据的位置，这样就要通过多方面的信息来判断。比如参考文献 [3] 就是如此。在这篇文献里，虽然没有给出具体的位置和数据的 accession，但可以参考的信息还有很多，比如：

 1. 物种是 _Triticum aestivum_ L. cv Chinese Spring
 2. 发表日期：Published 18 July 2014
 3. 作者单位：Department of Plant Sciences/Centre for Integrative Genetics,The Norwegian University of Life Sciences (NMBU)
 4. Paired end (PE) sequencing libraries
 5. HiSeq2000 (Illumina, San Diego, USA)
 6. RNA was isolated and prepared for RNA-seq by using paired-end libraries with <u style="color:darkred">200–base pair inserts for 30 samples</u> with four biological replicates per cell type and time point (two replicates per room) and two additional technical replicates. Total RNA was extracted from frozen plant material using the RNeasy Lipid Tissue Mini kit (QIAGEN, Hilden, Germany; http://www.qiagen.com/applications/plant). 

用文章的标题、物种名、技术和研究的关键词作为搜索条件，利用 google 的搜索和在数据库内的检索，定位到候选纪录。

通过和潜在的数据的[基本信息](http://www.ncbi.nlm.nih.gov/bioproject/?term=%22Genome+interplay+in+the+grain+transcriptome+of+hexaploid+bread+wheat%22)的比较，发现支持此数据为文章的数据：
 1. Organism:	_Triticum aestivum_, cultivar: Chinese Spring
 2. Registration date: 19-Jul-2014
 3. Submitted by: Department of Plant and Environmental Sciences/CIGENE, Norwegian University of Life Sciences
 4. Paired end (PE) sequencing libraries
 5. Illumina HiSeq 2000
 6. 30 samples. Total RNA was extracted from frozen plant material using the RNeasy Lipid Tissue Mini kit (QIAGEN, Hilden, Germany; http://www.qiagen.com/applications/plant). Illumina TruSeq RNA Sample Preparation Kits v2

上面的信息的排列，我按照一一对应做了总结。比对之后，确信这个数据和文章的对应关系。

之后就可以把每个 SRA 文件的取样和实验信息整理成表，和发表的文章的信息做对照（这里就开始细活了）。

### 下载方法

SRA 数据的下载方法，推荐使用 Aspera。用法请参考[旧时博文](http://daweih.github.io/2015/07/24/aspera-download-data-from-sra/)。对于数据量较少的，也可以使用 wget 等命令下载，但耗时较长。


### Reference
1. [Huang, X. et al. A map of rice genome variation reveals the origin of cultivated rice. Nature 490, 497–501 (2012).](http://www.ncbi.nlm.nih.gov/pubmed/?term=23034647)
2. [Huang, X. et al. Genome-wide association studies of 14 agronomic traits in rice landraces. Nat. Genet. 42, 961–967 (2010).](http://www.ncbi.nlm.nih.gov/pubmed/?term=20972439)
3. [Pfeifer, M. et al. Genome interplay in the grain transcriptome of hexaploid bread wheat. Science 345, 1250091–1250091 (2014).](http://www.ncbi.nlm.nih.gov/pubmed/?term=25035498)

<br>
<div align=center>
<img src="http://daweih.github.io/images/wechat_small_black.jpg">
</div>