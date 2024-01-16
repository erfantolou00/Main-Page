let switchBtn = document.querySelector('.switch')


let flag = false


function switchDarkOrLight() {
    if (flag) {
        console.log('hi');
        document.body.classList = 'light'
        localStorage.setItem('theme' , 'light')
        flag = false
    } else {
        document.body.classList = 'dark'
        console.log('theme');
        localStorage.setItem('theme' , 'dark')
   
        flag = true
    }
}

let theme = localStorage.getItem('theme')
document.body.classList = theme

switchBtn.addEventListener('click', switchDarkOrLight)





