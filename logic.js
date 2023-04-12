let players = ['x', 'o'];
let activePlayer;
let draw;
let board = [];

function startGame() {
  activePlayer = 0;
  draw = 0;
  board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
  ];
  
  renderBoard(board);
}

function click(row, column) {
  board[row][column] = players[activePlayer];
  
  renderBoard(board);
  
  if (draw == 8) {
    let header = modalEl.getElementsByTagName('h2')[0];
    header.textContent = `🍾 Ничья! 🍾`;
    modalEl.classList.remove('hidden');
  }
  
  if (checkWin()) {
    showWinner(activePlayer);
  } else {
    activePlayer = (activePlayer) ? 0 : 1;
    draw++;
  }
}

function checkWin() {
   for (let l = 0; l < board.length; l++) {
     for (let i = 0; i < board.length; i++) {
       for (let j = 0; j < board.length - 2; j++) {
         if (board[i + l][j + 1] && board[i + l][j] === board[i + l][j + 1] && board[i + l][j + 1] === board[i + l][j + 2]) return true;
         if (board[j + 1][i + l] && board[j][i + l] === board[j + 1][i + l] && board[j + 1][i + l] === board[j + 2][i + l]) return true;
         if (board[j + 1][i + 1] && board[j][i + 2] === board[j + 1][i + 1] && board[j + 1][i + 1] === board[j + 2][i + 0]) return true; 
         if (board[j + 1][i + 1] && board[j][i + 0] === board[j + 1][i + 1] && board[j + 1][i + 1] === board[j + 2][i + 2]) return true;
       }
     }

   return false;
   } 
}