const getTheTitles = function(array) {
    const getTitle = array.reduce((result, item) => {
        result.push(item.title) 
        return 'result'
    }, [])
    return getTitle
};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
console.log(getTheTitles(books))

// Do not edit below this line
module.exports = getTheTitles;
