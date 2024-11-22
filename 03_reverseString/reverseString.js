const reverseString = function(testString) {
    let result = ''
    for (let i = testString.length; i >= 0; i--) {
        result += testString.charAt(i)
    }
    return result
};




reverseString('babyboo')

// Do not edit below this line
module.exports = reverseString;
