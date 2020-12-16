// ARRAY ITERATOR METHODS
// numberArray = [1,2,3,4]


//return array with doulbe values in array
//numberArray = [1,2,3,4] => [2,4,6,8]




export const originalArray = (arr) =>{
  return arr
}

export const doubleArray = (numberArray) => {
  return numberArray.map(num =>{
    return num * 2;
  })
};

export const evensOnlyArray = (numberArray) => {
  return numberArray.filter((number)=> number%2 ===0);
};

export const arraySum = (numberArray) => {
  return numberArray.reduce((sum, number)=> sum + number);
};

export const someNumbersAreOdd = (numberArray) => {
  return numberArray.some((num) => {
    return num % 2 ===1;
  });
};

// => true; use every
export const allNumbersGreaterThanZero = (numberArray) => { 
  return numberArray.every(number =>  number > 0);
};

export const evensOnlyAndDoubleArray = (numberArray) => {
  let evens = numberArray.filter(number => number%2 ===0);
  return evens.map(number => number * 2);
};

export const findItem = (numberArray, number) => {
  return numberArray.includes(number);
};