const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const burgerMenu = document.querySelector('.burger-menu');
const shoppingCartMenu = document.querySelector('.product-detail');
const shoppingCartImage = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const productDetailContainer = document.querySelector('.product-detail-product');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
shoppingCartImage.addEventListener('click', toggleShoppingCart);
productDetailCloseIcon.addEventListener('click', closeDetails);

function toggleDesktopMenu() {
    shoppingCartMenu.classList.add("inactive");
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
    shoppingCartMenu.classList.add("inactive");
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.toggle("inactive");
}
function toggleShoppingCart() {
    shoppingCartMenu.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productDetailContainer.classList.add('inactive');
}
function openDetails() {
    productDetailContainer.classList.remove('inactive');
    shoppingCartMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}
function closeDetails() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name : 'Bike',
    price : 20,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name : 'Cpu',
    price : 200,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name : 'Monitor',
    price : 145,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name : 'Pizza',
    price : 15,
    image : 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name : 'Pizza',
    price : 15,
    image : 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name : 'asdasd',
    price : 15,
    image : 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openDetails);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText ='$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);
    productInfoDiv.append(productPrice, productName);
    productInfo.append(productInfoFigure, productInfoDiv);
    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
}
