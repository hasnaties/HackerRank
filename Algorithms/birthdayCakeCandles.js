function birthdayCakeCandles(candles) {
  const tallest = candles.sort((a, b) => b - a)[0];
  let numberOfTallest = 0;

  for (let index = 0; index < candles.length; index++) {
    if (candles[index] === tallest) {
      numberOfTallest++;
    }
  }

  return numberOfTallest;
}