import {validateForm} from 'kch-checkform/Valid-Check-Form';

document.getElementById("button").addEventListener("click",checkForm());
    function checkForm() {
        const nameInput = document.getElementById('name');
        const passwordInput = document.getElementById('password');
        if (validateForm(nameInput, passwordInput)) {
            return true;
        } else {
            return false;
        }
    }


