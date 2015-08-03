title: Looing for data at SRA
date: 2015-08-01 04:24:05
updated: 2015-08-01 04:24:05
tags: [baby step, bioinformatics, NGS, SRA]
categories: profession
---

#### 主要数据存储的位置

第二代测序的原始数据，一般会按照学术期刊的要求，在发表前，上到几个主要的数据库，包括：

- [NCBI European Nucleotide Archive (SRA)](http://www.ncbi.nlm.nih.gov/sra)
- [EBI European Nucleotide Archive (ENA)](http://www.ebi.ac.uk/ena)

通常，我们需要下载某些数据，无非是基于以下一些原因：

- 数据的物种 / 组织是研究对象，通过下载公共数据，来节约研究的开支
- 对研究者发表的结果感兴趣，想进行重复或深入的研究；认为发表数据的研究者有遗漏或没有关注的研究方向，对其数据进入深入的挖掘
- 想用数据来练手（这个动机在学生中很普遍）

#### 通过文章正文内的线索来寻找

> Author Information DNA sequencing data are deposited in the `European Nucleotide Archive` (http://www.ebi.ac.uk/ena/) under `accession numbers` ERP001143, ERP000729 and ERP000106. De novo assembly and genome annotation of wild rice W1943, the genotype dataset of 1,529 rice accessions and the imputed dataset of 446 O. rufipogon accessions for GWAS are available at the Rice Haplotype Map Project database (http://www.ncgr.ac.cn/RiceHap3). [1]

> Accession codes. Raw sequences have been deposited in the EBI European Nucleotide Archive with accession number ERP000729 for worldwide rice germplasm (330 worldwide rice accessions: ERS037511–ERS037840) and with accession number ERP000106 for Chinese rice landraces (100 newly added Chinese rice landraces: ERS039279–ERS039378). [2]

#### 通过数据库的分类系统来寻找，筛选

关键词系统、分类系统

#### 下载方法

SRA 数据的下载方法，推荐使用 Aspera。用法请参考[旧时博文](http://daweih.github.io/2015/07/24/aspera-download-data-from-sra/)。对于数据量较少的，也可以使用 wget 等命令下载，但耗时较长。


#### Reference
1. [Huang, X. et al. A map of rice genome variation reveals the origin of cultivated rice. Nature 490, 497–501 (2012).](http://www.ncbi.nlm.nih.gov/pubmed/?term=23034647)
2. [1.	Huang, X. et al. Genome-wide association studies of 14 agronomic traits in rice landraces. Nat. Genet. 42, 961–967 (2010).](http://www.ncbi.nlm.nih.gov/pubmed/?term=20972439)
3. [](http://www.ncbi.nlm.nih.gov/pubmed/?term=)

<br>
<div align=center>
<img src="http://daweih.github.io/images/wechat_small_black.jpg">
</div>