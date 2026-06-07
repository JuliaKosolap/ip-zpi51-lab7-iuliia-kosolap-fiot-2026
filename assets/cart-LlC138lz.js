/* empty css              */import"./modulepreload-polyfill-Dezn_h7o.js";var e=[{id:1,name:`Product 1`,price:100},{id:2,name:`Product 2`,price:150},{id:3,name:`Product 3`,price:200},{id:4,name:`Product 4`,price:250},{id:5,name:`Product 5`,price:300},{id:6,name:`Product 6`,price:350},{id:7,name:`Product 7`,price:400},{id:8,name:`Product 8`,price:450},{id:9,name:`Product 9`,price:500},{id:10,name:`Product 10`,price:550},{id:11,name:`Product 11`,price:600},{id:12,name:`Product 12`,price:650}],t=6;document.querySelector(`#app`).innerHTML=`
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
`;var n=document.querySelector(`.products`),r=document.querySelector(`.pagination`),i=document.querySelector(`.cart-list`),a=1,o=JSON.parse(localStorage.getItem(`cart`))||[];s(),l();function s(){let r=(a-1)*t,i=r+t;n.innerHTML=e.slice(r,i).map(e=>`
      <div class="product-card">
        <h3>${e.name}</h3>

        <p>Ціна: ${e.price} грн</p>

        <button
          data-id="${e.id}"
        >
          Додати в кошик
        </button>
      </div>
    `).join(``),c()}function c(){let n=Math.ceil(e.length/t);r.innerHTML=``;for(let e=1;e<=n;e++)r.innerHTML+=`
      <button
        class="page-btn"
        data-page="${e}"
      >
        ${e}
      </button>
    `}function l(){if(o.length===0){i.innerHTML=`<li>Кошик порожній</li>`;return}i.innerHTML=o.map(e=>`
      <li>
        ${e.name}
        (${e.price} грн)
      </li>
    `).join(``)}n.addEventListener(`click`,t=>{if(t.target.tagName!==`BUTTON`)return;let n=Number(t.target.dataset.id),r=e.find(e=>e.id===n);o.push(r),localStorage.setItem(`cart`,JSON.stringify(o)),l()}),r.addEventListener(`click`,e=>{e.target.classList.contains(`page-btn`)&&(a=Number(e.target.dataset.page),s())});