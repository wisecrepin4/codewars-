function digitalRoot(n) {
  let arr = String(n).split("");
  let sum = 0;
  for (let i of arr) {
    sum = sum + Number(i);
  }
  if (String(sum).split("").length > 1) {
    return digitalRoot(sum);
  } else {
    return sum;
  }
}
