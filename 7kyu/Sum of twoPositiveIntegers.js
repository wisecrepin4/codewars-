function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}
//this give the sum of teh lowest integets
//by just adding those that came first because we had already committed
