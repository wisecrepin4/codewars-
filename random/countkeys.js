function countKeys(obj) {
  let count = 0;
  for (key in obj) {
    count++;
  }
  return count;
}
console.log(countKeys({ name: "Alice", age: 25, city: "Paris" }));
