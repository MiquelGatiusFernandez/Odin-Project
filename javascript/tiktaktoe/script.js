const cellContainer = document.querySelector(".cell-container");

function GameBoard() {
    const _boardSize = 9
    const _rowsAndcolumns = 3;
    let _board = [];

    let _player;
    let _computer;

    let _numberOfMoves = 0;
    let _playerTurn = true;

    const increaseMoves = function increaseNumberOfMoves() {
        _numberOfMoves++;
    }

    const chooseTurn = function chooseWhoPlaysNext(cell) {
        if (_playerTurn) {
            console.log(`Player has chosen cell column:${cell.getColumn()} row: ${cell.getRow()}, next to move is the computer.`);
            _playerTurn = false;

        } else {
            _playerTurn = true;
            console.log(`Computer has chosen cell column: ${cell.getColumn()} row: ${cell.getRow()}, next to move is the player.`);
        }
    }

    function createCell(column, row, id) {
        let _value = "";
        let _row = row;
        let _column = column;
        let _div;
        let _id = id;

        const getValue = () => _value;
        const setValue = (sign) => _value = sign;
        const getRow = () => _row;
        const getColumn = () => _column;
        const setDiv = (div) => _div = div;

        return { getValue, setValue, getRow, getColumn, setDiv };
    }

    const createBoard = function createBoardFromScratch() {
        for (let i = 0; i < _rowsAndcolumns; i++) {
            for (let j = 0; j < _rowsAndcolumns; j++) {
                _board[i * 3 + j] = createCell(i, j, i * 3 + j);
                let div = document.createElement('div');
                div.className = "cell";
                div.id=i * 3 + j;
                div.innerText = "";
                div.addEventListener("click", (event) => {
                    if(_playerTurn){
                        makeMove(event.srcElement.id,_player,event);
                    }else{
                        makeMove(event.srcElement.id,_computer,event);
                    }

                    console.log(event.srcElement.id);
                });
                _board[i * 3 + j].setDiv(div)
                cellContainer.appendChild(div);

            }

        }
        console.log("Board created.\n--------------");
    }
    createBoard();



    function createPlayer(sign, name = "") {
        let _name = name;
        let _sign = sign;

        const getName = () => _name;
        const setName = (newName) => _name = newName;

        const getSign = () => _sign;

        return { getName, setName, getSign };
    }

    const getPlayer = () => _player;
    const getComputer = () => _computer;


    _player = createPlayer("x", "Miguel");
    _computer = createPlayer("o", "Computah");



    const makeMove = (id, player, event) => {
        let cell = _board[id];
        if (cell.getValue() === "") {
            cell.setValue(player.getSign());
            event.srcElement.innerText = player.getSign();
            increaseMoves();
            chooseTurn(cell);
        } else {
            console.log("Cell has already been taken.\nChoose another cell.");
        }
        console.log(`Total moves: ${_numberOfMoves}`);

        if (_numberOfMoves >= 5) {
            if (checkWinner(player)) {
                console.log(`The winner is: ${player.getName()}`)
            }
        } else if (_numberOfMoves >= 9) {
            console.log("It's a draw.");
        }
    }

    const checkWinner = function checkWinner(player) {

        const checkRows = function checkRows() {
            for (let i = 0; i < _boardSize; i+=3) {
                if (_board[i].getValue() === player.getSign() &&
                    _board[i+1].getValue() === player.getSign() &&
                    _board[i+2].getValue() === player.getSign()) {
                        console.log("row");
                    return true;
                }

            }
            console.log("falserow");
            return false;
        }
        const checkColumns = function checkColumns() {
            for (let i = 0; i < _rowsAndcolumns; i++) {
                if (_board[i].getValue() === player.getSign() &&
                    _board[i+3].getValue() === player.getSign() &&
                    _board[i+6].getValue() === player.getSign()) {
                        console.log("column");
                    return true;
                }
            }
            console.log("falsecol");
            return false;
        }
        const checkDiagonal = function checkDiagonal() {
            if (_board[0].getValue() === player.getSign() &&
                _board[4].getValue() === player.getSign() &&
                _board[8].getValue() === player.getSign()) {
                    console.log("diagonal1");
                return true;
            }
            if (_board[2].getValue() === player.getSign() &&
                _board[4].getValue() === player.getSign() &&
                _board[6].getValue() === player.getSign()) {
                    console.log("diagonal2");
                return true;
            }
            console.log("falsedia");
            return false;
        }
        console.log(checkRows() || checkColumns() || checkDiagonal());
        return (checkRows() || checkColumns() || checkDiagonal());
    }
    return { makeMove, getPlayer, getComputer };
}

const gameBoard = GameBoard();

