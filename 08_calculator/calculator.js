const add = function(num1, num2) {
  return num1 + num2
};

const subtract = function(num1, num2) {
  return num1 - num2
};

const sum = function(array) {
  return array.reduce((total, item) => {
      return total + item
  }, 0)
};

const multiply = function(array) {
  return array.reduce((mul, item) => {
    return mul * item
  })
};

const power = function(num1, num2) {
  let result = 1
  for (let i = 0; i < num2; i++) {
    result *= num1
  }
  return result
};

const factorial = function(num) { 
  let result = 1  
  for (let i = num; i > 0; i--) {
    result *= i 
  }
  return result
};
console.log(factorial(5))
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
