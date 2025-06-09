function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}
//this give the summ of teh lowedst integets
