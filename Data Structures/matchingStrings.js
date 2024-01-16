function matchingStrings(stringList, queries) {
  let queriesResult = [];
  for (let index = 0; index < queries.length; index++) {
    queriesResult[index] = 0;
  }

  for (let index = 0; index < queries.length; index++) {
    for (let indexB = 0; indexB < stringList.length; indexB++) {
      if (queries[index] === stringList[indexB]) {
        queriesResult[index] += 1;
      }
    }
  }

  return queriesResult;
}