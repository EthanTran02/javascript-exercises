const getTheTitles = function(array) {
    const getTitle = array.reduce((result, item) => {
        result.push(item.title) 
        return result
    }, [])
    return getTitle
};


console.log(getTheTitles(books))

// Do not edit below this line
module.exports = getTheTitles;
