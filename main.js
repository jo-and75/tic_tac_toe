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
    const turns = 0; 
    const arrPly = [player1,player2];
    gameBoard.displayBoard(); 

    // while (!gameOver()){ 
        for (let i = 0; i < arrPly.length; i++){   
            let row = 0; 
            let column= 0; 
            while (gameOver()){ 
                console.log("It's Player " + (i + 1) + "'s turn"); 
                row = await getRow(); 
                col = await getCol();  

                if (gameBoard.getBoard()[row][col].length != 0){  
                    console.log("Invalid position. Please choose another position on the board");
                } else{ 
                    break;
                } 
            }
            gameBoard.getBoard()[row][col] = arrPly[i].symbol; 
            gameBoard.displayBoard();
        }
    // } 
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

playGame();

function gameOver(){  
    let board = gameBoard.getBoard();
    if (
    (board[0][0] && board[0][1] && board[0][2]) || 
        (board[0][0] && board[0][1] && board[0][2]) || 
    (board[0][0] && board[0][1] && board[0][2]) || 

    
    )
}


// console.log(gameBoard.getBoard()[0][2].push("X")); 


// playGame();
// console.log(gameBoard.displayBoard());



// displayBoard(disboard);





