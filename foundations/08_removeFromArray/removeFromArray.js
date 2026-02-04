const removeFromArray= function(arr, ...valueToRemove) {

    for (let i = 0; i < arr.length; i++){
        for (let val of valueToRemove){
            ind = arr.indexOf(val)

            if (ind !== -1){
                arr.splice(ind,1)
            }
        }
    }
    return arr
};




// Do not edit below this line
module.exports = removeFromArray;
