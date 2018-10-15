/*
  Given two strings, write a function to determine whether they are anagrams.
*/
log = console.log;

function checkIfAnagram(input1, input2) {
  const map = [];
  for (let i = 0; i < 256; ++i) map[i] = 0;

  for (let i = 0; i < input1.length; ++i) {
    const char = input1.charCodeAt(i);
    map[char]++;
  }

  for (let i = 0; i < input2.length; ++i) {
    const char = input2.charCodeAt(i);
    map[char]--;
  }

  for (let i = 0; i < 256; ++i) if (map[i] !== 0) return false;

  return true;
}

console.log(checkIfAnagram("binary", "brainy"));
