function greet(name, city, state) {
  let joined = name.join(" ");
  return `Hello, ${joined}!Welcome to ${city},${state}!`;
}
console.log(greet(["John", "Smith"], "Phoenix", "Arizona"));
