
const removeFromArray = function (array, ...args) {
  let newArray = []
  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item)
    }

  });
  return newArray
}



console.log(removeFromArray([1, 2, 3, 4], 2, 3))
  
  
module.exports = removeFromArray;
  