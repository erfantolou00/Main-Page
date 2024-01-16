const Key = document.getElementById('key')
const keyCode = document.getElementById('keyCode')
const keyLocation = document.getElementById('location')
const WhichKey = document.getElementById('which')
const CodeKey = document.getElementById('code')
const heading = document.getElementById('heading')
const ascii = document.getElementById('ascii')
const infos = document.getElementById('infos')
const starter = document.getElementById('starter')

function updateElementTextContent(element, value) {
  element.textContent = value
}

document.addEventListener('keydown', function (event) {
    event.preventDefault()
    
    heading.style.display = 'flex'
    ascii.style.display = 'flex'
    infos.style.display = 'flex'
    starter.style.display = 'none'
    

    updateElementTextContent(keyLocation, event.location)
    updateElementTextContent(Key, event.key)
    updateElementTextContent(WhichKey, event.which)
    updateElementTextContent(keyCode, event.keyCode)
    updateElementTextContent(CodeKey, event.code)

    
    console.log(event);

    

})


    