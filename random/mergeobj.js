function mergeObjects(ob1, ob2) {
  return {
    ...ob1,
    ...ob2,
  };
}
console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }));
