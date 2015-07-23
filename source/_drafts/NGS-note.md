title: FASTAQ format
date: 2015-07-21 17:02:19
updated: 
tags: [bioinformatics, NGS] 
categories: profession
---

```
@HWI-ST1255:87:C39P7ACXX:6:2310:11567:93400 1:N:0:ACAGTG
GCTACGACGCTCTTCCGATCTTGACCAAATCGGGCGGTAGACTCCGTCCAAGGCTAAATACAGGCGAGAGACCGATAGCGAACAAGTACCGCGAGGGAAAG
+
;?@FFFFFGGFHFGIIHGGEHJJJJJEHIIIGF@FHFDDDECEDC@ABDDAA?BDDDDDEDDAA?BD;BB???BBB<5@BDDDDDDCCCC<B3<>>B&8?8
@SEQ_ID
GATTTGGGGTTCAAAGCAGTATCGATCAAATAGTAAATCCATTTGTTCAACTCACAGTTT
+
!''*((((***+))%%%++)(%%%%).1***-+*''))**55CCF>>>>>>CCCCCCC65
```


一个 FASTQ 文件中，一条序列有四行。

* 第一行以@开始，后面是序列 identifier 和 可选的描述，类似 FASTA 格式的标题。

* 第二行是原始序列

* 第三行以+开始，后面是序列 identifier 和 可选的描述

* 第四行是第二行是原始序列对应的质量值，字符的长度一致


#### Illumina sequence identifiers

Illumina 软件输出的 identifier 格式比较特殊：

```
@HWUSI-EAS100R:6:73:941:1973#0/1
1              2  3   4    5 6 7
```
1. HWUSI-EAS100R: 设备名称
2. 6: flowcell lane
3. 73: tile number within the flowcell lane（坐标）
4. 941: 'x'-coordinate of the cluster within the tile（x坐标）
5. 1973: 'y'-coordinate of the cluster within the tile（y坐标）
6. \#0: index number for a multiplexed sample (0 for no indexing)（多样本的index编号）
7. /1: the member of a pair, /1 or /2 (paired-end or mate-pair reads only)（成对reads的标记）



```
@EAS139:136:FC706VJ:2:2104:15343:197393 1:Y:18:ATCACG
1         2       3 4    5     6      7 8 9 10     11
```
1. EAS139: 设备名称
2. 136: the run id
3. FC706VJ: the flowcell id
4. 2: flowcell lane
5. 2104: tile number within the flowcell lane
6. 15343: 'x'-coordinate of the cluster within the tile
7. 197393: 'y'-coordinate of the cluster within the tile
8. 1: the member of a pair, 1 or 2 (paired-end or mate-pair reads only)
9. Y: Y if the read is filtered, N otherwise
10. 18: 0 when none of the control bits are on, otherwise it is an even number
11. ATCACG: index sequence

![wechat](http://daweih.github.io/images/wechat_small_black.jpg)
