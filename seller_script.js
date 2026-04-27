function validateLogin(event) {
    event.preventDefault(); 
    let isValid = true;
    
    const usernameInput = document.getElementById('login-username').value;
    const passwordInput = document.getElementById('login-password').value;
    
    const usernameError = document.getElementById('login-username-error');
    const passwordError = document.getElementById('login-password-error');

    const loginRegex = /^[A-Za-z0-9]{6,}$/;

    if (!loginRegex.test(usernameInput)) {
        usernameError.innerHTML = "Username must be at least 6 alphanumeric characters.";
        isValid = false;
    } else {
        usernameError.innerHTML = "";
    }

    if (!loginRegex.test(passwordInput)) {
        passwordError.innerHTML = "Password must be at least 6 alphanumeric characters.";
        isValid = false;
    } else {
        passwordError.innerHTML = "";
    }

    if (isValid) {
        alert("Sign In Successful! Welcome back.");
        setTimeout(function() {
            window.location.href = "homepage.html"; 
        }, 1500);
    }
    return isValid;
}

function validateRegister(event) {
    event.preventDefault();
    let isValid = true;

    const nameInput = document.getElementById('reg-name').value;
    const addressInput = document.getElementById('reg-address').value;
    const phoneInput = document.getElementById('reg-phone').value;
    const emailInput = document.getElementById('reg-email').value;
    const usernameInput = document.getElementById('reg-username').value;
    const passwordInput = document.getElementById('reg-password').value;

    const nameError = document.getElementById('reg-name-error');
    const addressError = document.getElementById('reg-address-error');
    const phoneError = document.getElementById('reg-phone-error');
    const emailError = document.getElementById('reg-email-error');
    const usernameError = document.getElementById('reg-username-error');
    const passwordError = document.getElementById('reg-password-error');

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(nameInput)) {
        nameError.innerHTML = "Name should contain letters and spaces only.";
        isValid = false;
    } else {
        nameError.innerHTML = "";
    }

    const addressRegex = /^[A-Za-z0-9\s]+$/;
    if (!addressRegex.test(addressInput)) {
        addressError.innerHTML = "Address should contain letters, numbers and spaces only.";
        isValid = false;
    } else {
        addressError.innerHTML = "";
    }

    const phoneRegex = /^1[3-9]\d{9}$/;
    if (!phoneRegex.test(phoneInput)) {
        phoneError.innerHTML = "Phone number must be a valid China phone number.";
        isValid = false;
    } else {
        phoneError.innerHTML = "";
    }

    const emailRegex = /^[^@]+@[^@]+\.(cn|com)$/;
    if (!emailRegex.test(emailInput)) {
        emailError.innerHTML = "Email must contain exactly one @ and end with .cn or .com.";
        isValid = false;
    } else {
        emailError.innerHTML = "";
    }

    const authRegex = /^[A-Za-z0-9]{6,}$/;
    if (!authRegex.test(usernameInput)) {
        usernameError.innerHTML = "Username must be at least 6 alphanumeric characters.";
        isValid = false;
    } else {
        usernameError.innerHTML = "";
    }

    if (!authRegex.test(passwordInput)) {
        passwordError.innerHTML = "Password must be at least 6 alphanumeric characters.";
        isValid = false;
    } else {
        passwordError.innerHTML = "";
    }

    if (isValid) {
        alert("Account Created Successfully! Redirecting to login page...");
        setTimeout(function() {
            window.location.href = "seller_login.html";
        }, 1500);
    }
    
    return isValid;
}
