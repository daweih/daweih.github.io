use strict;
use warnings;


open I, "< index.html";
while(<I>){
	my $pic_name;
	if($_ =~ /.*src="(\S+).png".*/){
		$pic_name = $1;
		$_ =~ s/$pic_name/http:\/\/daweih.github.io\/images\/$pic_name/;
	}
	print $_;
}