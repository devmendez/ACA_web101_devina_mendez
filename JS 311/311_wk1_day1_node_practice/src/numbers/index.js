const isEven = num => {
  // write code for numbers.isEven
  return num % 2 === 0;
};

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const sum = arr => {
  // write code for numbers.sum
  return arr.reduce(reducer);
};

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  
};

module.exports = {
  isEven,
  sum,
  comboSum
};
