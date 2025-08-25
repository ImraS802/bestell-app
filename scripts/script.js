// TODO: add and remove fncts

let basket = [];

function init() {
  renderMainDishes();
  renderBasket();
}

function renderMainDishes() {
  let mainDishRef = document.getElementById('content');
  mainDishRef.innerHTML = '';

  for (let i = 0; i < mainDishes.length; i++) {
    renderSingleMainDish(mainDishRef, i);
  }
}

function renderSingleMainDish(mainDishRef, index) {
  mainDishRef.innerHTML += getHTMLForMainDishTemplate(index);
}

function addProductToBasket(indexMainDish) {
  basket.push(indexMainDish);
  renderBasket();
}

function renderBasket() {
  let shoppingCartContentRef = document.getElementById('shopping_cart');
  shoppingCartContentRef.innerHTML = '';

  if (basket.length === 0) {
    shoppingCartContentRef.innerHTML += getHTMLForShoppingCartEmpty();
  } else {
    shoppingCartContentRef.innerHTML += `<div class="shopping_cart_full"></div>`;
    let fullCartRef = shoppingCartContentRef.querySelector(
      '.shopping_cart_full'
    );
    // loop through basket
    for (let i = 0; i < basket.length; i++) {
      let dishIndex = basket[i];
      fullCartRef.innerHTML += getHTMLForShoppingCartFull(dishIndex);
    }
  }
}
