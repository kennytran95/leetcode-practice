function fib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 1) return 1;
  if (n === 0) return 0;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

console.log(fib(2), fib(4), fib(6), fib(50));
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
