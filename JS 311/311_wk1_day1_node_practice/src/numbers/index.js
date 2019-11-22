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
  for(let i=0; i<arr.length; i++) {
    for(let j=1; j<arr.length; j++) {
      if(arr [i] + arr[j] === sum) {
        return true;
      } else {
        return false;
      }
    }
  }
  
};

module.exports = {
  isEven,
  sum,
  comboSum
};
