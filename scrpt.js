let gamer = "X";
let fullName = "Крестики";
let gameArray = [];
let winer = false;
let move = 1;
const box = document.querySelector(".fild");
const greating = document.querySelector(".greating");
const updateButton = document.querySelector("#update");
const tur = document.querySelector(".tur");
tur.innerHTML = `<span class="animate__animated animate__fadeIn">${fullName}, ваш ход</span>`;
box.addEventListener('click', checkWin);
function checkWin(event) {
    if (!event.target.firstChild) {
        event.target.innerHTML = `<span class="animate__animated animate__zoomIn">${gamer}</span>`;
        gamer == "X" ? gameArray[Number(event.target.id)] = "X" : gameArray[Number(event.target.id)] = "O";
        checkRows("XXX");
        checkRows("OOO");
        checkColumns("XXX");
        checkColumns("OOO");
        checkDiagonals("XXX");
        checkDiagonals("OOO");
        gamer == 'X' ? gamer = 'O' : gamer = 'X';
        gamerFullName();
        move = move + 1;
        checkFinal();
        move > 1 ? greating.classList.add("hide") : null;
    };
};
function checkFinal() {
    if (winer || !move == 10) {congratuletion();}
    if (winer || move == 10) {gamer == 'X' ? gamer = 'O' : gamer = 'X'; congratuletion();}
    if (!winer && move !== 10) {tur.innerHTML = `<span class="animate__animated animate__fadeIn">${fullName}, ваш ход</span>`;}
    if (!winer && move == 10) {tur.innerHTML = `<div class="congratuletion animate__animated animate__flip">! НИЧЬЯ !</div>`;}
};
function gamerFullName() {gamer === 'X' ? fullName = 'Крестики' : fullName = 'Нолики'}
function checkRows(find) {
    for (i = 0; i < 9; i = i + 3) {
        gameArray.slice(i, i + 3).join('') == find ? fixWiner([i, i + 1, i + 2]) : winer = winer;
    };
};
function checkColumns(find) {
    for (i = 0; i < 3; i = i + 1) {
        (gameArray[i] + gameArray[i + 3] + gameArray[i + 6]) == find ? fixWiner([i, i + 3, i + 6]) : winer = winer;
    };
};
function checkDiagonals(find) {
    (gameArray[0] + gameArray[4] + gameArray[8]) == find ? fixWiner([0,4,8]) : winer = winer;
    (gameArray[2] + gameArray[4] + gameArray[6]) == find ? fixWiner([2,4,6]) : winer = winer;
};
function fixWiner(winArray) {
    winer = true;
    for (i of winArray) {
        document.querySelector(`.box${i}`).classList.add("winerColor");
    }
};
function congratuletion() {
    gamerFullName();
    tur.innerHTML = `<div class="congratuletion animate__animated animate__flip">!!! Выиграли ${fullName} !!!</div>`
    updateButton.classList.remove("hide");
    box.removeEventListener('click', checkWin);
};
