function isVow(a) {
  let alpha = "aeiou";
  return a.map((i) => {
    if (alpha.split("").includes(String.fromCharCode(i))) {
      return String.fromCharCode(i);
    } else {
      return i;
    }
  });
}
