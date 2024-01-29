function possibleStrings(s, list) {
  let counter = [];

  for (let index = 0; index < s.length; index++) {
    counter[index] = 0;
  }

  for (let indexS = 0; indexS < s.length; indexS++) {
    for (let index = 0; index < list.length; index++) {
      if (s[indexS] === list[index]) {
        counter[indexS] += 1;
      }
    }
  }

  counter.sort((a, b) => a - b)
  return counter[0];
}

// Nested loop can be Improved if we read
// from both sides.