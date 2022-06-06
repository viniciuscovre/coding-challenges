/*
  Write a function 'solution' that, given a string S of N lowercase English letters, returns a string with
  no instances of three identical consecutive letters, obtained from S by deleting the minimum possible
  number of letters.

  Examples:

    1. Given S = "eedaaad", the function should return "eedaad". One occurrence of letter is deleted.

    2. Given S = "xxxtxxx", the function should return "xxtxx". Note that letter x can occur more than
    three times in the returned string, if the occurrences are not consecutive.

    3 Given S = "uuuuxaaaaxuuu", the function should return "uuxaaxuu".

  Write an efficient algorithm for the following assumptions:

  N is an integer within the range [1..200,000];
  string S consists only of lowercase letters (a-z).

  Copyright 2009-2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
*/

function solution(input, maxAllowed = 3) {
  const inputArray = Array.from(input)
  const shouldBeRemoved = true

  let flag = inputArray[0]
  let count = 1

  for (i = 0; i < inputArray.length; i++) {
    nextElement = inputArray[i + 1]

    if (nextElement === flag) count++
    else {
      flag = nextElement
      count = 1
    }

    if (count >= maxAllowed) inputArray[i] = shouldBeRemoved
  }

  return inputArray.filter(el => el !== shouldBeRemoved).join('')
}
