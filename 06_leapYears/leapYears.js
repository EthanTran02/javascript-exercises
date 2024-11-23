const leapYears = function(year) {
    if (year % 100 === 0) {
        if (year % 400 === 0) return true
        else return false
    } else if (year % 4 === 0 || year % 400 === 0) {
        return true
    } else return false
}


console.log(leapYears(400))

// Do not edit below this line
module.exports = leapYears;



/*
leapYears = year / 4 AND year / 400 BUT NOT year / 100


IF year / 4 OR year / 400 -> 
    IF year / 100 
        => return false
	ELSE 
        => return true
*/