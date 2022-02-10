module.exports = {
  partialAdd,
  pipe
}

// pipe:: ...fns -> Number -> Number
function pipe(...fns) {
  return (initialValue) => fns.reduce((value, fn) => fn(value), initialValue)
}

// partialAdd:: Number -> Number -> Number
// partial application, curry
// closure
function partialAdd(adder) {
  return (value) => {
    return value + adder
  }
}

// hoists
// addOne:: Number -> Number
function addOne(number) {
  return 1 + number
}

// addTwo:: Number -> Number
function addTwo(number) {
  return 2 + number
}
