const matrix = [
  [13, 39, 8],
  [45, 1, 0],
  [124, 88, 22]
];

const diagonalDifference = matrix => {
  let i = 0;
  let sumDiag1 = 0;
  let sumDiag2 = 0;
  const size = matrix.length;

  while (i < size) {
    sumDiag1 += matrix[i][i];
    sumDiag2 += matrix[i][size - i - 1];
    i++;
  }

  return Math.abs(sumDiag1 - sumDiag2);
}

diagonalDifference(matrix);