let inputElem = document.querySelector('.form-control')
let btnSave = document.querySelector('#btn-save')
let btnDel = document.querySelector('#btn-delete')
let rowElem = document.querySelector('.row')
let colorSelect = document.querySelectorAll('.color-box')
var cardColor = document.querySelectorAll('.card')
let listedElem = document.querySelector('#listed')

function inputHandler(e) {
    if (e.key == 'Enter') {

        if (inputElem.value) {
            let cardDiv = document.createElement('div')
            cardDiv.className = "card shadow-sm rounded"

            let pDiv = document.createElement('p')
            pDiv.className = "card-text p-3"
            pDiv.innerHTML = inputElem.value

            let inputBg = inputElem.style.backgroundColor
            cardDiv.style.backgroundColor = inputBg

            pDiv.addEventListener('click' , removeCard)

            cardDiv.append(pDiv)
            listedElem.append(cardDiv)

            inputElem.value = ''
            inputElem.style.backgroundColor = '#fff'
        }else {
            alert('poresh kon !')
        }
    }
}

function btnSaveHandler() {

    if (inputElem.value) {
        let cardDiv = document.createElement('div')
        cardDiv.className = "card shadow-sm rounded"

        let pDiv = document.createElement('p')
        pDiv.className = "card-text p-3"
        pDiv.innerHTML = inputElem.value

        let inputBg = inputElem.style.backgroundColor
        cardDiv.style.backgroundColor = inputBg

        pDiv.addEventListener('click' , removeCard)

        cardDiv.append(pDiv)
        listedElem.append(cardDiv)

        inputElem.value = ''
        inputElem.style.backgroundColor = '#fff'
    } else {
        alert('poresh kon !')
    }
}

function btnDeleteHandler() {
    inputElem.value = ''
    inputElem.style.backgroundColor = '#fff'
}

function removeCard(event) {
    event.target.parentElement.remove()
}

let colorBox = colorSelect.forEach(function (item) {
    function colorHandler() {
        let colors = item.getAttribute('style')
        inputElem.style = colors
    }
    item.addEventListener('click', colorHandler)
})

btnDel.addEventListener('click', btnDeleteHandler)
btnSave.addEventListener('click', btnSaveHandler)
inputElem.addEventListener('keydown', inputHandler)