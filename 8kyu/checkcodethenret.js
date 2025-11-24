function HQ9(code) {
  if (code === "H") return "Hello World!";
  if (code === "Q") return "Q";
  if (code !== "9") return;

  let result = [];

  for (let i = 99; i > 2; i--) {
    result.push(
      `${i} bottles of beer on the wall, ${i} bottles of beer.\n` +
        `Take one down and pass it around, ${
          i - 1
        } bottles of beer on the wall.`
    );
  }

  result.push(
    `2 bottles of beer on the wall, 2 bottles of beer.\n` +
      `Take one down and pass it around, 1 bottle of beer on the wall.`
  );

  result.push(
    `1 bottle of beer on the wall, 1 bottle of beer.\n` +
      `Take one down and pass it around, no more bottles of beer on the wall.`
  );

  result.push(
    `No more bottles of beer on the wall, no more bottles of beer.\n` +
      `Go to the store and buy some more, 99 bottles of beer on the wall.`
  );

  return result.join("\n");
}
//this is a solution of a challenge to check the code input then  retun accordng to the input
