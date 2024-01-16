const counter = document.querySelector('.counter')
const inputElem = document.querySelector('input')

function keyhandler() {
    let maxLength = inputElem.maxLength
    let lengthInput = inputElem.value.length 
    counter.innerHTML = maxLength - lengthInput 
}

inputElem.addEventListener('keyup' , keyhandler)