// TODO: add and remove fncts

let cartMenus = [];
let cartPrices = [];
let cartAmounts = [];

function init() {
  renderMainDishes();
  renderShoppingCart();
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

function getProductFromPlus() {
  let value = document.getElementById('addToBasket');
  return value;
}

function addProductToBasket(indexMainDish) {
  // indexMainDish comes from template.js
  let dish = mainDishes[indexMainDish];
  let index = cartMenus.indexOf(dish.name);

  if (index === -1) {
    cartMenus.push(dish.name);
    cartPrices.push(dish.price);
    cartAmounts.push(1);
  } else {
    cartAmounts[index] += 1;
  }
  renderShoppingCart();
}

// function getProductIndex(dish) {
//   let index = cartMenus.indexOf(dish.name);
//   return index;
// }

function renderShoppingCart() {
  let cartDiv = document.getElementById('shopping_cart');
  cartDiv.innerHTML = '';

  if (cartMenus.length === 0) {
    cartDiv.innerHTML = getHTMLForShoppingCartEmpty();
    return;
  }

  cartDiv.innerHTML = '<h2 class="headline_shopping_cart">Warenkorb</h2>';

  let subtotal = 0;
  let deliveryFee = 5.0;
  let total = subtotal + deliveryFee;

  for (let i = 0; i < cartMenus.length; i++) {
    let totalPrice = (cartPrices[i] * cartAmounts[i]).toFixed(2);
    subtotal += cartPrices[i] * cartAmounts[i];
    cartDiv.innerHTML += getHTMLForShoppingCartFull(i, totalPrice);
  }

  cartDiv.innerHTML += `
  <div class="cart_summary">
      <div class="cart_subtotal">
        <span>Zwischensumme:</span>
        <span>${subtotal.toFixed(2)} €</span>
      </div>
      <div class="cart_delivery">
        <span>Lieferkosten:</span>
        <span>${deliveryFee.toFixed(2)} €</span>
      </div>
    </div>
    <div class="cart_total">
      <span>Gesamt:</span>
      <span>${total.toFixed(2)} €</span>
    </div>
  `;
}

function increaseAmount(i) {
  cartAmounts[i]++;
  renderShoppingCart();
}

function decreaseAmount(i) {
  cartAmounts[i]--;
  if (cartAmounts[i] <= 0) {
    removeItem(i);
  } else {
    renderShoppingCart();
  }
}

function removeItem(i) {
  cartMenus.splice(i, 1);
  cartPrices.splice(i, 1);
  cartAmounts.splice(i, 1);
  renderShoppingCart();
}
