let buttonElem = document.querySelector('button')
let modalElem = document.querySelector('.modal-parent')
let sectionElem = document.querySelector('section')
let xButton = document.querySelector('.X')

function clickHandler() {
    modalElem.style.display = 'block'
    sectionElem.style.filter = 'blur(6px)'
}

function closeHandlerX() {
    modalElem.style.display = 'none'
    sectionElem.style.filter = 'blur(0px)'
}

function closeHandlerEsc() {
    modalElem.style.display = 'none'
    sectionElem.style.filter = 'blur(0px)'
}

document.body.addEventListener('keyup' , closeHandlerEsc)
xButton.addEventListener('click' , closeHandlerX)
buttonElem.addEventListener('click' , clickHandler)