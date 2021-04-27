/**
 * input -> 8L
 *
 * 3 recipients:
 *    -> 8L (filled)
 *    -> 3L (empty)
 *    -> 5L (empty)
 *
 * Goal: to have 4L on 2 recipients
 */

// recipients capacity:
   [8, 3, 5]
// steps:
1. [8, 0, 0]
2. [5, 3, 0]
3. [5, 0, 3]
4. [2, 3, 3]
5. [2, 1, 5]
6. [7, 1, 0]
7. [7, 0, 1]
8. [4, 3, 1]
9. [4, 0, 4]
