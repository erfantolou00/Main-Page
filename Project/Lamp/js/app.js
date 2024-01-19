let imgElem = document.getElementById('lamp')
let btnElem = document.getElementById('btn')

let bulbFlag = false

function onOff() {

    if (bulbFlag) {
        imgElem.setAttribute('src', "../../pics/bulboff.gif")
        btnElem.innerHTML = 'Turn On'
        bulbFlag = false
    } else {
        imgElem.setAttribute('src', "../../pics/bulbon.gif")
        btnElem.innerHTML = 'Turn Off'

        bulbFlag = true
    }

    console.log(bulbFlag)
}