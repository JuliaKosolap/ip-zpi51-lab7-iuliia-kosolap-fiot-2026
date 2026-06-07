/* empty css              */import"./modulepreload-polyfill-Dezn_h7o.js";document.querySelector(`#app`).innerHTML=`
<div class="page">

  <a href="/" class="back-btn">
    ← На головну
  </a>

  <div class="form-container">

    <h1>Форма зворотного зв'язку</h1>

    <form class="feedback-form">

      <label>
        Email
        <input
          type="email"
          name="email"
          placeholder="Введіть email"
        />
      </label>

      <label>
        Message
        <textarea
          name="message"
          rows="6"
          placeholder="Введіть повідомлення"
        ></textarea>
      </label>

      <button type="submit">
        Submit
      </button>

    </form>

  </div>

</div>
`;var e=`feedback-form-state`,t=document.querySelector(`.feedback-form`),n={email:``,message:``},r=localStorage.getItem(e);r&&(n=JSON.parse(r),t.elements.email.value=n.email||``,t.elements.message.value=n.message||``),t.addEventListener(`input`,t=>{n[t.target.name]=t.target.value.trim(),localStorage.setItem(e,JSON.stringify(n))}),t.addEventListener(`submit`,r=>{if(r.preventDefault(),!n.email||!n.message){alert(`Fill please all fields`);return}console.log(n),localStorage.removeItem(e),n={email:``,message:``},t.reset()});