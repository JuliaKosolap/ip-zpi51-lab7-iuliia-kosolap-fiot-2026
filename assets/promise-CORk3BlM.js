/* empty css              */import"./modulepreload-polyfill-Dezn_h7o.js";document.querySelector(`#app`).innerHTML=`
<div class="page">

  <a href="/" class="back-btn">
    ← На головну
  </a>

  <h1>Генератор промісів</h1>

  <form class="form">

    <label>
      Delay (ms)

      <input
        type="number"
        name="delay"
        required
      />
    </label>

    <fieldset>
      <legend>State</legend>

      <label>
        <input
          type="radio"
          name="state"
          value="fulfilled"
          required
        />
        Fulfilled
      </label>

      <label>
        <input
          type="radio"
          name="state"
          value="rejected"
        />
        Rejected
      </label>
    </fieldset>

    <button type="submit">
      Create notification
    </button>

  </form>

</div>
`;var e=document.querySelector(`.form`);e.addEventListener(`submit`,t=>{t.preventDefault();let n=Number(e.elements.delay.value),r=e.elements.state.value;new Promise((e,t)=>{setTimeout(()=>{r===`fulfilled`?e(n):t(n)},n)}).then(e=>{alert(`✅ Fulfilled promise in ${e}ms`)}).catch(e=>{alert(`❌ Rejected promise in ${e}ms`)}),e.reset()});