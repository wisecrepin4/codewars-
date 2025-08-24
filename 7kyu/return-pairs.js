function generatePairs(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    for (let j = i; j <= n; i++) {
      arr = [...arr, [i, j]];
    }
  }
  return arr;
}
//I used nested loops to return arrays until we reached the sum pairs we need to n
