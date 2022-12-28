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

// console.log(allConstruct("apple", ["ap", "a", "pple", "ppl", "ple"]));
// console.log(allConstruct("orange", ["ap", "pple", "ppl", "ple"]));
// console.log(
//   allConstruct("scimitar", ["s", "cim", "it", "ar", "scimiw", "shimmy", "shim"])
// );
// console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
// console.log(
//   allConstruct("skatboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
// );
// console.log(
//   allConstruct("eeeeeeeeeeeeeef", [
//     "e",
//     "ee",
//     "eee",
//     "eeeee",
//     "eeeeeeee",
//     "eeeeeeee",
//     "eeeeeeeee",
//   ])
// );

/* Tabulation */

function T_allConstruct(target, wordBank) {
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);

  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        let newCombo = table[i].map((prefixCombo) => {
          return [...prefixCombo, word];
        });
        table[i + word.length] = [...table[i + word.length], ...newCombo];
        // table[i + word.length].push(...newCombo);  <-- also works
      }
    }
  }
  return table[target.length];
}

console.log(T_allConstruct("apple", ["ap", "a", "pple", "ppl", "ple"]));
console.log(T_allConstruct("orange", ["ap", "pple", "ppl", "ple"]));
console.log(
  T_allConstruct("scimitar", [
    "s",
    "cim",
    "it",
    "ar",
    "scimiw",
    "shimmy",
    "shim",
    "scimitar",
  ])
);
console.log(T_allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(T_allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
  T_allConstruct("skatboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  T_allConstruct("eeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeeee",
    "eeeeeeee",
    "eeeeeeee",
    "eeeeeeeee",
  ])
);
