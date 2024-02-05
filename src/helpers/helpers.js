export const greenifyLetters = (singleword, grid, row) => {
  let word = singleword.split('');
  for (let i = 0; i < 5; i++) {
    if (grid[row][i].value === word[i]) {
      grid[row][i].color = 'green';
      word[i] = '_';
    }
  }
  return word;
};

export const yellowifyLetters = (word, grid, row) => {
  for (let i = 0; i < 5; i++) {
    if (word[i] !== '_') {
      let idx = word.indexOf(grid[row][i].value);
      if (idx !== -1) {
        grid[row][i].color = 'yellow';
        word[idx] = '_';
      }
    }
  }
};
