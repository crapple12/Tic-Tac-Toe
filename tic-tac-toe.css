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
        gameboard = Gameboard.gameboard;
        if (gameOver === true) {
            alert("Game is finished. Click restart to go again.")
        } else if (gameboard[index] != "") {
            alert("This cell is occupied.")
        } else if (gameboard[index] === "") {
            makeMove(index);
        }
    }

    const makeMove = (index) => {
        gameboard[index] = currentPlayer;
        console.log(gameboard[index]);
        let cell = document.getElementById(`square-${index}`)
        cell.textContent = currentPlayer;
        checkWin(currentPlayer);
        makeActivePlayer(currentPlayer);
        switchPlayer();
    }

    const switchPlayer = () => {
        if (currentPlayer = currentPlayer === "X" ? "O" : "X") {
            return true
        }
        return false
    }

    const makeActivePlayer = (currentPlayer) => {
        if (currentPlayer === "X") {
            const playerIconO = document.getElementById("icon-o");
            playerIconO.style.backgroundColor = "#9eb984";
            const playerIconX = document.getElementById("icon-x");
            playerIconX.style.backgroundColor = "#f0f0f0";
        } else if (currentPlayer === "O") {
            const playerIconX = document.getElementById("icon-x")
            playerIconX.style.backgroundColor = "#9eb984";
            const playerIconO = document.getElementById("icon-o")
            playerIconO.style.backgroundColor = "#f0f0f0";
        }
    }

    const checkWin = (currentPlayer) => {
        for(let i = 0; i < winconditions.length; i++){
        const [a, b, c] = winconditions[i]
        if(gameboard[a] === currentPlayer && gameboard[b] === currentPlayer && gameboard[c] === currentPlayer){
            alert(`Player ${currentPlayer} wins!`);
            gameOver = true;
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
                window.location.reload();
            })
            gameOver = false;
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



