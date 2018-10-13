/**
  Given an integer.
  Write a function to compute the number of ones in the binary representation of the number.
*/
log = console.log;

function howOnes(num) {
  let sum = 0;

  while (num) {
    sum += num ^ 1;
    num >>= 1;
  }
  return sum;
}

console.log(howOnes(3));
