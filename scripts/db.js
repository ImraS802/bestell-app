let mainDishes = [
  {
    'name': 'Sommer Rollen',
    'price': 6.5,
    'description':
      'Sommerrolle mit Reisnudeln, geriebenen Möhren, Gurke, Mango, Kräutern, Hoisinsauce und Zutat nach Wahl',
  },
  {
    'name': 'Banh Mi Xiu Mai',
    'price': 11.99,
    'description':
      'vietnamesisches Baguette mit Garnelenfleischbällchen, Tomaten, Lauchzwiebeln und Koriander',
  },
  {
    'name': 'Knusprige Wantan',
    'price': 6.5,
    'description': 'Garnelen, Kartoffeln, Gemüse und hausgemachter Sauce',
  },
  {
    'name': 'Pho Tron Hanoi',
    'price': 13.5,
    'description':
      'Reisbandnudeln mit hausgemachter Sauce, frischen Kräutern, Zutat nach Wahl und verschiedenen Toppings',
  },
];

let basket = [];

function init() {
  rendermainDishes();
}

function rendermainDishes() {
  let mainDishRef = document.getElementById('content');
  mainDishRef.innerHTML = '';

  for (let i = 0; i < mainDishes.length; i++) {
    renderSingleMainDish(mainDishRef, i);
  }
}

function renderSingleMainDish(mainDishRef, index) {
  mainDishRef.innerHTML += getHTMLForMainDishTemplate(index);
}
