'use strict';
// TODO: change dot to comma in calculation
// TODO: check function length and outsource html template

let cartNames = [];
let cartPrices = [];
let cartAmounts = [];

// Runs automatically when page loads
function init() {
  renderDishes('mainDishes', 'main_content');
  renderDishes('dessertDishes', 'dessert_content');
  renderDishes('starterDishes', 'starter_content');
  renderShoppingCart();
}

// Generic renderer: takes category ("mains", "desserts", "starters") + containerId
function renderDishes(category, containerId) {
  let container = document.getElementById(containerId);
  container.innerHTML = '';

  for (let i = 0; i < menu[category].length; i++) {
    container.innerHTML += getHTMLForDishTemplate(category, i);
  }
}

// Add dish to basket
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

// Render shopping cart
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
    let totalPrice = (cartPrices[i] * cartAmounts[i]).toFixed(2);
    subtotal += cartPrices[i] * cartAmounts[i];
    cartDiv.innerHTML += getHTMLForShoppingCartFull(i, totalPrice);
  }

  let total = subtotal + deliveryFee;

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
      <button class="order_btn" onclick="placeOrder()">Jetzt bestellen</button>
  `;
}

// Bestellung abschließen
function placeOrder() {
  cartNames = [];
  cartPrices = [];
  cartAmounts = [];

  let cartDiv = document.getElementById('shopping_cart');
  cartDiv.innerHTML = `
    <div class="shopping_cart_message">
      Vielen Dank! Die Testbestellung war erfolgreich.
    </div>
  `;
}

// Menge ändern
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
