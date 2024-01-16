let $ = document

let categoryElem = $.getElementById('category')
let resultElem = $.getElementById('result')
let weightInput = $.getElementById('weight')
let heightInput = $.getElementById('height')

function bmiCalculator() {

    let weight = weightInput.value
    let height = heightInput.value

    $.getElementById('weight-val').innerHTML = weight + ' kg'
    $.getElementById('height-val').innerHTML = height + ' cm'

    let bmiValue = weight / Math.pow(height / 100, 2)
    resultElem.innerHTML = bmiValue.toFixed(1)

    if (bmiValue < 18.5) {
        categoryElem.innerHTML = 'Underweight'
        resultElem.style.color = 'red'
    } else if  (bmiValue >= 18.5 && bmiValue < 25) {
        categoryElem.innerHTML = 'Normal'
        resultElem.style.color = 'green'
    }else if (bmiValue > 25 && bmiValue < 30 ) {
        categoryElem.innerHTML = 'Overweight'
        resultElem.style.color = 'yellow'
    }else if (bmiValue > 30) {
        categoryElem.innerHTML = 'Obesity'
        resultElem.style.color = 'red'
    }


}





weightInput.addEventListener('input', bmiCalculator)
heightInput.addEventListener('input', bmiCalculator)

