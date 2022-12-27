function howSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let number of numbers) {
    const remainder = targetSum - number;

    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, number];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return null;
}

/*
m = target sum
n = numbers.length

Pre-memo Time & Space
time: o(n^m * m)        the extra m comes from the spread operator of copying over arrays.
space: o(m)             m number of recursive calls made at once on the stack.

Memoized Time & Space
time: o(n * m^2)
space: o(m^2)
*/

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));

/* Tabulation */

function T_howSum(targetSum, numbers) {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let number of numbers) {
        table[i + number] = [...table[i], number]; //dynamic programming - using cached information to compute other data
      }
    }
  }
  return table[targetSum];
}
console.log(T_howSum(7, [2, 3]));
console.log(T_howSum(7, [5, 3, 4, 7]));
console.log(T_howSum(7, [2, 4]));
console.log(T_howSum(8, [2, 3, 5]));
console.log(T_howSum(300, [7, 14]));
