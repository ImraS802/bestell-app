function getHTMLForDishTemplate(category, index) {
  let dish = menu[category][index];
  return `
    <div class="food_card">
        <div class="name_plus_btn_container">
            <h3 class="name">${dish.name}</h3>
            <button class="add_to_basket_btn" onclick="addToBasket('${category}', ${index})">
                <img class="plus_symbol" src="../assets/icons/plus.svg" alt="Add Button" />
            </button>
        </div>
        <div class="description">${dish.description}</div>
        <div class="price">${dish.price.toFixed(2)} €</div>
    </div>`;
}

function getHTMLForShoppingCartEmpty() {
  return `
    <div class="shopping_cart_empty">
        <img class="shopping_cart_img" src="../assets/icons/shopping-basket.png" alt="Warenkorb Icon" />
        <p class="fill_empty_basket_headline">Fülle deinen Warenkorb</p>
        <p>Dein Warenkorb ist leer</p>
    </div>`;
}

function getHTMLForShoppingCartFull(i, totalPrice) {
  return `
  <div class="shopping_cart_full_container">
    <div class="shopping_cart_full">
        <div class="names_shopping_cart">${cartNames[i]}</div>
        <div class="amount_price">
            <button class="delete_btn" onclick="decreaseAmount(${i})"><img class="plus_symbol"
                    src="../assets/icons/minus.svg" alt="Entfernen Button" /></button>
            <span class="display_amount">${cartAmounts[i]}</span>
            <button class="add_btn" onclick="increaseAmount(${i})"><img class="plus_symbol"
                    src="../assets/icons/plus.svg" alt="Hinzufuegen Button" /></button>
            <span class="display_price">${totalPrice} €</span>
            <button onclick="removeItem(${i})">
                <img class="plus_symbol" src="../assets/icons/trash-can.svg" alt="Loeschen Symbol" />
            </button>
        </div>
    </div>
  </div>`;
}

function getHTMLForCartSummary(subtotal, deliveryFee) {
  const total = subtotal + deliveryFee;
  return `
    <div class="cart_summary">
        <div class="cart_subtotal">
          <span>Zwischensumme:</span>
          <span>${subtotal.toFixed(2).replace('.', ',')} €</span>
        </div>
        <div class="cart_delivery">
          <span>Lieferkosten:</span>
          <span>${deliveryFee.toFixed(2).replace('.', ',')} €</span>
        </div>
      </div>
      <div class="cart_total">
        <span>Gesamt:</span>
        <span>${total.toFixed(2).replace('.', ',')} €</span>
      </div>
      <button class="order_btn" onclick="placeOrder()">Jetzt bestellen</button>
</div>
  `;
}

function getHTMLForConfirmingOrderMessage() {
  return `
    <div class="shopping_cart_message">
      Vielen Dank! Die Testbestellung war erfolgreich.
    </div>
  `;
}
