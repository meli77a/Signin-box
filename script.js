function validateForm() {
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var emailError = document.getElementById("email-error");
    var passwordError = document.getElementById("password-error");

    var valid = true;

    if (!isValidEmail(emailInput.value)) {
        emailError.textContent = "Invalid email address";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Password cannot be empty";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    return valid;
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
