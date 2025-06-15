function rot13(str) {
  let first = "abcdefghijklm".split("");
  let second = "nopqrstuvwxyz".split("");
  return str
    .split("")
    .map((a) => {
      if (first.includes(a.toLowerCase())) {
        let index = first.indexOf(a.toLowerCase());

        a = a == a.toLowerCase() ? second[index] : second[index].toUpperCase();
        return a;
      } else if (second.includes(a.toLowerCase())) {
        let index = second.indexOf(a.toLowerCase());

        a = a == a.toLowerCase() ? first[index] : first[index].toUpperCase();
        return a;
      } else return a;
    })
    .join("");
}
