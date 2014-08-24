/**
Write a program that uses console.log to print all the numbers from 1 to 100, 
with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, 
and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" 
for numbers that are divisible by both 3 and 5.

*/

for(var i = 0; i <= 100; i++){
	var output = "";
	if(i % 3 === 0)
		output += "Fizz";
	if(i % 5 === 0)
		output += "Buzz";
	console.log(output || i);
}