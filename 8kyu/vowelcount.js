function getCount(str) {
  let vo = "aeiou";

  return str.split("").reduce((a, b) => {
    return vo.includes(b) ? a + 1 : a;
  }, 0);
}
//counting varables in the given string
