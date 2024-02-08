const add = function (numberOne, numberTwo) {
  return numberOne + numberTwo;
};

const subtract = function (numberOne, numberTwo) {
  return numberOne - numberTwo;
};

const sum = function (numberArray) {
  //return numberArray.reduce((sum, number)=> sum+number,0);
  let sum = 0;
  numberArray.forEach((number) => {
    sum += number;
  });
  return sum;
};

const multiply = function (numberArray) {
  return numberArray.reduce((sum, number)=> sum*number);
};

const power = function (number, power) {
  if(power === 0){
    return 1;
  }

let total = number;
 for(let i = 1; i<power;i++){
  total *= number;
 }
 return total;
};

const factorial = function (factorial) {
  if(factorial === 0){
    return 1;
  }
  let total = 1;
  for (let i = factorial; i > 0; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
