const solution = A => {
  if (!isArrayOfNumbers(A) || !isInTheRange(A))
    return 0;
  if (isArrayOfLenTwo(A))
    return A[0] === A[1] ? 1 : 2;
  if (isPlane(A))
    return 1;

  let isValley = 1;
  let isHill = 1;
  let numberOfCastles = 0;
  let idx = 1;
  let curr = A[0];

  while (idx < A.length) {
    let prox = A[idx];

    if (curr > prox) {
      isValley = 1;
      if (isHill) {
        numberOfCastles++;
        isHill = 0;
      }
    }

    if (prox > curr) {
      isHill = 1;
      if (isValley) {
        numberOfCastles++;
        isValley = 0;
      }
    }

    prox = A[++idx];
  }

  if (isValley !== isHill)
    numberOfCastles++;

  return numberOfCastles;
}

const isArrayOfNumbers = arr => {
  const foundNotNumber = arr.find(el => typeof el !== 'number');
  if (foundNotNumber)
    return false;
  return true;
}

const isInTheRange = arr => {
  const oneMillion = 1000000;
  const foundElementOutOfRange = arr.find(el => el < -oneMillion || el > oneMillion);
  if (foundElementOutOfRange)
    return false;
  return true;
}

const isArrayOfLenTwo = arr => {
  return arr.length === 2;
}

const isPlane = arr => {
  const initialValue = arr[0];
  const foundDifferentElement = arr.find(el => el !== initialValue);
  if (foundDifferentElement)
    return false;
  return true;
}
