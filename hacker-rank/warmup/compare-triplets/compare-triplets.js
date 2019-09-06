const compareTriplets = (a, b) => {
  verifyInput(a);
  verifyInput(b);

  let counterA = 0;
  let counterB = 0;

  let itemB;

  a.forEach((itemA, idx) => {
    itemB = b[idx];
    if (itemA > itemB)
      counterA++;
    else if (itemA < itemB)
      counterB++;
  })

  return [counterA, counterB];
}

const verifyInput = arr => {
  if (!hasValidLength(arr) || !hasOnlyIntegers(arr) || !numbersInRange(arr))
    return [];
}

const hasValidLength = arr => {
  const size = 3;
  return arr.length === size;
}

const hasOnlyIntegers = arr => {
  const foundNotInteger = arr.some(el => !Number.isInteger(el));
  return foundNotInteger ? false : true;
}

const numbersInRange = arr => {
  const min = 1;
  const max = 1000;
  const foundOutOfRange = arr.find(el => el < min || el > max);
  return foundOutOfRange ? false : true;
}
