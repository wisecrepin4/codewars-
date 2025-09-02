function allNonConsecutive(arr) {
  let noncons = [];
  for (let i = 1; i <= arr.length - 1; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      noncons = [...noncons, { i: i, n: arr[i] }];
    }
  }
  return noncons;
}
