var err = document.getElementById('err');

function validUser()    {
    var uname = document.getElementById('uname').value;
    if (uname == "highkraken" || uname == "devparab" || uname == "harshgangwani")   {
        return true;
    }
    return false;
}

function validPass()    {
    var uname = document.getElementById('uname').value;
    var pass = document.getElementById('pass').value;
    if (uname == "highkraken") {
        if (pass == "hello6969")    {

            return true;
        }
    }
    if (uname == "devparab")  {
        if (pass == "devparab1234") {
            return true;
        }
    }
    if (uname == "harshgangwani")    {
        if (pass == "harsh2345")    {
            return true;
        }
    }
    return false;
}

function valid()    {
    err.innerHTML = null;
    if (!validPass())  {
        err.innerHTML = "Invalid Username or Password";
        return false;
    }  
    location.href = "../Templates/home.html";
}