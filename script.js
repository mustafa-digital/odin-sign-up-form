const MIN_PASS_LENGTH = 6;

function toggleMsgVisibility() {
    return "visible";
}

function checkPassword() {

    if (password.value.length < MIN_PASS_LENGTH && (password.value.length > 0)) {
        
        passMessage.textContent = "* Password must be atleast 6 characters";
        passMessage.style.visibility = "visible";
    }

    else if (password.value !== passConfirm.value)  {

        passConfirm.setCustomValidity("Passwords do not match.");
        
        password.setCustomValidity("Passwords do not match.");


        passMessage.textContent = "* Passwords do not match";
        passMessage.style.visibility = "visible";
    }

    else {
        passConfirm.setCustomValidity("");
        password.setCustomValidity("");
        passMessage.style.visibility = "hidden";
    }
    
}

const passMessage =  document.querySelector(".password-message-text");
const password = document.getElementById("password");
const passConfirm = document.getElementById("pass-confirm");

password.addEventListener("change", checkPassword);
passConfirm.addEventListener("change", checkPassword);