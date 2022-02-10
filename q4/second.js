/**
 * TASK: Write a function that removes duplicates from an array
 *
 * Example:
 *      removeDuplicates([1,3,3,3,1,5]) produce 1,3,5
 */

function removeDuplicates(input) {
  return input.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr)
    }
    return acc
  }, [])
}

console.log(removeDuplicates([1, 3, 3, 3, 1, 5]))
