function allConstruct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  let results = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      results.push(...targetWays);
    }
  }
  memo[target] = results;
  return memo[target];
}

console.log(allConstruct("apple", ["ap", "a", "pple", "ppl", "ple"]));
console.log(allConstruct("orange", ["ap", "pple", "ppl", "ple"]));
console.log(
  allConstruct("scimitar", ["s", "cim", "it", "ar", "scimiw", "shimmy", "shim"])
);
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
  allConstruct("skatboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  allConstruct("eeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeeee",
    "eeeeeeee",
    "eeeeeeee",
    "eeeeeeeee",
  ])
);
