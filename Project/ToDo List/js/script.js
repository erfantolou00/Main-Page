const inputElem = document.querySelector('input');
const iElem = document.querySelectorAll('i');
const newTodo = document.querySelector('.todos')
const addForm = document.querySelector('.add')

for (let index = 0; index < iElem.length; index++) {
  
  iElem[index].addEventListener('click' , function (e) {
    
    e.target.parentElement.remove()
  })
  
}

function addTodo(newTodovalue) {

  let newLi = document.createElement('li')
  newLi.className =  "list-group-item d-flex justify-content-between align-items-center"
  // newLi.append(newTodo)

  let newSpan = document.createElement('span')
  newSpan.innerHTML = newTodovalue
  
  let newI = document.createElement('i')
  newI.className = "fa fa-trash-o delete"

  newLi.append(newSpan , newI )
  newTodo.append(newLi)
}

addForm.addEventListener('submit', function (e) {
  e.preventDefault()
})

inputElem.addEventListener('keydown', function (e) {

  let newTodovalue = e.target.value.trim()

  if (e.keyCode === 13) {

    if (newTodovalue) {
      inputElem.value = ''
      addTodo(newTodovalue)

    }
  }
});



