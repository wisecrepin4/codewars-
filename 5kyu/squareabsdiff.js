const solution = function (firstArray, secondArray) {
  let len = firstArray.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum = sum + Math.pow(Math.abs(firstArray[i] - secondArray[i]), 2);
  }
  return sum / len;
};
