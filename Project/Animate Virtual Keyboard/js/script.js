let titleElem = document.querySelector('.title')

document.addEventListener('keyup', function (ev) {
    ev.preventDefault()
    makeTitle(ev)
    
    let keyPressed = ev.key.toUpperCase()
    let keyElem = document.getElementById(keyPressed)

    keyElem.classList.add("hit")
    keyElem.addEventListener('animationend', () => {
        keyElem.classList.remove("hit")
    })
})

function makeTitle(ev) {
  if (ev.code === 'Backspace') {
   titleElem.innerHTML =  titleElem.innerHTML.slice(0 , -1)
   return
  }
  titleElem.innerHTML += ev.key
}