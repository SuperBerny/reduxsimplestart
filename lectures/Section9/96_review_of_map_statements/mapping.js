const numbers = [0,1,2,3,4];

//create new array and multiply each index by 10

let newNumbers = [];

for(let i = 0; i < numbers.length; i ++) {
	newNumbers.push(numbers[i] * 10);
}

//you can see that numbers has not been changed
numbers;

//new numbers is a new array
newNumbers;

//mapping an array does the same thing

const numbers1 = [2,4,6,8,10];

numbers1.map(function(num) {
	return num * 10;
});

//refactored 
numbers1.map(num => num * 10);