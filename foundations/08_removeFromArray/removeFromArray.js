const removeFromArray = function(arr, valueToRemove) {
    itemIdex = arr.indexOf(valueToRemove);
    arr.splice(itemIdex, 1)
    return arr;
};



// Do not edit below this line
module.exports = removeFromArray;
