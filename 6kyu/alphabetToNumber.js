function alphabetPosition(text) {
  let alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  let numberarr = [];
  let arr = text.toLowerCase().split("");
  for (let i = 0; i <= arr.length - 1; i++) {
    if (alpha.includes(arr[i])) {
      numberarr.push(alpha.indexOf(arr[i]) + 1);
    }
  }
  return numberarr.join(" ");
}
//this program will turn your text to  their number positions in the usual alphabet order"
