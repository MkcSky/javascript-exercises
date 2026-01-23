const repeatString = function(str, num) {
    // return  str.repeat(num)
    repeat = ""
    if (num < 0 ) {
        return repeat = "ERROR"
    }
    for (let i = 0; i < num; i++ )
        repeat += str

    return repeat
};

// Do not edit below this line
module.exports = repeatString;
