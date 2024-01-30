const fibonacci = function (numberSequence) {
    let number = parseInt(numberSequence, 10);
    if (number === 0) {
        return 0;

    } else if (number < 0) {
        return 'OOPS';
    }
    let fibonacciResult = 1;
    let previousFibonnaci = 0;
    let temp;

    for (i = 1; i < number; i++) {
        temp = fibonacciResult;
        fibonacciResult += previousFibonnaci;
        previousFibonnaci = temp;
    }

    return fibonacciResult;

};

// Do not edit below this line
module.exports = fibonacci;
