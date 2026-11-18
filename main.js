const readline = require('node:readline');
const r1 = readline.createInterface({ 
    input:process.stdin, 
    output:process.stdout
});

const gameBoard = (function (){ 
    const board = [[[],[],[]],[[],[],[]],[[],[],[]]];  
    const getBoard = function(){ 
        return board;
    } 

    const displayBoard = function(){ 
        for (let i = 0; i < board.length; i++){ 
            console.log(...board[i]);
        } 
        return "";
    }
    return {getBoard,displayBoard};
})();

const players = (function(){  

    const players = [{symbol : "X"}, {symbol: "O"}]; 

    const getPlayer1 = function(){ 
        return players[0];
    } 

    const getPlayer2 = function(){ 
        return players[1];
    }
    
    return {getPlayer1,getPlayer2};
})();  

async function playGame(){ 
    const player1 = players.getPlayer1(); 
    const player2 = players.getPlayer2();   
    const arrPly = [player1,player2]; 
    const positions = [];
    gameBoard.displayBoard(); 

    while (true){ 
        for (let i = 0; i < arrPly.length; i++){   
            let row = 0; 
            let col = 0; 
            while (true){ 
                console.log("It's Player " + (i + 1) + "'s turn"); 
                row = await getRow(); 
                col = await getCol();   

                if (row < 0 || row > 2 || col < 0 || col > 2){ 
                    console.log("Invalid coordinates, try again")
                } else if (gameBoard.getBoard()[row][col].length != 0){  
                    console.log("Position is occupied. Please choose another position on the board");
                } else { 
                    break;
                } 
            }
            gameBoard.getBoard()[row][col] = arrPly[i].symbol;  
            positions.push([row,col]);
            gameBoard.displayBoard();  

            if (gameOver(positions)){ return;}
        } 
        
    } 
}  

function getRow() {
    return new Promise((resolve) => {
        r1.question("Choose row: ", (r) => {
            resolve(Number(r));
        });
    });
}

function getCol() {
    return new Promise((resolve) => {
        r1.question("Choose column: ", (col) => {
            resolve(Number(col));
        });
    });
}

function gameOver(arr){  
    let board = gameBoard.getBoard();
    if (
    (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X" )|| (board[1][0] == "X" && board[1][1] =="X" && board[1][2] == "X") || 
    (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") 
    ||(board[0][0] == "X" && board[1][0] =="X" && board[2][0] == "X") ||  (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") || 
    (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") || 
    (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") || (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X")){ 
            console.log("Player 1 is the winner"); 
            return true;
    } else if( 
         (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O" )|| (board[1][0] == "O" && board[1][1] =="O" && board[1][2] == "O") || 
    (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O") 
    ||(board[0][0] == "O" && board[1][0] =="O" && board[2][0] == "O") ||  (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O") || 
    (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O") || 
    (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O") || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")
    ) {  
        console.log ("Player 2 is the winner"); 
        return true;
    } else if (arr.length == 9){ 
        console.log("It's a tie"); 
        return true;
    } 
    return false;
}


playGame();




