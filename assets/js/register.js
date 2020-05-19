function register () {
    if (!checkUsername() || !checkEmail() || !checkPasswords())
        return;

    // efetuar registo (adicionar às vars)
    console.log("Efetuar registo");
    let username = document.getElementById("nu_username").value.toLowerCase();
    let email = document.getElementById("nu_email").value.toLowerCase();
    let password = document.getElementById("nu_password").value;
}

function checkPasswords(){
    let regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6,16})$/;
    let pw1 = document.getElementById("nu_password");
    let pw2 = document.getElementById("nu_cpassword");
    let pw_error = document.getElementById("pw-info");
    
    if (!regex.test(pw1.value) || pw1.value.length === 0){
        pw1.style.borderColor = "red";
    } else if (pw1.value !== pw2.value) {
        pw1.style.borderColor = "green";
        pw2.style.borderColor = "red";
    } else {
        pw1.style.borderColor = "green";
        pw2.style.borderColor = "green";
        pw_error.classList.remove("invalid");
        pw_error.classList.add("valid");
        return true;
    }
    pw_error.classList.remove("valid");
    pw_error.classList.add("invalid");
    return false;
}

function checkUsername() {
    let regex = /^[a-z0-9_]{6,16}$/;
    let username_input = document.getElementById("nu_username");
    let username = username_input.value.toLowerCase();
    let username_info = document.getElementById("username-info");
    
    if (regex.test(username) && !valid_usernames.includes(username)) {
        username_info.classList.remove("invalid");
        username_info.classList.add("valid");
        username_input.style.borderColor = "green";
        return true;
    }
    borderRed(username_input);
    username_info.classList.remove("valid");
    username_info.classList.add("invalid");
    return false;
}

function checkEmail() {
    let email_input = document.getElementById("nu_email");
    let email = email_input.value.toLowerCase();
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(email) && !valid_emails.includes(email)) {
        email_input.style.borderColor = "green";
        return true;
    }
    borderRed(email_input);
    return false;
}