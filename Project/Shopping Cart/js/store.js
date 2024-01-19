const allProduct = [
    { id: 1, proName: 'Album 1', proPrice: '80', proSrc: '../../pics/Album 1.png' , Count: 1 },
    { id: 2, proName: 'Album 2', proPrice: '50', proSrc: '../../pics/Album 2.png' , Count: 1 },
    { id: 3, proName: 'Album 3', proPrice: '20', proSrc: '../../pics/Album 3.png' , Count: 1 },
    { id: 4, proName: 'Album 4', proPrice: '40', proSrc: '../../pics/Album 4.png' , Count: 1 },
]

let totalPriceElem = document.querySelector('.cart-total-price')

allProduct.forEach(function (pro) {

    let divShopItem = document.createElement('div')
    divShopItem.classList.add('shop-item')

    let proTitle = document.createElement('span')
    proTitle.classList.add('shop-item-title')
    proTitle.innerHTML = pro.proName

    let proImg = document.createElement('img')
    proImg.classList.add('shop-item-image')
    proImg.setAttribute('src', pro.proSrc)


    let divShopdetails = document.createElement('div')
    divShopdetails.classList.add('shop-item-details')

    let proSpanPrice = document.createElement('span')
    proSpanPrice.classList.add('shop-item-price')
    proSpanPrice.innerHTML = '$' + pro.proPrice

    let btnAdd = document.createElement('button')
    btnAdd.classList = 'btn btn-primary shop-item-button'
    btnAdd.innerHTML = 'ADD TO CART'

    divShopdetails.append(proSpanPrice, btnAdd)
    divShopItem.append(proTitle, proImg, divShopdetails)

    let cart = document.querySelector('#shop-item')
    cart.appendChild(divShopItem)


    function btnAddHandler() {
        addToCart(pro)
    }

    btnAdd.addEventListener('click', btnAddHandler)
})


function addToCart(item) {

    let divCartRow = document.createElement('div')
    divCartRow.classList = 'cart-row'

    let divCartItem = document.createElement('div')
    divCartItem.classList = 'cart-item cart-column'

    let itemImg = document.createElement('img')
    itemImg.classList.add('cart-item-image')
    itemImg.setAttribute('src', item.proSrc)
    itemImg.setAttribute('width', '100')
    itemImg.setAttribute('height', '100')

    let itemTitle = document.createElement('span')
    itemTitle.classList.add('cart-item-title')
    itemTitle.innerHTML = item.proName

    divCartItem.append(itemImg, itemTitle)

    let itemPrice = document.createElement('span')
    itemPrice.classList = 'cart-price cart-column'
    itemPrice.innerHTML = '$' + item.proPrice

    let divCartQuantity = document.createElement('div')
    divCartQuantity.classList = 'cart-quantity cart-column'

    let inputCart = document.createElement('input')
    inputCart.classList.add('cart-quantity-input')
    inputCart.setAttribute('type', 'number')
    inputCart.setAttribute('value', item.Count)
    inputCart.addEventListener('change', function () {
        updateProductCount(item.id, inputCart.value)
    })

    let btnCart = document.createElement('button')
    btnCart.classList = 'btn btn-danger'
    btnCart.setAttribute('type', 'button')
    btnCart.innerHTML = 'REMOVE'

    divCartQuantity.append(inputCart, btnCart)

    divCartRow.append(divCartItem, itemPrice, divCartQuantity)

    document.querySelector('.cart-items').append(divCartRow)



   
    calcTotalPrice(item.proPrice , item.Count)
    removeBtnHandler(btnCart, divCartRow , item.proPrice)

}


function updateProductCount (itemId, newCount) {
    console.log("product id: " + itemId + ' new count: ' + newCount);

    allProduct.forEach(function (product) {
        if (product.id === itemId) {
            product.Count = newCount
        }
    })
    
}

let totalPriceValue = 0
function calcTotalPrice (price , count ) {

    totalPriceValue += +price * count

    totalPriceElem.innerHTML = '$' + totalPriceValue
  console.log(totalPriceValue , count);
}




function removeBtnHandler(btn, div) {
    btn.addEventListener('click', function () {
        div.remove()
    })
}