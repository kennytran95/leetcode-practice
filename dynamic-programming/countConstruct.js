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
