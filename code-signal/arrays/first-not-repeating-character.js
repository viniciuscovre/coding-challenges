/*
Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

Example

--> For s = "abacabad", the output should be solution(s) = 'c'.

  There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

--> For s = "abacabaabacaba", the output should be solution(s) = '_'.

  There are no characters in this string that do not repeat.

Input/Output

--> [execution time limit] 4 seconds (js)

--> [input] string s

  A string that contains only lowercase English letters.

  Guaranteed constraints:
  1 ≤ s.length ≤ 105.

--> [output] char

The first non-repeating character in s, or '_' if there are no characters that do not repeat.
*/


/**
 * time complexity:  O(n^2)
 * space complexity: O(n)
 */
const firstSolution = a => {
  for (let i = 0; i < a.length; i++) {
    let substring = a.slice(0,i) + a.slice(i+1)
    if (!substring.includes(a[i])) return a[i]
  }

  return '_'
}

/**
 * time complexity:  O(2*n) = O(n)
 * space complexity: O(n)
 */
const solution = a => {
  const repeated = {}

  for (el of a) {
    if (!repeated[el]) repeated[el] = 1
    else repeated[el]++
  }

  // repeated === 1 means it appears only once
  return Object.keys(repeated).filter(key => repeated[key] === 1)[0] || '_'
}
