import { type } from '@testing-library/user-event/dist/type';

export const greenifyLetters = (singleword, grid, row, setMasterFinalWord) => {
  let word = singleword.split('');
  let enteredWord = [];
  let enteredWordJoin;
  let FinalEnteredWordCO;

  for (let i = 0; i < 5; i++) {
    if (grid[row][i].value === word[i]) {
      grid[row][i].color = 'green';
      word[i] = '_';
    }
    if (grid[row][i].value) {
      enteredWord = [grid[row][i].value, ...enteredWord];
    }
  }

  console.log(typeof enteredWord);
  console.log('enteredWord', enteredWord);
  enteredWordJoin = enteredWord.join('');
  console.log(enteredWordJoin);
  console.log(typeof enteredWordJoin);
  FinalEnteredWordCO = enteredWordJoin.split('').reverse().join('');
  console.log(FinalEnteredWordCO);
  console.log('typeof FinalEnteredWordCO', typeof FinalEnteredWordCO);

  setMasterFinalWord(FinalEnteredWordCO);
  console.log('FinalEnteredWordCO was setMasterFinalWord');
  return word;
};

export const yellowifyLetters = (word, grid, row) => {
  for (let i = 0; i < 5; i++) {
    let idx = word.indexOf(grid[row][i].value);
    if (idx !== -1) {
      grid[row][i].color = 'yellow';
      word[idx] = '_';
    }
  }
};

export const addLetter = (
  value,
  row,
  col,
  grid,
  setRow,
  setCol,
  setGrid,
  playClickSound
) => {
  if (value) {
    playClickSound();
  }
  if (row < 5 && col < 5) {
    let newRow = row;
    let newCol = col + 1;

    setRow(newRow);
    setCol(newCol);

    grid[row][col] = { value: value };
    setGrid(grid);
  }
};

export const removeLetter = (row, col, grid, setCol, setGrid) => {
  if (row > 0 || col > 0) {
    let newCol = col - 1;
    if (newCol === -1) {
      newCol = 0;
    }
    setCol(newCol);

    grid[row][newCol] = '';
    setGrid(grid);
  }
};
