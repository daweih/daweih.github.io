title: OrthoMCL 使用笔记
date: 2015-07-20 13:30:30
tags: [bioinformatics, evolution] 
categories: profession
---


#### BLAST

#### 配置 MCL 的 MySQL 数据库


``` bash
$ create database orthomcl;
$ DROP TABLE BestHit, BestInterTaxonScore, BestQueryTaxonScore, BetterHit, CoOrthNotOrtholog, CoOrtholog, CoOrthologAvgScore, CoOrthologCandidate, CoOrthologTaxon, CoOrthologTemp, InParalog, InParalog2Way, InParalogAvgScore, InParalogOrtholog, InParalogTaxonAvg, InParalogTemp, InplgOrthTaxonAvg, InplgOrthoInplg, InterTaxonMatch, Ortholog, Ortholog2Way, OrthologAvgScore, OrthologTaxon, OrthologTemp, OrthologUniqueId, SimilarSequences, UniqSimSeqsQueryId;
$ DROP TABLE BestQueryTaxonScore;
$ orthomclInstallSchema orthomcl.config.template
```
#### 载入数据到 MySQL

``` bash
$ orthomclLoadBlast orthomcl.config.template similarSequences.txt
$ orthomclLoadBlast orthomcl.config.template similarSequences.txt.rmisoform
$ orthomclPairs orthomcl.config.template orthomcl_pairs.log cleanup=no
$ orthomclDumpPairsFiles orthomcl.config.template
```

#### 运行 OrthoMCL

``` bash
$ mcl mclInput --abc -I 1.1 -o mclOutput11
$ orthomclMclToGroups ORYSA 1 < mclOutput11 > groups11x.txt
```

#### 结果文件的使用



#### Reference
- [Li,L. et al. (2003) OrthoMCL: identification of ortholog groups for eukaryotic genomes. Genome Res., 13, 2178–2189.](http://www.ncbi.nlm.nih.gov/pubmed/?term=12952885)






<br>
<div align=center>
<img src="http://daweih.github.io/images/wechat_small_black.jpg">
</div>