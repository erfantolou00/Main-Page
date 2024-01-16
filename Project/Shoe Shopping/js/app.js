const productsArray = [
    {id:1 , productName: 'Blue' , productPrice: '70$' , srcImg: '../../pics/1.png' },
    {id:2 , productName: 'Green' , productPrice: '75$' , srcImg: '../../pics/2.png' },
    {id:3 , productName: 'Yellow' , productPrice: '90$' , srcImg: '../../pics/3.png' },
    {id:4 , productName: 'Pink' , productPrice: '100$' , srcImg: '../../pics/4.png' }
]

const containerElem = document.querySelector('.container')

productsArray.forEach(function (product) {
    console.log(product.srcImg);

containerElem.insertAdjacentHTML('afterbegin' , ' <div class="product-card"><h1>'+ product.productName +'</h1><p>Lorem ipsum, or lipsum as it is sometimes known</p><div class="product-pic" style="background-image: url( '+ product.srcImg + ');"></div><div class="product-info"><div class="product-price">'+ product.productPrice +'</div><a href=product.html?id=' + product.id + ' class="product-button">See More</a></div></div>')

})