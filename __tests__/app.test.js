import {
  // methods,
  // methods,
  originalArray,
  doubleArray, 
  evensOnlyArray,
  arraySum,
  allNumbersGreaterThanZero,
  someNumbersAreOdd,
  evensOnlyAndDoubleArray,
  findItem,

} from '../app'

// hint of look in before_each before_all
describe('originalArray Test', ()=> {
  test('originalArray should return it self', ()=>{
    expect(originalArray([1,2,3,4])).toEqual([1,2,3,4])
  });
});

// return array with double values in array
describe('doubleArray Test', ()=> {
  test('doubleArray should return values doubled', ()=>{
    expect(doubleArray([1,2,3,4])).toEqual([2,4,6,8]);
  });
});

// return array with all even numbers
describe('evensOnlyArray Test', ()=> {
  test('evensOnlyArray should return only even values', ()=>{
    expect(evensOnlyArray([1,2,3,4])).toEqual([2,4]);
  });
});

// return array with sum of numbers
describe('arraySum Test', ()=> {
  test('arraySum should return all values added together', () =>{
    expect(arraySum ([1,2,3,4])).toEqual(10);
  });
});

// return true if every item greater than 0
describe('allNumbersGreaterThanZero Test', ()=> {
  test('allNumbersGreaterThanZero should return true : false if all elements are greater than zero', ()=>{
    expect(allNumbersGreaterThanZero([1,2,3,4])).toEqual(true);
  });
});
// return true if one or more items in array are odd
describe('someNumbersAreOdd Test', ()=> {
  test('someNumbersAreOdd should return true : false if there is 1 or more odds in array', ()=>{
    expect(someNumbersAreOdd([1,2,3,4])).toEqual(true);
  });
});
// return array double and even
describe('evensOnlyAndDoubleArray Test', ()=> {
  test('evensOnlyAndDoubleArray should return an array of the evens doubled', ()=>{
    expect(evensOnlyAndDoubleArray([1,2,3,4])).toEqual([4,8]);
  });
});

// find an item method return 'not found' if not found
describe('findItem Test', () => {
  test('findItem should return true : false if an item is found in an array', ()=> {
    expect(findItem([1,2,3,4], 3)).toEqual(true);
  });
});

