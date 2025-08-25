function getHTMLForMainDishTemplate(indexMainDish) {
  return `
    <div class="food_card">
        <div class="name_plus_btn_container">
            <h3 class="name">${mainDishes[indexMainDish].name}</h3>
            <button class="add_to_basket_btn" onclick="addProductToBasket${indexMainDish}"><img class="plus_symbol" src="../assets/icons/plus.svg"
                    alt="Fuege Produkt hinzu Pluszeichen" /></button>
        </div>
        <div class="description">${mainDishes[indexMainDish].description}</div>
        <div class="price">${mainDishes[indexMainDish].price.toFixed(2)} €</div>
    </div>`;
}

function getHTMLForShoppingCartEmpty() {
  return `
    <div class="shopping_cart_empty">
        <img class="shopping_cart_img" src="../assets/icons/shopping-basket.png" alt="Warenkorb Icon" />
        <p class="fill_empty_basket_headline">Fülle deinen Warenkorb</p>
        <p>Dein Warenkorb ist leer</p>
    </div>
`;
}

function getHTMLForShoppingCartFull(indexMainDish) {
  return `
    <div class="shopping_cart_full">
      <h2 class="headline_shopping_cart">Warenkorb</h2>
        <div>${mainDishes[indexMainDish].name}</div>
        <div>
            <button class="delete_btn"><img class="plus_symbol" src="../assets/icons/minus.svg"
                    alt="Entfernen Button" /></button>
            <span class="display_amount" id="amount_product"></span>
            <button class="add_btn"><img class="plus_symbol" src="../assets/icons/plus.svg"
                    alt="Hinzufuegen Button" /></button>
        </div>
    </div>
    <span class="display_price" id="price_product"></span>
    <img class="plus_symbol" src="../assets/icons/trash-can.svg" alt="Loeschen Symbol" />
    </div>`;
}
