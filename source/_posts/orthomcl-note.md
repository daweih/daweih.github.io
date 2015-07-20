title: OrthoMCL 使用笔记
date: 2015-07-20 13:30:30
tags: [bioinformatics, evolution] 
---


#### BLAST

#### 配置 MCL 的 MySQL 数据库


``` bash
create database orthomcl;
```

``` bash
DROP TABLE BestHit, BestInterTaxonScore, BestQueryTaxonScore, BetterHit, CoOrthNotOrtholog, CoOrtholog, CoOrthologAvgScore, CoOrthologCandidate, CoOrthologTaxon, CoOrthologTemp, InParalog, InParalog2Way, InParalogAvgScore, InParalogOrtholog, InParalogTaxonAvg, InParalogTemp, InplgOrthTaxonAvg, InplgOrthoInplg, InterTaxonMatch, Ortholog, Ortholog2Way, OrthologAvgScore, OrthologTaxon, OrthologTemp, OrthologUniqueId, SimilarSequences, UniqSimSeqsQueryId;
```

``` bash
DROP TABLE BestQueryTaxonScore;
```

``` bash
orthomclInstallSchema orthomcl.config.template
```

#### 载入数据到 MySQL

``` bash
orthomclLoadBlast orthomcl.config.template similarSequences.txt
```

``` bash
orthomclLoadBlast orthomcl.config.template similarSequences.txt.rmisoform
```

``` bash
orthomclPairs orthomcl.config.template orthomcl_pairs.log cleanup=no
```

``` bash
orthomclDumpPairsFiles orthomcl.config.template
```

#### 运行 OrthoMCL

``` bash
mcl mclInput --abc -I 1.1 -o mclOutput11
```

``` bash
orthomclMclToGroups ORYSA 1 < mclOutput11 > groups11x.txt
```

#### 结果文件的使用



