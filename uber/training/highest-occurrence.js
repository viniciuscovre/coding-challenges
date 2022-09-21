/*
  Given an array of integers, find the most repeated number. In other words, find the number with the highest frequency inside the given list.
    • Return -1 if the list is empty
    • Return whichever number in case of 2 or more numbers with the same frequency.

  Examples:
    • input: [1,2,3,3,3,2,2,5,3]
      output: 3

    • input: [1,1,3,3]
      output: 1 or 3

    • input: [1,2,3]
      output: -1
*/

/*
  Time complexity:  O(2n) = O(n)
  Space complexity: O(n + 2)
*/
const solution = arr => {
  const occurrences = {}

  for (el of arr) {
    if (!occurrences[el]) occurrences[el] = 1
    else occurrences[el]++
  }

  let highestFrequencyElement = -1
  let highestFrequency = 0

  for (const [el, frequency] of Object.entries(occurrences)) {
    if (frequency > highestFrequency) {
      highestFrequency = frequency
      highestFrequencyElement = el
    }
  }

  return highestFrequencyElement
}

console.log(solution([1,2,3,3,3,2,2,5,3]))
console.log(solution([1,1,3,3]))
console.log(solution([2,2,2,2]))
console.log(solution([1,2,3]))
console.log(solution([]))
