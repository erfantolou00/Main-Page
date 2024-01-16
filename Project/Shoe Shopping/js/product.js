const productsArray = [
    { id: 1, productName: 'LightBlue', productPrice: '70$', srcImg: '../../pics/1.png' },
    { id: 2, productName: 'LightGreen', productPrice: '75$', srcImg: '../../pics/2.png' },
    { id: 3, productName: 'Yellow', productPrice: '90$', srcImg: '../../pics/3.png' },
    { id: 4, productName: 'Pink', productPrice: '100$', srcImg: '../../pics/4.png' }
]



const btnElem = document.querySelector('button')
const detailElem = document.querySelector('.details')

btnElem.addEventListener('click', function () {
    history.back()
})

let idParam = new URLSearchParams(location.search).get('id')

productsArray.forEach(function (pro) {

    if (pro.id == idParam) {
        detailElem.insertAdjacentHTML('afterbegin', '<div class="desc"><h1>' + pro.productName + '</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at  nobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias?</p><div class="price" style="background-color:' + pro.productName + ' ;">' + pro.productPrice + '</div></div><div class="image"><img src="' + pro.srcImg + '" /></div>')
    }
    
})


