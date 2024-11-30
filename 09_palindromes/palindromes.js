const palindromes = function (string) {
    const arrayForward = string.toLowerCase().split('')
                                        .filter(item => item != ' ' 
                                            && item != '!' 
                                            & item != ',' && item != '.')
    const arrayBackward = arrayForward.slice().reverse()

        for (let i = 0; i < arrayForward.length; i++) {
            if (arrayForward[i] == arrayBackward[i]) {
                continue
            } else {
                return false
            }
        } return true
};

// Do not edit below this line
module.exports = palindromes;
