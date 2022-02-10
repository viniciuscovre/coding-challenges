/**
 *
 * Without using Array.split(), String.split() or Array.join(), write a function that
 * will accept a string and return a the same string with the order of words reversed
 *
 * Example:
 *      Input: "The quick brown fox jumps over the lazy dog"
 *      Returns: "dog lazy the over jumps fox brown quick The"
 */


function reverse(input) {
  let result = ''
  let word = ''

  for (let i = input.length - 1; i >= 0; i--) {
    if (input[i] != ' ') word = input[i] + word
    else {
      result += word + ' '
      word = ''
    }
  }

  result += word + ' '
  word = ''

  return result
}

console.log(
  reverse("The quick brown fox jumps over the lazy dog")
)
