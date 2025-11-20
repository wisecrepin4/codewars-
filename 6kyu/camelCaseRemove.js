function solution(string) {
  let arr = string.split("");
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] == arr[i].toUpperCase()) {
      arr.splice(i, 0, " ");
      i++;
    }
  }
  return arr.join("");
}
