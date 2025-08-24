function getHTMLForMainDishTemplate(indexMainDish) {
  return `
    <div class="food_card">
    <div class="name_plus_btn_container">
    <h3 class="name">${mainDishes[indexMainDish].name}</h3>
    <button class="add_to_cart_btn"><img class="plus_symbol" src="../assets/icons/plus.svg" alt="Bookstore logo" /></button>
    </div>
    <div class="description">${mainDishes[indexMainDish].description}</div>
    <div class="price">${mainDishes[indexMainDish].price.toFixed(2)} €</div>
    </div>`;
}

function getHTMLForShoppingCart() {
  return `
      <h2>Warenkorb</h2>
    <div class="shopping_cart_empty">
    <img class="plus_symbol" src="../assets/icons/trash-can.png" alt="Bookstore logo" />
    <h2>Fülle deinen Warenkorb</h2>
    <p>Dein Warenkorb ist leer</p>
     <div class="shopping_cart_full">
     </div>
    </div>`;
}
