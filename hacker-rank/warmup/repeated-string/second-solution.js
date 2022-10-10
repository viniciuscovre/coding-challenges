const countOccurrences = (text, letter = 'a') => {
  let occurrences = 0
  for (const char of text) if (char === letter) occurrences++
  return occurrences
}

/**
 * Example:
 *  • s = "aba"
 *  • n = 10
 * 
 * I need to multiply "aba" x times to get n characters
 * where: 
 * 
 *      stringLength * x = n
 *      x = truncate(n / stringLength)
 *      x = truncate(10 / 3) = truncate (3.33) = 3
 * 
 * We now have:
 * 
 *      s * x = s * 3 = "aba" * 3 = "abaabaaba" (length 9)
 * 
 * With x I have the integer part in which s needs to be multiplied
 * I still need the remainder to concat the substring with s:
 * 
 *      remainder = n % stringLength
 *      remainder = 1
 * 
 *      remainderSubstring = "a"
 * 
 * I concat the remainderSubstring to s and get
 * 
 *      s = s + remainderSubstring
 *      s = "abaabaabaa"
 * 
 * finally,
 * 
 *      frequency = 7
 * 
 * @param {string} s string to repeat
 * @param {number} n number of characters to consider
 * @returns frequency of a in the substring
 */
function repeatedString(s, n) {
  const repeatTimes = Math.trunc(n / s.length)

  let occurrences = countOccurrences(s) * repeatTimes

  // remainder
  occurrences += countOccurrences(s.slice(0, n % s.length))

  return occurrences
}
