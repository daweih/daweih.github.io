title: How to use BLAT to annotate a new sequenced genome
date: 2011-09-09 21:37:05
tags: [bioinformatics, gene annotation] 
categories: profession
---
> 原载于我的 [wordpress 博客](https://daweimhuang.wordpress.com/)

[原文](https://daweimhuang.wordpress.com/2011/09/09/how-to-use-blat-to-annotate-a-new-sequenced-genome/)

I am in charge of Date Palm genome annotation recently. In fact, there is only one person doing this, me.
UCSC and Ensembl are the most famous genome sequence databases and both developed effective tool, BLAT from UCSC and pMatch from Ensembl, to do this.
pMatch need input of protein sequence. So it is suitable for use rich datasets to annotate a similar species’ genome without lots of sequence proteins.
BLAT is good at cDNA to genome alignment. So we choose BLAT because we got Newbler assembled cDNA sequence from 454.

The Data Palm Genome sequence assembly based on two data source, the 454 newbler assembled contig and solid mate pair reads.
Newbler assemble the 454 data of genome to contigs which provide the main structure of genome assembly.
Solid mate pair data provide the information of relationship between contigs, including order, gap length, etc.

454 can not provide sequence strand information. After assembly, the cDNA can be sense strand or anti-sense strand. Since both of the genome strand have the ability to encode genes as we defined as positive strand gene and negative strand gene, the BLAT mapping data can provide 4 kinds of mapping results due to the complexity discussed before.

So the first step of annotation is to convert the anti-sense cDNA to sense strand sequence, the the mapping results will remain only two types, the positive strand gene and negative strand gene.

There are several source of the strand information, splice signal, transcriptome data form solid strand specific experiment, CDS prediction data and alignment-based annotation of cDNA.

Splice signal is the first 2 and last two base of intron sequence. cDNA is sequenced from mRNA which only consist exons of gene. When mapped back to genome, the alignment region of cDNA will consist multiple alignment blocks. Blocks of cDNA sequence are usually continuous whereas blocks of genome is separated by unaligned sequence blocks, usually introns.

