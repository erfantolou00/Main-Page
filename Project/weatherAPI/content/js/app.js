let inputElem = document.querySelector('input')
let cityElem = document.querySelector('.city')
let dateElem = document.querySelector('.date')
let tempElem = document.querySelector('.temp')
let weatherElem = document.querySelector('.weather')
let highLowElem = document.querySelector('.high-low')


function genaratorData(data) {

    let nameLocation = data.name + ', ' + data.sys.country
    let temp = (data.main.temp - 273.15).toFixed(0)
    let weather = data.weather[0].main
    let highTemp = (data.main.temp_max - 273.15).toFixed(0)
    let lowTemp = (data.main.temp_min - 273.15).toFixed(0)

    cityElem.innerHTML = nameLocation
    tempElem.innerHTML = temp + '°c'
    weatherElem.innerHTML = weather
    highLowElem.innerHTML = highTemp + ' / ' + lowTemp

}

inputElem.addEventListener('keypress', e => {

    if (e.which === 13) {
        let searchlocation = e.target.value
        getApi(searchlocation)
    }
})

function getApi(loc) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=c03a949aaa6817fcac3ee19b6d2fb09a`)
        .then(res => res.json())
        .then(data => genaratorData(data))
        .catch(() => alert(`Not Find ${loc}`))
}




let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];




let date = new Date()
let week = days[date.getDay()]
let month = months[date.getMonth()]
let year = date.getFullYear()
let day = date.getDate()

dateElem.innerHTML = `${week}, ${day} ${month}, ${year} `