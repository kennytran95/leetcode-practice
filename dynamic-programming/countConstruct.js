function countConstruct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let totalCount = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const numWaysForRest = countConstruct(suffix, wordBank, memo);
      totalCount += numWaysForRest;
    }
  }
  memo[target] = totalCount;
  return totalCount;
}

console.log(countConstruct("apple", ["ap", "a", "pple", "ppl", "ple"]));
console.log(countConstruct("orange", ["ap", "pple", "ppl", "ple"]));
console.log(
  countConstruct("scimitar", [
    "s",
    "cim",
    "it",
    "ar",
    "scimiw",
    "shimmy",
    "shim",
  ])
);
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
  countConstruct("skatboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeeee",
    "eeeeeeee",
    "eeeeeeee",
    "eeeeeeeee",
  ])
);

function T_countConstruct(target, wordBank) {
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        table[i + word.length] += table[i];
      }
    }
  }
  return table[target.length];
}

console.log(T_countConstruct("apple", ["ap", "a", "pple", "ppl", "ple"]));
console.log(T_countConstruct("orange", ["ap", "pple", "ppl", "ple"]));
console.log(
  T_countConstruct("scimitar", [
    "s",
    "cim",
    "it",
    "ar",
    "scimiw",
    "shimmy",
    "shim",
  ])
);
console.log(T_countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(T_countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
  T_countConstruct("skatboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  T_countConstruct("eeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeeee",
    "eeeeeeee",
    "eeeeeeee",
    "eeeeeeeee",
  ])
);
