const MAX_ARR_SIZE = 10;
const MAX_ITEM_VAL = Math.pow(10, 10);

const exampleArr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

const aVeryBigSum = arr => {
  if (!hasValidLength(arr)) throw new Error('Invalid length');
  if (!numbersInRange(arr)) throw new Error('Number out of range');

  return arr.reduce((acc, curr) => acc + curr, 0);
}

const hasValidLength = arr => {
  const arrLen = arr.length;
  return arrLen > 0 && arrLen <= MAX_ARR_SIZE;
}

const numbersInRange = arr => {
  const foundOutOfRange = arr.find(el => el < 0 || el > MAX_ITEM_VAL);
  return foundOutOfRange ? false : true;
}

console.log(aVeryBigSum(exampleArr));