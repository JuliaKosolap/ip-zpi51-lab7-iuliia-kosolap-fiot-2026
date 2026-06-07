import './style.css';
document.querySelector('#app').innerHTML = `
<div class="page">

 <a
  href="/ip-zpi51-lab7-iuliia-kosolap-fiot-2026/"
  class="back-btn"
>
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
`;

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);

  const state = form.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      alert(`✅ Fulfilled promise in ${delay}ms`);
    })
    .catch(delay => {
      alert(`❌ Rejected promise in ${delay}ms`);
    });

  form.reset();
});