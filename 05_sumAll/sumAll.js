const sumAll = function(num1, num2) {
    let sum = 0

    if (num1 < 0 || num2 < 0 
        || !(num1 % 1 === 0) || !(num2 % 1 === 0) 
        || typeof num1 === 'string' || typeof num2 === 'string') {
        return 'ERROR'
    }
    else if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            sum += i
        }
    } else {
        for (let i = num2; i <= num1; i++) {
            sum += i
        }
    }
    
    return sum
};


console.log(sumAll(-10, 4))

// Do not edit below this line
module.exports = sumAll;


/*
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10

num1 num2 as agument -> loop throught the range between 'num1' and 'num2'
as every iteration, add num the sum
return sum
*/