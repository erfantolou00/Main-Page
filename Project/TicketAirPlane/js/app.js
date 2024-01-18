let countrySelect = document.querySelector('.countrySelect')
let citySelect = document.querySelector('.citySelect')


let cityCountry = {
    Iran: ['Tehran', 'Tabriz', 'Kerman', 'Kish'],
    Canada: ['Torento', 'Vancover', 'Quebec'],
    Usa: ['Los angles', 'Texas', 'New yourk', 'Boston']
}

countrySelect.addEventListener('change', countrySelectFunction)

function countrySelectFunction(e) {

    let target = e.target.value

    citySelect.disabled = false;

    citySelect.innerHTML = "";

    cityCountry[target].forEach(city => {

        let option = document.createElement('option')
        option.value = city
        option.textContent = city
        citySelect.appendChild(option)

    });

}