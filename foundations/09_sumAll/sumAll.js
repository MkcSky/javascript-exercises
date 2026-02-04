const sumAll = function(num1, num2) {
    let arr = [];
    let min;
    let max;
    
    if (num1 < 0 || num2 < 0){
        return "ERROR"
    }
    else if (!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR"
    }
    else if (num1 < num2){
        min = num1
        max = num2
    }
    else if (num1 > num2) {
        min = num2
        max = num1
    }
    else {
        return "ERROR"
    }

    let count = min
    let addedNums = min

    while(count <= max){
        arr.push(addedNums)
        addedNums++;
        count++;
    }

    let sumArr = arr.reduce((acc, num) => {
        return acc + num;
    })

    return sumArr;
};

// Do not edit below this line
module.exports = sumAll;
