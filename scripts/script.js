'use strict';
// TODO: check function length and outsource html template

let cartNames = [];
let cartPrices = [];
let cartAmounts = [];

function init() {
  renderDishes('mainDishes', 'main_content');
  renderDishes('dessertDishes', 'dessert_content');
  renderDishes('starterDishes', 'starter_content');
  renderShoppingCart();
}

// Generic render function: takes category ("mains", "desserts", "starters") + containerId
function renderDishes(category, containerId) {
  let container = document.getElementById(containerId);
  container.innerHTML = '';

  for (let i = 0; i < menu[category].length; i++) {
    container.innerHTML += getHTMLForDishTemplate(category, i);
  }
}

function addToBasket(category, index) {
  let dish = menu[category][index];
  let cartIndex = cartNames.indexOf(dish.name);

  if (cartIndex === -1) {
    cartNames.push(dish.name);
    cartPrices.push(dish.price);
    cartAmounts.push(1);
  } else {
    cartAmounts[cartIndex]++;
  }
  renderShoppingCart();
}

function renderShoppingCart() {
  let cartDiv = document.getElementById('shopping_cart');
  cartDiv.innerHTML = '';

  if (cartNames.length === 0) {
    cartDiv.innerHTML = getHTMLForShoppingCartEmpty();
    return;
  }

  cartDiv.innerHTML = '<h2 class="headline_shopping_cart">Warenkorb</h2>';

  let subtotal = 0;
  let deliveryFee = 5.0;

  for (let i = 0; i < cartNames.length; i++) {
    let totalPrice = (cartPrices[i] * cartAmounts[i])
      .toFixed(2)
      .replace('.', ',');
    subtotal += cartPrices[i] * cartAmounts[i];
    cartDiv.innerHTML += getHTMLForShoppingCartFull(i, totalPrice);
  }

  cartDiv.innerHTML += getHTMLForCartSummary(subtotal, deliveryFee);
}

function placeOrder() {
  cartNames = [];
  cartPrices = [];
  cartAmounts = [];

  let cartDiv = document.getElementById('shopping_cart');
  cartDiv.innerHTML = getHTMLForConfirmingOrderMessage();
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
  cartNames.splice(i, 1);
  cartPrices.splice(i, 1);
  cartAmounts.splice(i, 1);
  renderShoppingCart();
}
