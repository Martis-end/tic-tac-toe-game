import fild from "./fild.js";
fild();

let   gamer = "X",
      fullName = "Крестики",
      gameArray = [],
      winer = false,
      move = 1;
const box = document.querySelector(".fild"),
      currentTur = document.querySelector(".current_tur");

currentTur.innerHTML = `<span class="animate__animated animate__fadeIn">${fullName}, ваш ход</span>`;
box.addEventListener('click', checkWin);

function checkWin(event) {
    if (!event.target.firstChild) {
        event.target.innerHTML = `<span class="animate__animated animate__zoomIn">${gamer}</span>`;
        gamer == "X" ? gameArray[Number(event.target.id)] = "X" : gameArray[Number(event.target.id)] = "O";
        checkRows();
        checkColumns();
        checkDiagonals();
        changeGamer();
        gamerFullName();
        checkFinal();
        move = move + 1;
        move > 1 ? document.querySelector(".greating").classList.add("hide") : gamerFullName()
    };
};

function checkFinal() {
    (winer || !move == 9) ? congratuletion()
    (winer || move == 9) ? changeGamer() : congratuletion()
    (!winer && move !== 9) ? currentTur.innerHTML = `<span class="animate__animated animate__fadeIn">${fullName}, ваш ход</span>` : gamerFullName()
    (!winer && move == 9) ? currentTur.innerHTML = `<div class="congratuletion animate__animated animate__flip">! НИЧЬЯ !</div>` : gamerFullName()
};

function gamerFullName() { gamer === 'X' ? fullName = 'Крестики' : fullName = 'Нолики' };

function changeGamer() { gamer == 'X' ? gamer = 'O' : gamer = 'X' };

function checkRows() {
    for (let i = 0; i < 9; i = i + 3) {
        let line = gameArray.slice(i, i + 3).join('');
        line == `XXX` || line == `OOO` ? fixWiner([i, i + 1, i + 2]) : winer = winer;
    };
};

function checkColumns() {
    for (let i = 0; i < 3; i = i + 1) {
        let line = gameArray[i] + gameArray[i + 3] + gameArray[i + 6];
        line == `XXX` || line == `OOO` ? fixWiner([i, i + 3, i + 6]) : winer = winer;
    };
};

function checkDiagonals() {
    let diagonalX = (gameArray[0] + gameArray[4] + gameArray[8]);
    let diagonalY = (gameArray[2] + gameArray[4] + gameArray[6]);
    diagonalX == `XXX` || diagonalX == `OOO` ? fixWiner([0, 4, 8]) : winer = winer;
    diagonalY == `XXX` || diagonalY == `OOO` ? fixWiner([2, 4, 6]) : winer = winer;
};

function fixWiner(winArray) {
    winer = true;
    for (let i of winArray) {
        document.querySelector(`.box${i}`).classList.add("winerColor");
    }
};

function congratuletion() {
    gamerFullName();
    currentTur.innerHTML = `<div class="congratuletion animate__animated animate__flip">!!! Выиграли ${fullName} !!!</div>`
    document.querySelector("#update").classList.remove("hide");
    box.removeEventListener('click', checkWin);
};