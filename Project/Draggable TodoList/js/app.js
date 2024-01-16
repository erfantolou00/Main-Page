const addBtn = document.querySelector('#add_btn')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.close-modal')
const modalInput = document.querySelector('#todo_input')
const modalSubmit = document.querySelector('#todo_submit')
const noStatus = document.querySelector('#no_status')
const closeTodo = document.querySelector('.close')
const todosBox = document.querySelectorAll('.todo')

addBtn.addEventListener('click', function openModal() {
    modal.style.top = '15%'
    modal.style.display = 'block'
})

closeModal.addEventListener('click', function closeX() {
    modal.style.display = 'none'
})

function submitHandler() {
    if (modalInput.value) {
        let divTodo = document.createElement('div')
        divTodo.className = "todo"
        divTodo.setAttribute('id', 'todo')
        divTodo.setAttribute('draggable', 'true')
        divTodo.innerHTML = modalInput.value

        let spanTodo = document.createElement('span')
        spanTodo.className = 'close'
        spanTodo.innerHTML = '&times;'

        divTodo.appendChild(spanTodo)
        noStatus.append(divTodo)

        spanTodo.addEventListener('click', removeTodo)
        divTodo.addEventListener('dragstart', dragstart)

        modalInput.value = ''
        modal.style.display = 'none'
    } else {
        alert('poresh kon')
    }
}

modalSubmit.addEventListener('click', submitHandler)

function removeTodo(event) {
    event.target.parentElement.remove()
}
function dragstart(ev) {

    ev.dataTransfer.setData('text', ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();

    var data = ev.dataTransfer.getData("text");
    console.log(ev.target);
    ev.target.appendChild(document.getElementById(data))
}