/**
 * (1) Write the data structure of a node in the linked list
 */

class Node {
  constructor (value) {
    this.value = value
    this.next
  }
}

/**
 * (2) Create a function that converts an array into a linked list with the data structure you've just created
 *
 *  -> input: array of integers
 *  -> output: head of the linked list
 *
 * Example: [123, 456, 678] -> new Node(123, new Node(456, new Node(678, undefined)))
 */

/**
 * time complexity: O(n)
 * space complexity: O(n)
 */
const convertToLinkedList = arr => {
  if (!arr.length) return undefined

  let list = new Node(arr[0])
  const head = list

  for (i = 1; i < arr.length; i++) {
    list.next = new Node(arr[i])
    list = list.next
  }

  return head
}

/**
 * (3) Create a function that prints the linked list in a beautiful way
 *
 *  -> input: head of the linked list
 *  -> output: void
 */
const print = head => {
  let result = ' • '

  while (head) {
    result += `${head.value} -> `
    head = head.next
  }

  console.log(result + 'END')
}

console.log('--------- 2nd & 3rd exercise ---------\n')
print(convertToLinkedList([123, 456, 678]))
print(convertToLinkedList([]))
print(convertToLinkedList([4,3,54,64,56,457,3,2,42,4,53]))

/**
 * (4) Given two sorted linked lists, create a function that would unify them in a single sorted linked list
 *
 *  -> input: a & b (heads of both sorted linked list)
 *  -> output: c (head of the resulting sorted linked list)
 *
 * Example:
 *    A: 50 -> 99 -> END
 *    B: 1 -> 2 -> END
 *
 * Result:
 *    C: 1 -> 2 -> 50 -> 99 -> END
 */

const sortLinkedLists = (a, b) => {
  let sortedList

  /*
    if one list is fully checked, we just need to point the resulting list to the
    remaining from the other (not fully visited) list because it's already sorted
  */
  let remaining

  // initialize resulting sorted list
  if (a.value < b.value) {
    sortedList = new Node(a.value)
    a = a.next
  } else {
    sortedList = new Node(b.value)
    b = b.next
  }

  const head = sortedList

  while (a && b) {
    if (a.value < b.value) {
      sortedList.next = new Node(a.value)
      a = a.next
      remaining = b
    } else {
      sortedList.next = new Node(b.value)
      b = b.next
      remaining = a
    }
    sortedList = sortedList.next
  }

  sortedList.next = remaining

  return head
}

console.log('\n\n--------- 4th exercise ---------\n')
const a = convertToLinkedList([0, 10, 50, 54, 56, 99, 109])
const b = convertToLinkedList([1, 2, 40, 55, 102])
print(sortLinkedLists(a, b))
