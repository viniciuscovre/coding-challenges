/*
This is a demo task: https://app.codility.com/demo/take-sample-test/

Write a function:

> function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example:

• Given A = [1, 3, 6, 4, 1, 2], the function should return 5.
• Given A = [1, 2, 3], the function should return 4.
• Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].

Copyright 2009–2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
*/

// FIRST SOLUTION ==> O(n^2) | Score: 66% (Correctness: 100% | Performance: 25%)
function solution(A) {
  smallest = 1

  for (el of A) {
    if (A.includes(smallest)) smallest++
    else return smallest
  }

  return smallest
}

// SECOND SOLUTION ==> O(?) | Score: 44% (Correctness: 80% | Performance: 0%)
function solution(A) {
  A.sort()
  /* Array.sort in V8 (https://blog.shovonhasan.com/time-space-complexity-of-array-sort-in-v8/)
    • 10 or fewer ==> time: O(n^2) | space: O(1)
    • longer ==> time: Θ(n log(n)) | space: O(log(n))
  */
  
  smallest = 1
  changed = false

  for (el of A) {
    if (el > 0 && el <= smallest) smallest = el + 1
  }
  return smallest
}
