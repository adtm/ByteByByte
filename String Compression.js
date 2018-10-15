/*
  Given a string, write a function to compress it by shortening every
  sequence of the same character to that character followed by the number of repetitions.
  If the compressed string is longer than the original, you should return the original string.
*/
log = console.log;

function stringCompression(input) {
  let output = "";
  let sum = 1;
  for (let i = 0; i < input.length - 1; ++i) {
    if (input.charAt(i) === input.charAt(i + 1)) sum++;
    else {
      output += input.charAt(i) + sum;
      sum = 1;
    }
  }

  output += input.charAt(input.length - 1) + sum;
  return output.length >= input.length ? output : input;
}
