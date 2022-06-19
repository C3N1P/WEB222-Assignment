function validateForm(form) {
    return validateLastName(form) 
    && validatePhoneNums(form) 
    && validateFirstName(form) 
    && validatePass(form) 
    && validateSelect(form);
}

function validateLastName(form) {
    var pass = false;
    var alphabet = false;
    var String = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var allowchars = /[^/a-z/A-Z/'-/]/;
    var value = form.validateLastName.value.trim();

    if(value.length == 0) {
        alert("No Input\n");
        return false;
    }

    for(var i = 0; i < value.length; i++) {
        if(String.indexOf(value.substring(i, 1)) >= 0) {
            pass = true;
        }
    }

    if(!pass) {
        alert("First Name Should Have Atleast One Alphabet Letter.")
        form.validateLastName.focus();
        return false;
    }

    if(allowchars.test(value)) {
        alert("First Name Should Have Allowable Characters Only.");
        return false;
    }
    return true;
}

function validateLastName(form) {
    var pass = false;
    var alphabet = false;
    var String = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var allowchars = /[^/a-z/A-Z/'-/]/;
    var value = form.validateFirstName.value.trim();

    if (value.length == 0) {
        alert("No input!\n");
        return false;
    }

    for (var i = 0; i < value.length; i++) {
        if (String.indexOf(inputvalue.substring(i, 1)) >= 0) {
            pass = true;
        }
    }

    if (!pass) {
        alert("Last Name Should Have Atleast One Alphabet Letter.");
        form.validateFirstName.focus();
        return false;
    }

    if (allowchars.test(value)) {
        alert("Last Name Should Have Allowable Characters Only.");
        return false;
    }
    return true;
}

function validatePhoneNums() {
    input = signup.phone.value.trim();

    if (input.length == 0) {
        alert("Please Enter A Phone Number.");
        signup.phone.focus();
        return false;
    }

    if (input.length != 10) {
        alert("Please Enter 10 Digits Phone Number.");
        signup.phone.focus();
        return false; 
    }

    if (parseInt(input) != input) {
        alert("Please Enter A Phone Number (Numbers Only).");
        signup.phone.focus();
        return false; 
    }

    var er = /^000/;

    if (er.test(input)) {
        alert("Please Enter A Phone Number That Doesn't Having Area with 000 Code.");
        signup.phone.focus();
        return false;
    }

    er = /0000000000/;
    if (er.test(input)) {
        alert("Please Enter A Valid Phone Number.");
        signup.phone.focus();
        return false;
    }
    return true; 
}

function validatePass() {
    var pass1 = signup.pass1.value.trim();
    var pass2 = signup.pass2.value.trim();
    var pa = /[a-z]/;
    var pA = /[A-Z]/;
    var num = /[0-9]/;
    var pass = false;
    
    if(pass1.length == 0) {
        alert("Please Enter A Password");
        signup.pass1.focus();
        return false;
    }

    if (pass1.length < 8) {
        alert("Password Must Be Atleast 8 Characters Long.");
        signup.pass1.focus();
        return false;
    }

    if (!pa.test(pass1)) {
        alert("Password Must Contain Atleast One Lower Case Character.");
        signup.pass1.focus();
        return false;
    }

    if (!pA.test(pass1)) {
        alert("Password Must Contain Atleast One Upper Case Character.");
        signup.pass1.focus();
        return false;
    }

    if (!num.test(pass1)) {
        alert("Password Must Contain Atleast One Number.");
        signup.pass1.focus();
        return false;
    }

    if (pass1 != "" && pass1 != pass2) {
        alert("Your Password Doesn't Match.");
        signup.pass1.focus();
        return false;
    }
    return true;
}

function validateSelect() {
    var checked = false;
    var radlen = document.signup.type.length;

    for(i = 0; i < radlen; i++) {
        if(document.signup.type[i] == true) {
            checked = true;
        }
    }

    if(!checked) {
        alert("Must select atleast field");
        return false;
    }
    return true;
}