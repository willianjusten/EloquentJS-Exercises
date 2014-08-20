/**
Write a program that uses console.log to print all the numbers from 1 to 100, 
with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, 
and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" 
for numbers that are divisible by both 3 and 5.

*/


var i = 0;
while(i < 101){
	if (i % 3 === 0 && i % 5 === 0)
		console.log("FizzBuzz");
	else if (i % 3 === 0)
		console.log("Fizz");
	else if (i % 5 === 0)
		console.log("Buzz");
	else
		console.log(i);

	i++;
}