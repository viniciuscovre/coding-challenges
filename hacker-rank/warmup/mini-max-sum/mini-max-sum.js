const verifyInputLength = len => {
  if (len !== 5)
    throw new Error(`The input length of '${len}' is invalid`);
};

const verifyItemValue = item => {
  if (item < 1 || item > Math.pow(10, 9))
    throw new Error(`Item out of range`);
};

const miniMaxSum = arr => {
  verifyInputLength(arr.length);
  const sorted = arr.sort();
  sorted.forEach(verifyItemValue);

  const min = sorted.slice(0,4).reduce((acc, curr) => acc += curr, 0);
  const max = sorted.slice(1,5).reduce((acc, curr) => acc += curr, 0);
  console.log(min, max);
};

const input = [1, 3, 5, 7, 9];
miniMaxSum(input);