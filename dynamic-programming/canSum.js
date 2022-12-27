function canSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];

  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let number of numbers) {
    if (canSum(targetSum - number, numbers, memo) === true) {
      memo[targetSum] = true;
      return memo[targetSum];
    }
  }

  memo[targetSum] = false;
  return false;
}

console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(300, [7, 14]));

/* Tabulation */

function T_canSum(targetSum, numbers) {
  const table = Array(targetSum + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {
      for (let number of numbers) {
        table[i + number] = true;
      }
    }
  }
  return table[targetSum];
}

console.log(T_canSum(7, [5, 3, 4, 7]));
console.log(T_canSum(7, [2, 4]));
console.log(T_canSum(300, [7, 14]));
