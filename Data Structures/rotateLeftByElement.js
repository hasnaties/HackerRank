const rotateLeftByElement = (d, arr) => {
  let dIndex = arr.findIndex(e => e === d);
  
  let left = dIndex - 1;
  
  for (let index = 0; index < d; index++) {
    
    if (left > arr.length - 1) {
      left = 0;
    }
    if (dIndex > arr.length - 1) {
      dIndex = 0;
    }
    
    let temp = arr[left];
    for (let indexB = 0; indexB < arr.length; indexB++) {
      if (left > arr.length - 1) {
        left = 0;
      }
      if (dIndex > arr.length - 1) {
        dIndex = 0;
      }
      arr.splice(left, 1, arr[dIndex]);
      left++;
      dIndex++;
    }
    arr.splice(dIndex - 2, 1, temp);
    
  }
  
  return arr;
}

const testSolution = (d, arr) => {
  let dIndex = arr.findIndex(e => e === d);
  if (dIndex < 0 || arr.length <= 1) {
    return arr;
  }
  
  let left = dIndex - 1;
  
  for (let index = 0; index < d; index++) {
    console.log(arr);
    
    if (left > arr.length - 1) {
      left = 0;
    }
    if (dIndex > arr.length - 1) {
      dIndex = 0;
    }
    
    let temp = arr[left];
    for (let indexB = 0; indexB < arr.length; indexB++) {
      if (left > arr.length - 1) {
        left = 0;
      }
      if (dIndex > arr.length - 1) {
        dIndex = 0;
      }
      // console.log(arr);
      arr.splice(left, 1, arr[dIndex]);
      left++;
      dIndex++;
    }
    arr.splice(dIndex - 2, 1, temp);
    
  }
  
  return arr;
}