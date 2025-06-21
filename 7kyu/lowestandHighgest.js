function highAndLow(numbers) {
  numbers = numbers.split(" ");
  numbers = numbers.sort((a, b) => b - a);
  return `${numbers[0]} ${numbers[numbers.length - 1]}`;
}
