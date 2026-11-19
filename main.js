const domBoard = []; 
const header = document.getElementById("header"); 
let turn = 0;
let gameFlag = false;

const gameBoard = (function (){ 
    const board = ["","","","","","","","",""];  
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
})(); //gameBoard function

const players = (function(){  

    const players = [{symbol : "X"}, {symbol: "O"}]; 

    const getPlayer1 = function(){ 
        return players[0];
    } 

    const getPlayer2 = function(){ 
        return players[1];
    }
    
    return {getPlayer1,getPlayer2};
})(); //players function

function validPos(idx){ 
    if (gameFlag){ 
        return;
    }else if (gameBoard.getBoard()[idx] == "X" || gameBoard.getBoard()[idx] == "O" ){ 
        header.textContent = "Invalid position, please choose another position. "; 
        return false;            
    } else{ 
        if (turn % 2 ==0) {
            domBoard[idx].textContent = players.getPlayer1().symbol;
            gameBoard.getBoard()[idx] = players.getPlayer1().symbol;    
        } else { 
            domBoard[idx].textContent = players.getPlayer2().symbol;
            gameBoard.getBoard()[idx] = players.getPlayer2().symbol;  
        }
        turn++; 

        if (gameOver()){ 
            gameFlag = true;
        } else if (turn % 2 == 0){ 
            header.textContent = "It's Player One's turn";
        } else if (turn % 2 != 0) { 
            header.textContent = "It's Player Two's turn";
        } 
    }  
    return true;
}//check Position function

function playGame(idx){
    if (gameFlag){ 
        return; 
    }
    
    if (validPos(idx)){ 
        return;
    }
     
}  //playGame function


const dom = function (){   
    for (let i = 0; i < 9; i++){ 
        let num = "" + i;
        let row = document.getElementById(num);  
        domBoard.push(row); 
        
        row.addEventListener('click', function(){ 
            playGame(i);
        })  
    } 
} // render DOM


function restartGame(){ 
    for (let i = 0; i < domBoard.length; i++){ 
        domBoard[i].textContent = "";
    } 

    for(let i = 0; i < gameBoard.getBoard().length; i++){ 
        gameBoard.getBoard()[i] = "";
    }
    turn = 0;
    gameFlag = false; 
    header.textContent = "WELCOME: CLICK ON THE GRID TO START PLAYING"; 
    
} // restarts game

function gameOver(){  
    let board = gameBoard.getBoard();
    if (
    (board[0] == "X" && board[1] == "X" && board[2] == "X" )|| (board[3] == "X" && board[4] =="X" && board[5] == "X") || 
    (board[6] == "X" && board[7] == "X" && board[8] == "X") ||(board[0] == "X" && board[3] =="X" && board[6] == "X") ||  
    (board[1] == "X" && board[4] == "X" && board[7] == "X") || 
    (board[2] == "X" && board[5] == "X" && board[8] == "X") || 
    (board[0] == "X" && board[4] == "X" && board[8] == "X") || (board[2] == "X" && board[4] == "X" && board[6] == "X")){ 
            header.textContent = "Player 1 is the winner"; 
            return true;
    } else if( 
        (board[0] == "O" && board[1] == "O" && board[2] == "O" )|| (board[3] == "O" && board[4] =="O" && board[5] == "O") || 
        (board[6] == "O" && board[7] == "O" && board[8] == "O") ||(board[0] == "O" && board[3] =="O" && board[6] == "O") ||  
        (board[1] == "O" && board[4] == "O" && board[7] == "O") || 
        (board[2] == "O" && board[5] == "O" && board[8] == "O") || 
        (board[0] == "O" && board[4] == "O" && board[8] == "O") || (board[2] == "O" && board[4] == "O" && board[6] == "O")    
    ){  
        header.textContent = "Player 2 is the winner"; 
        return true;
    } else if (turn == 9){ 
        header.textContent = "It's a tie"; 
        return true;
    } 
    return false;
} // checks if game is over

dom();





