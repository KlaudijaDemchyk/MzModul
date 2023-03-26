import {validateForm} from 'kch-checkform/function-valid-form';

document.getElementById("button").addEventListener("click",checkForm);
   export function checkForm() {
        const nameInput = document.getElementById('name');
        const passwordInput = document.getElementById('password');
        if (validateForm(nameInput, passwordInput)) {
            return true;
        } else {
            return false;
        }
    }


