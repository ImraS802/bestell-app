'use strict';

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
  renderCartRegularOrMobile('shopping_cart');
  renderCartRegularOrMobile('mobile_shopping_cart');
}

function renderCartRegularOrMobile(containerId) {
  let cartDiv = document.getElementById(containerId);
  if (!cartDiv) return;

  cartDiv.innerHTML = '';

  if (cartNames.length === 0) {
    renderEmptyCart(cartDiv);
    return;
  }

  renderCartHeader(cartDiv);
  renderCartItems(cartDiv);
  renderCartSummary(cartDiv);
}

function renderEmptyCart(cartDiv) {
  cartDiv.innerHTML = getHTMLForShoppingCartEmpty();
}

function renderCartHeader(cartDiv) {
  cartDiv.innerHTML = '<h2 class="headline_shopping_cart">Warenkorb</h2>';
}

function renderCartItems(cartDiv) {
  for (let i = 0; i < cartNames.length; i++) {
    let totalPrice = (cartPrices[i] * cartAmounts[i])
      .toFixed(2)
      .replace('.', ',');
    cartDiv.innerHTML += getHTMLForShoppingCartFull(i, totalPrice);
  }
}

function renderCartSummary(cartDiv) {
  let subtotal = cartPrices.reduce(
    (sum, price, i) => sum + price * cartAmounts[i],
    0
  );
  let deliveryFee = 5.0;

  cartDiv.innerHTML += getHTMLForCartSummary(subtotal, deliveryFee);
}

function placeOrder() {
  cartNames = [];
  cartPrices = [];
  cartAmounts = [];

  renderShoppingCart();

  let cartDiv = document.getElementById('shopping_cart');
  cartDiv.innerHTML = getHTMLForConfirmingOrderMessage();

  const modal = document.getElementById('mobileCartModal');
  const mobileCart = document.getElementById('mobile_shopping_cart');
  if (modal.style.display === 'flex') {
    mobileCart.innerHTML = cartDiv.innerHTML;
  }
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

function toggleBurgerMenu() {
  document.querySelector('.navigation_links').classList.toggle('show');
}

function showMobileShoppingCart() {
  const modal = document.getElementById('mobileCartModal');
  modal.style.display = 'flex'; // show modal
}

function closeMobileCart() {
  document.getElementById('mobileCartModal').style.display = 'none';
}
