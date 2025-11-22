var sing = function () {
  let arr = [];
  for (let i = 99; i >= 0; i--) {
    if (i == 0) {
      arr.push(`No more bottles of beer on the wall, no more bottles of beer.`);
      arr.push(
        `Go to the store and buy some more, 99 bottles of beer on the wall.`
      );
    } else if (i == 2) {
      arr.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
      arr.push(
        `Take one down and pass it around, ${i - 1} bottle of beer on the wall.`
      );
    } else if (i == 1) {
      arr.push(`${i} bottle of beer on the wall, ${i} bottle of beer.`);
      arr.push(
        `Take one down and pass it around, no more bottles of beer on the wall.`
      );
    } else {
      arr.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
      arr.push(
        `Take one down and pass it around, ${
          i - 1
        } bottles of beer on the wall.`
      );
    }
  }
  return arr;
};
sing();
//this is a code to change the lyrics of a song into an array
