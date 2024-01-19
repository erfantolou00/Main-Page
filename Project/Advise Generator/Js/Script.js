const adviseText = document.querySelector('.adviseText')
const adviseNum = document.querySelector('.adviseNum')

window.addEventListener('load', function () {



    function getApi() {
        fetch('https://api.adviceslip.com/advice')
            .then(res => res.json())
            .then(data => genaratorData(data.slip))
    }

    getApi()

    function genaratorData(data) {
        console.log(data);
        adviseText.innerHTML = data.advice
        adviseNum.innerHTML = `ADVISE #${data.id}`
    }

})