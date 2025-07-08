function findProperty(obj, str) {
  if (obj[str] !== null) {
    return obj[str];
  } else {
    return "Property not found";
  }
}
console.log(findProperty({ name: "Alice", age: 25 }, "name"));
