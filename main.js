
const disboard = (function (){ 
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

console.log(Object.keys(players.getPlayer1())[0])
console.log(disboard.displayBoard());



// displayBoard(disboard);





