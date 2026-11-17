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

    const players = [{"Player 1" : "X"}, {"Player 2": "O"}]; 

    const getPlayer1 = function(){ 
        return players[0];
    } 

    const getPlayer2 = function(){ 
        return players[1];
    }
    
    return {getPlayer1,getPlayer2};
})();  

function playGame(){ 
    const player1 = players.getPlayer1(); 
    const player2 = players.getPlayer2();  
    gameBoard.displayBoard(); 

    while (!gameOver()){ 
        const turns;

        const row = Number(input("Choose row: ")); 
        const col = Number(input("Choose column: ")); 

        if ((gameBoard.getBoard()[row][col]).length != 0){  
            console.log("Invalid position. Please choose another position on the board");
        } else { 
            // gameBoard.getBoard()[row][col] = ;
        }

    } 

     

} 


function gameOver(){ 
    return;
}

// console.log(gameBoard.getBoard()[0][1]);

// playGame();
//console.log(disboard.displayBoard());



// displayBoard(disboard);





