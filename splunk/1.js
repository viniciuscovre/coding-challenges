/**
 * Given an array of integers, return an array that counts how many occurrences
 *  happens of each position of the array.
 *
 * The input array allows number from 0 to n-1, where n is the length of the array
 *
 * INPUT: [1, 2, 0, 4, 2, 1]
 * OUTPUT: [1, 2, 2, 0, 1, 0]
 *
 * Output explained:
 *  zero appears 1 time, one appears two times, and etc.
 */

let input = [1, 2, 0, 4, 2, 1]; // len -> 6
const n = input.length

const output = new Array(n).fill(0)

for (let i = 0; i < n; i++)
  output[input[i]]++

// time complexity: O(n)
// space complexity: O(n)
console.log('ANSWER 1:', output);

/**
 * Second challenge: Since the time complexity is already at its best,
 *    how can we improve the space complexity to O(1)?
 *
 * Solution: for each element, we have to store both the current value and the
 *    value of the increment. We can do that by adding the array length to the element
 *    in the position of the current value (position: input[i] % n, we do "% n" so we get
 *    the correct value of the position, not overflowing the array) on each iteration.
 *    In the end, we divide every element to n so we get the number of times the
 *    element of that index appeared in the input array.
 */

console.log('------------------------------');


for (let i = 0; i < n; i++) {
  input[input[i] % n] += n
  console.log(input);
}

input = input.map(el => Math.floor(el / n))

// time complexity: O(2n) -> O(n)
// space complexity: O(1)
console.log('ANSWER 2:', input);
