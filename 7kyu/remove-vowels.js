function disemvowel(str) {
  let vow = "aeiou";

  return str
    .split(" ")
    .map((a) => {
      return a
        .split("")
        .filter((b) => !vow.includes(b.toLowerCase()))
        .join("");
    })
    .join(" ");
}
