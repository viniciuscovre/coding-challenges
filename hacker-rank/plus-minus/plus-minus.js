/*
output:
  positive percentage
  negative percentage
  zero percentage
*/

const arr = [ 1, 5, 0, 0, -7, 0, 3, -5, -1, 0, 0, 0]

const plusMinus = arr => {
  let countPositive = 0;
  let countNegative = 0;
  let countZero = 0;
  const len = arr.length;

  arr.forEach(el => {
    if (el > 0) {
      countPositive++;
    } else if (el < 0) {
      countNegative++;
    } else {
      countZero++;
    }
  });

  console.log(countPositive / len);
  console.log(countNegative / len);
  console.log(countZero / len);
}

plusMinus(arr);