function plusMinus(arr) {
  let ps = [0, 0, 0]

  arr.forEach(e => {
    if (e > 0) {
      ps[0] += 1;
    } else if (e < 0) {
      ps[1] += 1;
    } else if (e === 0) {
      ps[2] += 1;
    }
  });

  
  ps.forEach(e => {
    console.log((e/arr.length).toFixed(6));
  });
}