const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("password-confirm");
const passwordMatch = document.getElementById("match-passwords");
const submitButton = document.querySelector("button[type='submit']");


passwordInput.addEventListener('input', (event) => {
    if(event.target.value !== '') {
        if(passwordInput.value === passwordConfirmInput.value) {
            passwordMatch.style.visibility = "hidden";
            passwordInput.setCustomValidity("");
            passwordConfirmInput.setCustomValidity("");
        } else {
            passwordMatch.style.visibility = "visible";
            passwordInput.setCustomValidity("Invalid");
            passwordConfirmInput.setCustomValidity("Invalid");
        }
    } else if(event.target.value === '' && passwordConfirmInput.value !== '') {
        passwordMatch.style.visibility = "visible";
        passwordInput.setCustomValidity("Invalid");
        passwordConfirmInput.setCustomValidity("Invalid");
    } else if(event.target.value === '' && passwordConfirmInput.value === '') {
        passwordMatch.style.visibility = "hidden";
        passwordInput.setCustomValidity("");
        passwordConfirmInput.setCustomValidity("");
    }
});

passwordConfirmInput.addEventListener('input', (event) => {
    if(event.target.value !== '') {
        if(passwordConfirmInput.value === passwordInput.value) {
            passwordMatch.style.visibility = "hidden";
            passwordInput.setCustomValidity("");
            passwordConfirmInput.setCustomValidity("");
        } else {
            passwordMatch.style.visibility = "visible";
            passwordInput.setCustomValidity("Invalid");
            passwordConfirmInput.setCustomValidity("Invalid");
        }
    } else if(event.target.value === '' && passwordInput.value !== '') {
        passwordMatch.style.visibility = "visible";
        passwordInput.setCustomValidity("Invalid");
        passwordConfirmInput.setCustomValidity("Invalid");
    } else if(event.target.value === '' && passwordInput.value === '') {
        passwordMatch.style.visibility = "hidden";
        passwordInput.setCustomValidity("");
        passwordConfirmInput.setCustomValidity("");
    }
});

submitButton.addEventListener('click', (event) => {
    if(passwordInput.value !== '' && passwordConfirmInput.value !== '') {
        if(passwordInput.value === passwordConfirmInput.value) {
            passwordMatch.style.visibility = "hidden";
            passwordInput.setCustomValidity("");
            passwordConfirmInput.setCustomValidity("");
        } else {
            passwordMatch.style.visibility = "visible";
            passwordInput.setCustomValidity("Invalid");
            passwordConfirmInput.setCustomValidity("Invalid");
            event.preventDefault();
        }
    }
})