const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if (num1 < 0 || num2 < 0) return "ERROR";
    let sum = 0;
    if(num1 > num2){
        for(i = num2; i <= num1; i++) {
            sum += i;
        }
    } else {
        for(i = num1; i <= num2; i++) {
            sum +=i;
        }
    }
    return sum;
};

sumAll(2,5);

// Do not edit below this line
module.exports = sumAll;
