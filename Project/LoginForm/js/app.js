let usernameInput = document.querySelector('.username')
let passwordInput = document.querySelector('.password')

let usernameMessage = document.querySelector('.username-validation')
let passwordMessage = document.querySelector('.password-validation')

function usernameValidation() {

    console.log(usernameInput.value)

    if (usernameInput.value.length < 12) {
        usernameMessage.style.display = 'block'
        usernameMessage.innerHTML = 'Must Contain 12 Character (Min)'
        usernameMessage.style.color = 'red'
    } else {
        usernameMessage.innerHTML = 'okeye'
        usernameMessage.style.color = 'green'
    }

}
function passwordValidation() {
    if (passwordInput.value.length < 8) {
        passwordMessage.style.display = 'block'
        passwordMessage.innerHTML = 'Must Contain 8 Character (Min)'
        passwordMessage.style.color = 'red'
    } else {
        passwordMessage.innerHTML = 'okeye'
        passwordMessage.style.color = 'green'
    }
}

function Welcome() {
    alert(`Welcome, ${usernameInput.value} !`);
}


let pElem = document.getElementById('change')

pElem.addEventListener('dblclick', change)

function change() {
    pElem.innerHTML = prompt('change to ?')
}