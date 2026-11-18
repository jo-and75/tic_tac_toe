const domBoard = [];

const gameBoard = (function (){ 
    const board = [[],[],[],[],[],[],[],[],[]];  
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

function playGame(){ 
    const player1 = players.getPlayer1(); 
    const player2 = players.getPlayer2();   
    const arrPly = [player1,player2]; 
    const positions = [];
    dom();

    while (true){ 
        for (let i = 0; i < arrPly.length; i++){   
            let idx = 0;
            while (true){ 
                console.log("It's Player " + (i + 1) + "'s turn"); 
                   
            }
            gameBoard.getBoard()[row][col] = arrPly[i].symbol;  
            positions.push([row,col]);
            gameBoard.displayBoard();  

            if (gameOver(positions)){ 
            r1.close();
            return; 
            }
        } 
        
    } 
}  

function clickEvent(idx){ 
    let index = idx; 
    






}

const dom = function (){  
    for (let i = 0; i < 9; i++){ 
        let num = "" + i;
        let row = document.getElementById(num);  
        domBoard.push(row); 
        row.addEventListener('click', function(){ 
            changeColor(i);
        }) 
    }
}



function gameOver(arr){  
    let board = gameBoard.getBoard();
    if (
    (board[0] == "X" && board[1] == "X" && board[2] == "X" )|| (board[3] == "X" && board[4] =="X" && board[5] == "X") || 
    (board[6] == "X" && board[7] == "X" && board[8] == "X") ||(board[0] == "X" && board[3] =="X" && board[6] == "X") ||  
    (board[1] == "X" && board[4] == "X" && board[7] == "X") || 
    (board[2] == "X" && board[5] == "X" && board[8] == "X") || 
    (board[0] == "X" && board[4] == "X" && board[8] == "X") || (board[2] == "X" && board[4] == "X" && board[8] == "X")){ 
            console.log("Player 1 is the winner"); 
            return true;
    } else if( 
        (board[0] == "O" && board[1] == "O" && board[2] == "O" )|| (board[3] == "O" && board[4] =="0" && board[5] == "O") || 
        (board[6] == "O" && board[7] == "O" && board[8] == "O") ||(board[0] == "O" && board[3] =="O" && board[6] == "O") ||  
        (board[1] == "O" && board[4] == "O" && board[7] == "O") || 
        (board[2] == "O" && board[5] == "O" && board[8] == "O") || 
        (board[0] == "O" && board[4] == "O" && board[8] == "O") || (board[2] == "O" && board[4] == "O" && board[8] == "O")    
    ){  
        console.log ("Player 2 is the winner"); 
        return true;
    } else if (arr.length == 9){ 
        console.log("It's a tie"); 
        return true;
    } 
    return false;
}

dom();
// playGame();




