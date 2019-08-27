const staircase = n => {
  let M = new Array(n);
  for (let i = 0; i < n; i++) {
    M[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      M[i][j] = ' ';
      if (j >= n-i-1) {
        M[i][j] = '#';
      }
    }
    console.log(M[i].join("").toString());
  }
}

staircase(6)

/*
n = 4
      0   1   2   3
0                 #
1             #   #
2         #   #   #
3     #   #   #   #
*/