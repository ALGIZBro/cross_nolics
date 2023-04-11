let players = ['x', 'o'];
let activePlayer;
let board = [];

function startGame() {
  activePlayer = 0;
  
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
  
  if (checkWin()) {
    showWinner(activePlayer);
  } else {
      activePlayer = (activePlayer) ? 0 : 1;
  }
}

//function checkWin() {
//  if (board[0][1] && board[0][0] === board[0][1] && board[0][1] === board[0][2]) return true;
//  if (board[1][1] && board[1][0] === board[1][1] && board[1][1] === board[1][2]) return true;
//  if (board[2][1] && board[2][0] === board[2][1] && board[2][1] === board[2][2]) return true;
  
//  if (board[1][0] && board[0][0] === board[1][0] && board[1][0] === board[2][0]) return true;
// if (board[1][1] && board[0][1] === board[1][1] && board[1][1] === board[2][1]) return true;
//  if (board[1][2] && board[0][2] === board[1][2] && board[1][2] === board[2][2]) return true;

//  if (board[1][1] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) return true;
//  if (board[1][1] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) return true;
  
//  return false;
//}

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