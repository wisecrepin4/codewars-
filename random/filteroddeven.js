function filterEvens(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
console.log(filterEvens([1, 2, 3, 4, 5, 6]));
