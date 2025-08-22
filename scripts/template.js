function getHTMLForMainDishTemplate(indexMainDish) {
  return `
    <div class="food_card">
    <h3 class="name">${mainDishes[indexMainDish].name}</h3>
    <div class="description">${mainDishes[indexMainDish].description}</div>
    <div class="price">${mainDishes[indexMainDish].price.toFixed(2)} €</div>
    </div>`;
}
