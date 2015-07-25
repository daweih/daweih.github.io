title: aspera use note
date: 2015-07-24 16:02:33
updated: 2015-07-24 16:02:33
tags:
categories:
---
tags: [bioinformatics, life, reading, visualization, writting, perl, javascript, NGS]
categories: profession

```
ascp  -i asperaweb_id_dsa.openssh --mode recv --host ftp-private.ncbi.nlm.nih.gov --user anonftp   --file-list  sra_list.txt  -k 1 -QT -l 200m  /path_to_save_download/
ascp  -i /home/huangdw/.aspera/connect/etc/asperaweb_id_dsa.openssh --mode recv --host ftp-private.ncbi.nlm.nih.gov --user anonftp   --file-list  /share_bio/nas2/zhangz_group/huangdw/sra/o_sativa/sra_list.txt  -k 1 -QT -l 200m  /share_bio/nas2/zhangz_group/huangdw/sra/o_sativa/
```

sra_list.txt: 
```
/sra/sra-instant/reads/ByRun/sra/ERR/ERR009/ERR009428/ERR009428.sra
```
<br>
<br>
<div align=center>
<img src="http://daweih.github.io/images/wechat_small_black.jpg">
</div>