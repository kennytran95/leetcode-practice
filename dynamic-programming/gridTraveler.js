function gridTraveler(x, y, memo = {}) {
  const key = x.toString() + ", " + y.toString();
  if (key in memo) return memo[key];
  if (x === 1 && y === 1) return 1;
  if (x === 0 || y === 0) return 0;
  memo[key] = gridTraveler(x - 1, y, memo) + gridTraveler(x, y - 1, memo);
  return memo[key];
}

console.log(
  gridTraveler(3, 3),
  gridTraveler(1, 1),
  gridTraveler(2, 3),
  gridTraveler(18, 18)
);
