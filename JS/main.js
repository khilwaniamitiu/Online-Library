var fname_error = document.getElementById('fname_error');
var lname_error = document.getElementById('lname_error');
var uname_error = document.getElementById('uname_error');
var email_error = document.getElementById('email_error');
var pword_error = document.getElementById('pword_error');


function validatefName() {
    var fname = document.getElementById('fname').value;
    fname_error.innerHTML = null;

    if (fname.length == 0)  {
        fname_error.innerHTML = "First Name Cannot Be Blank";
        return false;
    }

    if (!fname.match(/^[A-Za-z][A-Za-z]*/))    {
        fname_error.innerHTML = "Only Alphabets Are Allowed";
        return false;
    }
    return true;
}