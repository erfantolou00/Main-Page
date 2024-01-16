let rangeInput = document.getElementById('range')
let containerElem = document.querySelector('.container')


function changeRangeHandler(){
    console.log(rangeInput.value);
    containerElem.setAttribute('style' , 'filter:brightness('+ rangeInput.value +  '%)')
    
}
rangeInput.addEventListener('change' , changeRangeHandler )