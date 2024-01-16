let cityDatas = [
    { city: 'Tehran', Temp: '34°C', Description: 'Sunny', Humidity: '25%', WindSpeed: '2.2 km/h', icon: 'E:/web3/JS/Beginner/Main Page/pics/sunny.png' },
    { city: 'Shiraz', Temp: '31°C', Description: 'Cloudy', Humidity: '45%', WindSpeed: '4.2 km/h', icon: 'E:/web3/JS/Beginner/Main Page/pics/cloudy.png' },
    { city: 'Rasht', Temp: '29°C', Description: 'Rainy', Humidity: '75%', WindSpeed: '8.4 km/h', icon: 'E:/web3/JS/Beginner/Main Page/pics/rainy.png' },
    { city: 'Bandar Abbas', Temp: '44°C', Description: 'Sunny', Humidity: '95%', WindSpeed: '1.2 km/h', icon: 'E:/web3/JS/Beginner/Main Page/pics/sunny.png' }
]

let searchCity = document.querySelector('.search')

searchCity.addEventListener('change', function changingCity(e) {

    let city = e.target.value;
    console.log(city)

    let findItemCity = cityDatas.find(function (item) {
        return item.city === city;
    })

    console.log(findItemCity)


    document.querySelector('.city').innerHTML = 'Weather in ' + findItemCity.city
    document.querySelector('.temp').innerHTML = findItemCity.Temp
    document.querySelector('.humidity').innerHTML ='Humidity: ' + findItemCity.Humidity
    document.querySelector('.wind').innerHTML ='Wind speed: ' + findItemCity.WindSpeed
    document.querySelector('.description').innerHTML = findItemCity.Description
    document.getElementById('iconWeather').src = findItemCity.icon



})


