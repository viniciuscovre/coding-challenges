const buildRepeatedString = (s, n) => {
  if (n <= s.length) return s.substr(0, n)
  const multiplier = Math.ceil((n - s.length) / s.length) + 1
  return s.repeat(multiplier)
}

function repeatedString(s, n) {
  const repeatedString = buildRepeatedString(s, n)
  console.log(repeatedString)

  let occurrences = 0
  for (let i = 0; i < n; i++) {
    if (repeatedString[i] === 'a') occurrences++
  }

  return occurrences
}

/*
  This solution builds a string by multiplying (repeating) the input string many times.

  However, the string becomes huge when the multiplier is big, breaking up Node.js memory boundaries:
    > RangeError: Invalid string length
*/
