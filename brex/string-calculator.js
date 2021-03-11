/**
 * Given an string of english words representing a mathematical operation that allows
 * only multiplication and sum of integers, you have to read the string and return calculus.
 *
 * Integers can also be negative and they are represented by "negative", for example "negative five"
 *
 * Example input: one times two plus four
 * Expected output: 6
 *
 * Example input: one plus two times four
 * Expected output: 9
 */

const str = 'one times two plus four';

// SOLUTION DURING THE INTERVIEW / CHALLENGE
const stringCalculator = str => {
  let tokens = str.split(' ')
  let result
  const stack = []

  const numbers = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
  }

  for (token of tokens) {
    if (stack.length === 0) {
      stack.push(numbers[token])
      continue
    }

    if (token === 'times' || token === 'plus') {
      stack.push(token)
      continue
    }

    operator = stack.pop()

    if (operator === 'times') result = stack.pop() * numbers[token]
    if (operator === 'plus') result = stack.pop() + numbers[token]

    stack.push(result)
  }

  return result
}

console.log(stringCalculator(str))
