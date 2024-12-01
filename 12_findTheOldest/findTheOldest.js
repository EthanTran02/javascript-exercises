



const findTheOldest = function(array) {
    const age = array.map((item)=> {
        if (item.yearOfDeath === undefined) {
            return 2024 - item.yearOfBirth
        } else {
            return item.yearOfDeath - item.yearOfBirth
        }
    })
    
    const oldest = age.slice().sort((a, b) => b - a)[0]
    
    const oldestPerson = array.reduce((object, item) => {
    let itemAge = 0

        if (item.yearOfDeath === undefined) {
            itemAge = 2024 - item.yearOfBirth
        } else {
            itemAge = item.yearOfDeath - item.yearOfBirth
        }


        if (itemAge === oldest) {
            return item
        } else {
            return object   
        }
        
    }, {})
    
    return oldestPerson
};


// Do not edit below this line
module.exports = findTheOldest;
