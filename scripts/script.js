// TODO: add and remove fncts

// TODO Basket fnct

let basket = [];

function init() {
  renderMainDishes();
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
