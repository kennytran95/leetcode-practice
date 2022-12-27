function bestSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let number of numbers) {
    const remainder = targetSum - number;
    const remainderCombination = bestSum(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, number];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return memo[targetSum];
}

console.log(bestSum(7, [2, 3]));
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(7, [2, 4]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));

function T_bestSum(targetSum, numbers) {
  let table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let number of numbers) {
        let newCombo = [...table[i], number];
        if (!table[i + number] || newCombo.length < table[i + number].length) {
          table[i + number] = newCombo;
        }
      }
    }
  }

  return table[targetSum];
}

console.log(T_bestSum(7, [2, 3]));
console.log(T_bestSum(7, [5, 3, 4, 7]));
console.log(T_bestSum(7, [2, 4]));
console.log(T_bestSum(8, [2, 3, 5]));
console.log(T_bestSum(100, [1, 2, 5, 25]));
