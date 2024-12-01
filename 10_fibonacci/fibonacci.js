let fibonacciNum = [0, 1]
let preNum1 = 0
let preNum2 = 0

for (let i = 0; i < 30; i++) {
    preNum1 = fibonacciNum[fibonacciNum.length - 2]
    preNum2 = fibonacciNum[fibonacciNum.length - 1]
    let currentNum = preNum1 + preNum2
    fibonacciNum.push(currentNum) 
}
console.table(fibonacciNum)
const fibonacci = function(index) {
    let position = index
    if (index < 0) {
        return 'OOPS'
    }  else if (typeof index === 'string') {
        position = parseInt(index)
        return fibonacciNum[position]
    } else {
        return fibonacciNum[position]
    }
};





// Do not edit below this line
module.exports = fibonacci;
