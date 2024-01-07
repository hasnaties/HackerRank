function dynamicArray(n, queries) {
  let arr2D = [];
  let lastAnswer = 0;
  let answersArray = [];
  
  // assign n arrays to arr2D
  for (let index = 0; index < n; index++) {
    arr2D[index] = [];
  }
  // Analyze the queries
  for (let index = 0; index < queries.length; index++) {
    
    let x = queries[index][1];
    let y = queries[index][2];

    let idx = (x ^ lastAnswer) % n;
    
    if (queries[index][0] === 1) {
      arr2D[idx].push(y);
      
    } else if (queries[index][0] === 2) {
      let col  = y % arr2D[idx].length;
      lastAnswer = arr2D[idx][col];
      answersArray.push(lastAnswer);
    }
  }

  return answersArray;
}