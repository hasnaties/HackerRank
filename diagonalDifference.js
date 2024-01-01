function diagonalDifference(arr) {
  let leftDiagonal = 0;
  let rightDiagonal = 0;

  let row = 0;
  let col = 0;

  while (row <= (arr.length - 1)) {

    leftDiagonal += arr[row][col];
    row++;
    col++;
  }

  row = 0;
  col = 2;
  while (row <= (arr.length - 1)) {
    rightDiagonal += arr[row][col];
    row++;
    col--;
  }

  let diagDiff = Math.abs(leftDiagonal - rightDiagonal)

  return diagDiff;
}

function diagonalDifference2(arr) {
  let leftDiagonal = 0;
  let rightDiagonal = 0;

  for (let index = 0; index < arr.length; index++) {
    leftDiagonal += arr[index][index];
  }

  for (let index = 0; index < arr.length; index++) {
    rightDiagonal += arr[index][(arr.length - 1) - index];
  }

  let diagDiff = Math.abs(leftDiagonal - rightDiagonal)

  return diagDiff;
}