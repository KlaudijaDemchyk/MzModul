import {checkForm} from 'kch-checkform/function-valid-form';

const form = document.querySelector('form[name="myform"]');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (checkForm()) {
    form.submit();
  }
});

