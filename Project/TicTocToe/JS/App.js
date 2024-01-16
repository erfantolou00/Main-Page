const tdElem = document.querySelectorAll('.grid-item')
const btnElem = document.querySelector('.btn')
const statusWin = document.querySelector('.game--status')
//Convert X to O
let firstTurn = false
//handle event on click on array cells
tdElem.forEach(cell => {
    cell.addEventListener('click' , startGame)
    restartGame(cell)
})

let patternWin =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]    
]
//How to win
function handleWinner(e) {
    for (let i = 0; i < 9; i++) {             
        let a = tdElem[patternWin[i][0]].innerHTML == 'X' && tdElem[patternWin[i][1]].innerHTML == 'X' && tdElem[patternWin[i][2]].innerHTML 
        let b = tdElem[patternWin[i][0]].innerHTML == 'O' && tdElem[patternWin[i][1]].innerHTML == 'O' && tdElem[patternWin[i][2]].innerHTML 
            statusWinner(a , b) 
    }
}
// use X or O turn 
function startGame(e) {
    
    if (!firstTurn) {
        e.target.innerText = 'X'
        firstTurn = true
    } else {
        e.target.innerText = 'O'
        firstTurn = false
    }
    handleWinner(e.target.innerText)
}
//Change status for win or draw
function statusWinner(a , b) {
    if (a) {
        statusWin.innerHTML = 'X win'
        endGame()
    } else if (b) {
        statusWin.innerHTML = 'O win'
        endGame()
    }
}
function endGame() {
    tdElem.forEach(cell => cell.removeEventListener('click' , startGame))
}
function restartGame(cell) {
    btnElem.addEventListener('click' , function () {
        cell.innerHTML = ''
        location.reload()
    })
    
}