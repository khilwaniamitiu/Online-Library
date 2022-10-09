var fname_error = document.getElementById('fname_error');
var lname_error = document.getElementById('lname_error');
var uname_error = document.getElementById('uname_error');
var email_error = document.getElementById('email_error');
var pword_error = document.getElementById('pword_error');
var confp_error = document.getElementById('confp_error');
var subm_error = document.getElementById('subm_error');

function validatefName() {
    var fname = document.getElementById('fname').value;
    fname_error.innerHTML = null;

    if (fname.length == 0)  {
        fname_error.innerHTML = "First Name Cannot Be Blank";
        return false;
    }

    if (!fname.match(/^[A-Za-z]*$/))    {
        fname_error.innerHTML = "Only Alphabets Are Allowed";
        return false;
    }
    return true;
}

function validatelName() {
    var lname = document.getElementById('lname').value;
    lname_error.innerHTML = null;

    if (lname.length == 0)  {
        lname_error.innerHTML = "Last Name Cannot Be Blank";
        return false;
    }

    if (!lname.match(/^[A-Za-z]*$/))    {
        lname_error.innerHTML = "Only Alphabets Are Allowed";
        return false;
    }
    return true;
}

function validateuName() {
    var uname = document.getElementById('uname').value;
    uname_error.innerHTML = null;

    if (uname.length == 0)  {
        uname_error.innerHTML = "Username Cannot Be Blank";
        return false;
    }

    if (!uname.match(/^[A-Za-z_]/)) {
        uname_error.innerHTML = "First Letter Can Only Be Alphabet or _";
        return false;
    }

    if (!uname.match(/^[A-Za-z_][A-Za-z0-9_.#]*$/))    {
        uname_error.innerHTML = "Invalid Username (A-Z, a-z, 0-9, _, ., # are allowed)";
        return false;
    }

    if (uname.length < 6 || uname.length > 10)  {
        uname_error.innerHTML = "Username Can Only Be 6-10 Characters";
        return false;
    }
    return true;
}

function validatePass() {
    var pword = document.getElementById('pword').value;
    pword_error.innerHTML = null;

    if (pword.length == 0)  {
        pword_error.innerHTML = "Password Cannot Be Blank";
        return false;
    }

    if (pword.length < 8)  {
        pword_error.innerHTML = "Password Must Have Atleast 8 Characters";
        return false;
    }
    return true;
}

function confirmPass() {
    var pword = document.getElementById('pword').value;
    var confp = document.getElementById('confp').value;
    confp_error.innerHTML = null;

    if (pword != confp) {
        confp_error.innerHTML = "Passwords Do Not Match";
        return false;
    }
    return true;
}

function validateEmail()    {
    var email = document.getElementById('email').value;
    email_error.innerHTML = null;
    
    if (email.length == 0)  {
        email_error.innerHTML = "Email Cannot Be Blank";
        return false;
    }

    if (!email.match(/^[A-Za-z][A-Za-z0-9_.]*[@]{1}[A-Za-z]*[.]{1}[a-z]{2,4}$/))    {
        email_error.innerHTML = "Invalid Email";
        return false;
    }

    return true;
}

function validateForm() {
    subm_error.innerHTML = null;
    if (!validatefName() || !validatelName() || !validateuName() || !validatePass() || !validateEmail())    {
        subm_error.style.display = 'block';
        subm_error.innerHTML = "Please Validate Form";
        setTimeout(function(){subm_error.style.display = 'none';}, 3000);
        return false;
    }
    location.href = "../Templates/sign_in.html";
}