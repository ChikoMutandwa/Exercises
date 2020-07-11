function validateName(field) {
    if (field == "")
        return "Full Name: " + "No Name entered \n";
    else
        return "Full Name: " + field + "\n";
}

function validateEmailAddress(field) {
    if (!(/^\S+@\S+\.\S+$/gi).test(field)) {
        return "Email Address: " + "Invalid Email address \n";
    } else if (field == "")
        return "Email Address: " + "No Email address was entered \n";
    else
        return "Email Address: " + field + "\n";
}

function validateCountry(field) {
    if (field == "")
        return "Country: " + "Nothing was choosen \n";
    else
        return "Country: " + field + "\n";
}

function validateMessage(message) {
    if (message == "")
        return "Message: " + "No message entered \n";
    else
        return "Message: " + message + "\n";
}

function validation(form) {

    var _name = document.getElementById("name").value;
    var _emailaddress = document.getElementById("email-address").value;
    var _country = document.getElementById("country").value;
    var _message = document.getElementById("message").value;

    alert("Checking Form.....Please Wait");
    fail = validateName(_name);
    fail += validateEmailAddress(_emailaddress);
    fail += validateCountry(_country);
    fail += validateMessage(_message);

    if (fail == "") {
        return true;
    } else {
        alert("You'ev entered the following details \n" + fail);
        return false;
    }
}