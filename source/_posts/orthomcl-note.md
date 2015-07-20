title: OrthoMCL 使用笔记
date: 2015-07-20 13:30:30
tags: [bioinformatics, evolution] 
---


#### BLAST

#### 配置 MCL 的 MySQL 数据库


`create database orthomcl;`

`DROP TABLE BestHit, BestInterTaxonScore, BestQueryTaxonScore, BetterHit, CoOrthNotOrtholog, CoOrtholog, CoOrthologAvgScore, CoOrthologCandidate, CoOrthologTaxon, CoOrthologTemp, InParalog, InParalog2Way, InParalogAvgScore, InParalogOrtholog, InParalogTaxonAvg, InParalogTemp, InplgOrthTaxonAvg, InplgOrthoInplg, InterTaxonMatch, Ortholog, Ortholog2Way, OrthologAvgScore, OrthologTaxon, OrthologTemp, OrthologUniqueId, SimilarSequences, UniqSimSeqsQueryId;`

`DROP TABLE BestQueryTaxonScore;`

`orthomclInstallSchema orthomcl.config.template`

#### 载入数据到 MySQL

`orthomclLoadBlast orthomcl.config.template similarSequences.txt`

`orthomclLoadBlast orthomcl.config.template similarSequences.txt.rmisoform`

`orthomclPairs orthomcl.config.template orthomcl_pairs.log cleanup=no`

`orthomclDumpPairsFiles orthomcl.config.template`

#### 运行 OrthoMCL

`mcl mclInput --abc -I 1.1 -o mclOutput11`

`orthomclMclToGroups ORYSA 1 < mclOutput11 > groups11x.txt`

#### 结果文件的使用



