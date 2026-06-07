import './style.css';
document.querySelector('#app').innerHTML = `
<div class="page">

<a
  href="/ip-zpi51-lab7-iuliia-kosolap-fiot-2026/"
  class="back-btn"
>
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
`;

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  formData = JSON.parse(savedData);

  form.elements.email.value = formData.email || '';
  form.elements.message.value = formData.message || '';
}

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(formData)
  );
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);

  formData = {
    email: '',
    message: '',
  };

  form.reset();
});