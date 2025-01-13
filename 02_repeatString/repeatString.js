const repeatString = function(string, times) {
    if (times < 0) {
        return "ERROR";
    }
    let newString = "";
    for (i = 0; i < times; i++) {
        newString += string;
    }
    return newString;
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
