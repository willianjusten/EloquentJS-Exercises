/**
* Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######


*
*
*
*/

var symbol = "#";

while(symbol.length < 8){
	console.log(symbol);
	symbol = symbol + "#";
}