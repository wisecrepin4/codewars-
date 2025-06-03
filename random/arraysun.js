function sum(arr) {
  let sum = 0;
  arr.forEach((a) => {
    sum = a + sum;
  });

  if (arr.length == 0) {
    return 0;
  } else {
    return sum;
  }
}
