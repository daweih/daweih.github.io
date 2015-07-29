title: SNP calling note
date: 2015-07-27 22:56:35
updated: 2015-07-27 22:56:35
tags:
categories:
---
tags: [baby step, bioinformatics, biocuration, NGS, SRA, visualization, d3, database, evolution, gene annotation, module, parser, perl, uniprot, OS X, web, javascript, hexo, node.js, ruby, ruby on rails, life, blog, memory, Saudi Arabia, popular science, reading, swimming, writting]
categories: profession

``` bash
$ wget http://nchc.dl.sourceforge.net/project/bio-bwa/bwa-0.7.12.tar.bz2
$ tar xvfj bwa-0.6.2.tar.bz2
$ bunzip2 bwa-0.7.12.tar.bz2 
$ tar -xvf bwa-0.7.12.tar 
$ cd bwa-0.7.12
$ make
```

``` bash
$ bwa
Program: bwa (alignment via Burrows-Wheeler transformation)
Version: 0.7.12-r1039
Contact: Heng Li <lh3@sanger.ac.uk>

Usage:   bwa <command> [options]

Command: index         index sequences in the FASTA format
         mem           BWA-MEM algorithm
         fastmap       identify super-maximal exact matches
         pemerge       merge overlapping paired ends (EXPERIMENTAL)
         aln           gapped/ungapped alignment
         samse         generate alignment (single ended)
         sampe         generate alignment (paired ended)
         bwasw         BWA-SW for long queries

         shm           manage indices in shared memory
         fa2pac        convert FASTA to PAC format
         pac2bwt       generate BWT from PAC
         pac2bwtgen    alternative algorithm for generating BWT
         bwtupdate     update .bwt to the new format
         bwt2sa        generate SA from BWT and Occ

Note: To use BWA, you need to first index the genome with `bwa index'.
      There are three alignment algorithms in BWA: `mem', `bwasw', and
      `aln/samse/sampe'. If you are not sure which to use, try `bwa mem'
      first. Please `man ./bwa.1' for the manual.
```

``` bash
$ bwa index
Usage:   bwa index [options] <in.fasta>

Options:
*        -a STR    BWT construction algorithm: bwtsw or is [auto]
         -p STR    prefix of the index [same as fasta name]
         -b INT    block size for the bwtsw algorithm (effective with -a bwtsw) [10000000]
         -6        index files named as <in.fasta>.64.* instead of <in.fasta>.* 

Warning: `-a bwtsw' does not work for short genomes, while `-a is' and
         `-a div' do not work not for long genomes.


$ bwa index ref.fasta –a bwtsw
[bwa_index] Pack FASTA... 3.40 sec
[bwa_index] Construct BWT for the packed sequence...
[BWTIncCreate] textLength=676081428, availableWord=59571300
[BWTIncConstructFromPacked] 10 iterations done. 94272692 characters processed.
...
[bwt_gen] Finished constructing BWT in 136 iterations.
[bwa_index] 276.77 seconds elapse.
[bwa_index] Update BWT... 3.25 sec
[bwa_index] Pack forward-only FASTA... 2.47 sec
[bwa_index] Construct SA from BWT and Occ... 100.00 sec
[main] Version: 0.7.12-r1039
[main] CMD: bwa index -a bwtsw Oryza_rufipogon.PRJEB4137.27.dna.genome.fa
[main] Real time: 390.459 sec; CPU: 385.898 sec
```


``` bash
$ bwa mem
Usage: bwa mem [options] <idxbase> <in1.fq> [in2.fq]

Algorithm options:

       -t INT        number of threads [1]
       -k INT        minimum seed length [19]
       -w INT        band width for banded alignment [100]
       -d INT        off-diagonal X-dropoff [100]
       -r FLOAT      look for internal seeds inside a seed longer than {-k} * FLOAT [1.5]
       -y INT        seed occurrence for the 3rd round seeding [20]
       -c INT        skip seeds with more than INT occurrences [500]
       -D FLOAT      drop chains shorter than FLOAT fraction of the longest overlapping chain [0.50]
       -W INT        discard a chain if seeded bases shorter than INT [0]
       -m INT        perform at most INT rounds of mate rescues for each read [50]
       -S            skip mate rescue
       -P            skip pairing; mate rescue performed unless -S also in use
       -e            discard full-length exact matches

Scoring options:

       -A INT        score for a sequence match, which scales options -TdBOELU unless overridden [1]
       -B INT        penalty for a mismatch [4]
       -O INT[,INT]  gap open penalties for deletions and insertions [6,6]
       -E INT[,INT]  gap extension penalty; a gap of size k cost '{-O} + {-E}*k' [1,1]
       -L INT[,INT]  penalty for 5'- and 3'-end clipping [5,5]
       -U INT        penalty for an unpaired read pair [17]

       -x STR        read type. Setting -x changes multiple parameters unless overriden [null]
                     pacbio: -k17 -W40 -r10 -A1 -B1 -O1 -E1 -L0  (PacBio reads to ref)
                     ont2d: -k14 -W20 -r10 -A1 -B1 -O1 -E1 -L0  (Oxford Nanopore 2D-reads to ref)
                     intractg: -B9 -O16 -L5  (intra-species contigs to ref)

Input/output options:

       -p            smart pairing (ignoring in2.fq)
       -R STR        read group header line such as '@RG\tID:foo\tSM:bar' [null]
       -H STR/FILE   insert STR to header if it starts with @; or insert lines in FILE [null]
       -j            treat ALT contigs as part of the primary assembly (i.e. ignore <idxbase>.alt file)

       -v INT        verbose level: 1=error, 2=warning, 3=message, 4+=debugging [3]
       -T INT        minimum score to output [30]
       -h INT[,INT]  if there are <INT hits with score >80% of the max score, output all in XA [5,200]
       -a            output all alignments for SE or unpaired PE
       -C            append FASTA/FASTQ comment to SAM output
       -V            output the reference FASTA header in the XR tag
       -Y            use soft clipping for supplementary alignments
       -M            mark shorter split hits as secondary

       -I FLOAT[,FLOAT[,INT[,INT]]]
                     specify the mean, standard deviation (10% of the mean if absent), max
                     (4 sigma from the mean if absent) and min of the insert size distribution.
                     FR orientation only. [inferred]

Note: Please read the man page for detailed description of the command line and options.
```

#### aln (paired-end reads)


``` bash

```

#### Reference
- 实例 [SNP calling 流程](http://sz.ctfs.ftn.qq.com/ftn_handler/3ef34cec7f4edc05a63d67886080331fcdebd7642054d1bbc1dc6b092209e9005fbf8d577e460c008a04633bdf9bb7ccdbb6bb5dab58571a835c7b60eb118d7d/snp-calling数据及流程实例.zip)  from 生物信息菜鸟群
<br>
<div align=center>
<img src="http://daweih.github.io/images/wechat_small_black.jpg">
</div>