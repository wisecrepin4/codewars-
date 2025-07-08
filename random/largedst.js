function findLargest(arr) {
  let large = arr[0];
  for (a of arr) {
    if (a > large) {
      large = a;
    }
  }
  return large;
}
console.log(findLargest([10, 20, 5, 40, 30]));
