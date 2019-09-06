const verifyInputLength = len => {
  if (len < 1 || len > Math.pow(10, 5))
    throw new Error(`The input length of '${len}' is invalid`);
};

const verifyHeightValue = item => {
  if (item < 1 || item > Math.pow(10, 7))
    throw new Error(`Item out of range`);
};

const birthdayCakeCandles = ar => {

  verifyInputLength(ar.length);

  const greatestHeight = ar.reduce((acc, curr) => {
    verifyHeightValue(curr);
    if (curr > acc) acc = curr;
    return acc;
  }, 0);

  return ar.reduce((acc, curr) => {
    if (curr === greatestHeight) acc++;
    return acc;
  }, 0);
};

const input = [4, 4, 4, 3];
console.log(birthdayCakeCandles(input));
