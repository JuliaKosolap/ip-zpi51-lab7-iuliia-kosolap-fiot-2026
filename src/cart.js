import './style.css';
const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 200 },
  { id: 4, name: 'Product 4', price: 250 },
  { id: 5, name: 'Product 5', price: 300 },
  { id: 6, name: 'Product 6', price: 350 },
  { id: 7, name: 'Product 7', price: 400 },
  { id: 8, name: 'Product 8', price: 450 },
  { id: 9, name: 'Product 9', price: 500 },
  { id: 10, name: 'Product 10', price: 550 },
  { id: 11, name: 'Product 11', price: 600 },
  { id: 12, name: 'Product 12', price: 650 },
];

const ITEMS_PER_PAGE = 6;

document.querySelector('#app').innerHTML = `
<div class="page">
<a
  href="/ip-zpi51-lab7-iuliia-kosolap-fiot-2026/"
  class="back-btn"
>
  ← На головну
</a>
<h1>Кошик товарів</h1>

<div class="products"></div>

<div class="pagination"></div>

<h2>Кошик</h2>

<ul class="cart-list"></ul>
</div>
`;


const productsContainer =
  document.querySelector('.products');

const pagination =
  document.querySelector('.pagination');

const cartList =
  document.querySelector('.cart-list');

let currentPage = 1;

let cart =
  JSON.parse(localStorage.getItem('cart')) || [];

renderProducts();
renderCart();

function renderProducts() {
  const start =
    (currentPage - 1) * ITEMS_PER_PAGE;

  const end =
    start + ITEMS_PER_PAGE;

  const currentProducts =
    products.slice(start, end);

  productsContainer.innerHTML =
    currentProducts
      .map(
        product => `
      <div class="product-card">
        <h3>${product.name}</h3>

        <p>Ціна: ${product.price} грн</p>

        <button
          data-id="${product.id}"
        >
          Додати в кошик
        </button>
      </div>
    `
      )
      .join('');

  renderPagination();
}

function renderPagination() {
  const pages =
    Math.ceil(
      products.length /
        ITEMS_PER_PAGE
    );

  pagination.innerHTML = '';

  for (let i = 1; i <= pages; i++) {
    pagination.innerHTML += `
      <button
        class="page-btn"
        data-page="${i}"
      >
        ${i}
      </button>
    `;
  }
}

function renderCart() {
  if (cart.length === 0) {
    cartList.innerHTML =
      '<li>Кошик порожній</li>';
    return;
  }

  cartList.innerHTML = cart
    .map(
      item => `
      <li>
        ${item.name}
        (${item.price} грн)
      </li>
    `
    )
    .join('');
}

productsContainer.addEventListener(
  'click',
  event => {
    if (
      event.target.tagName !==
      'BUTTON'
    ) {
      return;
    }

    const id =
      Number(
        event.target.dataset.id
      );

    const product =
      products.find(
        item => item.id === id
      );

    cart.push(product);

    localStorage.setItem(
      'cart',
      JSON.stringify(cart)
    );

    renderCart();
  }
);

pagination.addEventListener(
  'click',
  event => {
    if (
      !event.target.classList.contains(
        'page-btn'
      )
    ) {
      return;
    }

    currentPage = Number(
      event.target.dataset.page
    );

    renderProducts();
  }
);