function staircase(n) {
  for (let index = 1; index <= n; index++) {
    for (let indexB = 1; indexB <= n; indexB++) {
      if (indexB <= (n - index)) {
        process.stdout.write(' ');
      } else {
        process.stdout.write('#');
      }
    }
    process.stdout.write('\n');
  }
}