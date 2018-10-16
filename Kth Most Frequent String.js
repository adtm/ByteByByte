/**
  Given a list of strings,
  write a function to get the kth most frequently occurring string.
 */
function kthMostFrequentString(arr, k) {
  const hash = {};

  for (let i = 0; i < arr.length; ++i) {
    const word = arr[i];
    if (hash[word]) {
      hash[word]++;
    } else {
      hash[word] = 1;
    }
  }

  const extracted = Object.entries(hash)
    .map(([key, value]) => ({ key, value }))
    .sort((a, b) => b.value - a.value);

  return extracted[k].key;
}
