let convertButton = document.querySelector('.convertButton')
let resetButton = document.querySelector('.resetButton')
let changeButton = document.querySelector('.changeButton')
let inputConvert = document.querySelector('#converter')
let celsiusElement = document.querySelector('.C');
let fahrenheitElement = document.querySelector('.F');
let result = document.querySelector('.result')


convertButton.addEventListener('click', function converter() {
    if (inputConvert.value == '') {
        result.textContent = 'Insert a number';
        result.style.color = 'red';
    } else if (isNaN(inputConvert.value)) {
        result.textContent = 'Wrong value';
        result.style.color = 'red';
    } else {
        if (fahrenheitElement.textContent === '°F') {
            let celsius = inputConvert.value;
            let fahrenheit = celsius * 1.8 + 32;
            result.textContent = fahrenheit.toFixed(2) + ' °F';
            result.style.color = 'rgb(255, 255, 102)';
        } else {
            let fahrenheit = inputConvert.value;
            let celsius = (fahrenheit - 32) / 1.8;
            result.textContent = celsius.toFixed(2) + ' °C';
            result.style.color = 'rgb(255, 255, 102)';
        }
    }
});

 
resetButton.addEventListener('click', function reseter() {
    inputConvert.value = ''
    result.textContent = ''
})

changeButton.addEventListener('click', function changer() {
    [celsiusElement.textContent, fahrenheitElement.textContent] =
        [fahrenheitElement.textContent, celsiusElement.textContent];

    if (fahrenheitElement.textContent === '°F') {
        inputConvert.placeholder = '°C'
        document.title = 'Erfan | Js | °C to °F'
    } else {
        inputConvert.placeholder = '°F'
        document.title = 'Erfan | Js | °F to °C'
    }
});