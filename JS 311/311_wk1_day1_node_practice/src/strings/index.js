const split = (str, delim) => {
  // write code for strings.split
return str.split(delim);
}

const testStr = 'abcdefgh'
console.log(testStr[0]);


const pairs = (str) => {
  // write code for strings.pairs
var newArr= []
  for(let i =0; i<str.length; i+=2) {
newArr.push(str[i]+ str[i+1]);
}
  return newArr
}


  // write code for strings.reverse
  const reverse = (str) => str.split('').reverse().join('')



module.exports = {
  split,
  pairs,
  reverse
}