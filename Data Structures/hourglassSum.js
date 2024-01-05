function hourglassSum(arr) {
  let sum = undefined;

  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      let temp = arr[row][col] + arr[row][1 + col] + arr[row][2 + col] +
        arr[1 + row][1 + col] +
        arr[2 + row][col] + arr[2 + row][1 + col] + arr[2 + row][2 + col];

      if (typeof sum === 'undefined' || temp > sum) {
        sum = temp;
      }
    }
  }
  return sum;
}