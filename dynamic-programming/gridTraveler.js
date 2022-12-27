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

/* Tablulation */

function T_gridTraveler(x, y) {
  const table = Array(x + 1);
  for (let i = 0; i < table.length; i++) {
    table[i] = Array(y + 1).fill(0);
  }

  table[1][1] = 1;

  for (let r = 0; r <= x; r++) {
    for (let c = 0; c <= y; c++) {
      if (c + 1 <= y) table[r][c + 1] += table[r][c];
      if (r + 1 <= x) table[r + 1][c] += table[r][c];
    }
  }

  return table[x][y];
}

console.log(
  T_gridTraveler(3, 3),
  T_gridTraveler(1, 1),
  T_gridTraveler(2, 3),
  T_gridTraveler(18, 18)
);
