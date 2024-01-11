const rotateLeft = (d, arr) => {
  if (d === arr.length) {
    return arr;
  }

  for (let index = 0; index < d; index++) {
    
    let temp = arr[0];
    for (let indexB = 0; indexB < arr.length - 1; indexB++) {
      arr[indexB] = arr[1 + indexB];
      
    }
    arr[arr.length - 1] = temp;
  }

  return arr;
}



// -- These are all raw, unfinished or less-efficient solutions.



const solution = (d, arr) => {
  let current = arr.findIndex(e => e === d);
  let next = current - 1;
  let prev = current;

  for (let index = current; index < d; index--) {
    if (next < 0) {
      next = arr.length - 1;
    }
    let temp = arr[next];
    arr.splice(next, 1, arr[current]);
    
    for (let indexB = 0; indexB < arr.length; indexB++) {
      if (prev > arr.length - 1) {
        prev = 0;
      }
      arr.splice(prev, 1, arr[1 + prev]);
      prev++;
    }
    
  }

  return arr;
};
const solution2 = (d, arr) => {
  let dIndex = arr.findIndex(e => e === d);
  
  let left = dIndex - 1;
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
  console.log(arr);

  temp = arr[left];
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
  console.log(arr);
  
  // return arr;
};

const solution3 = (d, arr) => {
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

const solution4 = (d, arr) => {
  if (d === arr.length) {
    return arr;
  }
  let dIndex = 0;
  
  let left = dIndex - 1;
  
  for (let index = 0; index < d; index++) {
    console.log(arr);
    
    if (left < 0) {
      left = arr.length - 1;
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
      console.log(left, dIndex);
      // arr.splice(left, 1, arr[dIndex]);
      left++;
      dIndex++;
    }
    arr.splice(dIndex - 2, 1, temp);
    
  }
  
  return arr;
}

const solution5 = (d, arr) => {
  if (d === arr.length) {
    return arr;
  }

  for (let index = 0; index < d; index++) {
    
    let temp = arr[0];
    for (let indexB = 0; indexB < arr.length - 1; indexB++) {
      arr.splice(indexB, 1, arr[1 + indexB]);
      
    }
    arr.splice(arr.length - 1, 1, temp)
  }

  return arr;
}

const solution6 = (d, arr) => {
  if (d === arr.length) {
    return arr;
  }

  let arr2 = [];
  for (let index = 0; index < d; index++) {
    
    for (let indexB = 0; indexB < arr.length - 1; indexB++) {
      arr2.push(arr[1 + indexB]);
      
    }
    arr2.push(arr[0]);
    arr = arr2;
    arr2 = [];
  }

  return arr;
};