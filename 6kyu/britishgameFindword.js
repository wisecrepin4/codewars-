function longestWord(letters) {
  function checkavailability(word, letters) {
    let value = true;
    let map = {};
    for (ch of letters) {
      map[ch] = (map[ch] || 0) + 1;
    }
    for (ch of word) {
      if (!(map[ch] && map[ch] != 0)) {
        return false;
      } else {
        map[ch]--;
      }
    }
    return value;
  }
  let Longword = [];
  let givword = words;
  let availability = true;
  let workingwords = [];
  let longest = 0;

  let pickletters = letters.split("");
  for (let i = 0; i <= givword.length - 1; i++) {
    availability = checkavailability(givword[i], pickletters);
    if (availability) {
      if (longest < givword[i].split("").length) {
        longest = givword[i].split("").length;
      }
      workingwords.push(givword[i]);
    }
  }
  if (workingwords.length) {
    return workingwords.filter((w) => w.split("").length >= longest);
  } else {
    return null;
  }
}
//this is a slution that I have created that check whether a picked letters contains a word that belongs in the list of given words then return the longest
