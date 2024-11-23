const add = function(num1, num2) {
  return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array) {
  let sum = 0 
	array.forEach(function (num) {
    sum += num
  });
  return sum
};

const multiply = function(array) {
  let mul = 1

  array.forEach(function(num) {
    mul *= num
  })
  return mul
};

// num1 = 4, num2 = 3
const power = function(num1, num2) {
	let power = 1
  for (i = 0; i < num2; i++) {
    power *= num1
  }
  return power  
};

const factorial = function(num) {
	let factorial = 1

  for (i = num; i > 0; i--) {
    factorial *= i 
  }
  return factorial
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
