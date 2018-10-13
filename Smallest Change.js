/**
  Given an input amount of change x, 
  Write a function to determine the minimum number of coins required to make that amount of change.
 */
log = console.log;

// Possible coins:
// 1, 3, 4

// Possible answers:
// change(6) -> 3 + 3, not 4 + 1 + 1

// We make a table for DP values
//     0 | 1 | 2 | 3 | 4 | 5 | 6 <- sum (j)
// 1 | 0 | 1 | 2 | 3 | 4 | 5 | 6
// 3 | 0 | 1 | 2 | 1 | 2 | 3 | 2
// 4 | 0 | 1 | 2 | 1 | 1 | 2 | 3
// <- coins (i)

function changeDP(coins, sum) {
  const table = [];
  for (let i = 0; i < coins.length; ++i) {
    table.push([]);
    for (let j = 0; j <= sum; ++j)
      table[i].push(0);
  }

  for (let i = 0; i < coins.length; ++i) {
    for (let j = 0; j <= sum; ++j) {
      if (coins[i] <= j) {
        table[i][j] = table[i][j - coins[i]] + 1;
        for (let z = i; z < coins.length; ++z)
          table[z][j] = table[i][j];
      }
    }
  }

  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < coins.length; ++i)
    min = Math.min(table[i][sum], min);

  return min;
}

