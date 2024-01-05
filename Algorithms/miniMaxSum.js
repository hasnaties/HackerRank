function miniMaxSum(arr) {
  let minMax = [undefined, undefined];
  for (let index = 0; index < 5; index++) {
    let temp = 0;
    for (let indexB = 0; indexB < 5; indexB++) {
      if (indexB != index) {
        temp += arr[indexB];
      }
    }

    if (temp < minMax[0] || !minMax[0]) {
      minMax[0] = temp;
    }
    if (temp > minMax[1]  || !minMax[1]) {
      minMax[1] = temp;
    }
  }

  console.log(`${minMax[0]} ${minMax[1]}`);
}