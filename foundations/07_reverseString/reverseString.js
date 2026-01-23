const reverseString = function(str) {
    let rev_str = ""
    let len = str.length

    for (let i = len - 1 ; i >= 0; i--) {
        let char = str[i]
        rev_str += char
    }   
    return  rev_str
};

// Do not edit below this line
module.exports = reverseString;
