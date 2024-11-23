const convertToCelsius = function(F) { 
  let C = (F - 32) * 5/9
  C = parseFloat(C.toFixed(1))
  return C
};

console.log(convertToCelsius(-100))

const convertToFahrenheit = function(C) {
  F = (C * 9/5) + 32;
  F = parseFloat(F.toFixed(1))
  return F
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
