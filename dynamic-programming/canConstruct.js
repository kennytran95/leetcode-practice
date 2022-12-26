// function canConstruct(target, wordbank, memo = {}) {
//   if (target in memo) return memo[target];
//   if (target.length === 0) return true;
//   for (let word of wordbank) {
//     const wordIndex = target.indexOf(word);
//     const wordLength = word.length;
//     if (wordIndex === -1) {
//       continue;
//     } else {
//       const splicedWord = target
//         .split("")
//         .splice(wordLength, wordIndex)
//         .join("");
//       if (canConstruct(splicedWord, wordbank, memo) === true) {
//         memo[target] = true;
//         return true;
//       }
//     }
//   }
//   memo[target] = false;
//   return false;
// }

/* BAD SOLUTION ABOVE: Involves splicing the word out of the target at any given location. This will create unwanted adjacencies in the word leading to false positives. We should ONLY be able to splice at the BEGINNING of the string to prevent unwanted adjancencies. */

function canConstruct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return true;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
}

console.log(canConstruct("apple", ["ap", "pple", "ppl", "ple"]));
console.log(canConstruct("orange", ["ap", "pple", "ppl", "ple"]));
console.log(
  canConstruct("scimitar", ["s", "cim", "it", "ar", "scimiw", "shimmy", "shim"])
);
console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  canConstruct("skatboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeeee",
    "eeeeeeee",
    "eeeeeeee",
    "eeeeeeeee",
  ])
);
