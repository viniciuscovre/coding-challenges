const test = require('tape')
const {
  partialAdd,
  pipe
} = require('.')

// test('sample test', t => {
// // IIFE
// const actual = (() => true)()
// const expected = true
// t.deepEqual(actual, expected)
// t.end()
// })

test('addOne() should return 1 when 0 is passed', t => {
  const addOne = partialAdd(1)
  const actual = addOne(0)
  const expected = 1
  t.deepEqual(actual, expected)
  t.end()
})

test('addOne() should return 2 when 1 is passed', t => {
  const addOne = partialAdd(1)
  const actual = addOne(1)
  const expected = 2
  t.deepEqual(actual, expected)
  t.end()
})

test('addTWO() should return 2 when 0 is passed', t => {
  const addTwo = partialAdd(2)
  const actual = addTwo(0)
  const expected = 2
  t.deepEqual(actual, expected)
  t.end()
})

test('addTWO() should return 3 when 1 is passed', t => {
  const addTwo = partialAdd(2)
  const actual = addTwo(1)
  const expected = 3
  t.deepEqual(actual, expected)
  t.end()
})

test('pipe() should compose addNumber functions', t => {

  const addOne = partialAdd(1)
  const addTwo = partialAdd(2)
  const actual = pipe(addOne, addTwo, addOne)(1)
  const expected = 5
  t.deepEqual(actual, expected)
  t.end()
})
