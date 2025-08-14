const Gameboard = (()=> {
    let gameboard = ["", "", "", "", "", "", "", "", ""];


    const render = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id="square-${index}">${square}</div>`
        })
        document.querySelector("#gameboard").innerHTML = boardHTML;
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.addEventListener("click", Game.handleClick);
        })

    }

    return {
        render,
        gameboard
    }

})();

const Game = (() => {
    let players = ["X", "O"];
    let currentPlayer = players[0];
    let gameOver = false;
    let gameboard = Gameboard.gameboard;


    const winconditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];
    

    const start = () => {
        Gameboard.render();
        restartGame();
    }

    const handleClick = (event) => {
        let index = parseInt(event.target.id.split("-")[1]);
        if (gameboard[index] === "") {
            makeMove(index);
        } else if (gameboard[index] != "") {
            alert("This cell is occupied.")
        }
        checkWin();
    }

    const makeMove = (index) => {
        gameboard[index] = currentPlayer;
        console.log(gameboard[index]);
        let cell = document.getElementById(`square-${index}`)
        cell.textContent = currentPlayer;
        switchPlayer();
    }

    const switchPlayer = () => {
        if (currentPlayer = currentPlayer === "X" ? "O" : "X") {
            return true
        }
        return false
    }

    const checkWin = (currentPlayer) => {
        for(let i = 0; i < winconditions.length; i++){
        const [a, b, c] = winconditions[i]
        if(gameboard[a] === currentPlayer && gameboard[b] === currentPlayer && gameboard[c] === currentPlayer){
            console.log(`${currentPlayer} +  wins!`);
        }
    }
    }

    const checkTie = () => {
        for(let i = 0; i < squares.length; i++) {
        if(squares[i].textContent === "") {
            return false;
        }
    }
    return true
    }

    const restartGame = () => {
            let restartBtn = document.getElementById("restart-button");
            restartBtn.addEventListener("click", function() {
                let cells = document.getElementsByClassName("square")
                Array.from(cells).forEach((cell) => {
                    cell.textContent = "";
                })
            })
    }

    return {
        start,
        handleClick,
        checkWin,
        checkTie,
        switchPlayer,
        makeMove,
        restartGame
    }
})();

Game.start();




