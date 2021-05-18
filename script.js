
function validation() {
    let name = document.forms["ContactForm"]["name"];
    let email = document.forms["ContactForm"]["email"];
    let phone = document.forms["ContactForm"]["phone"];
    let messages = document.forms["ContactForm"]["message"];

    if (name.value == "") {
        window.alert("Please Enter Your Name.");
        name.focus();
        return false;
    }
    if (email.value == "") {
        window.alert("Please Enter a Valid E-mail Address.");
        email.focus();
        return false;
    }

    if (email.value.indexOf(".", 0) < 0) {
        window.alert("Please Enter a Valid E-mail Address.");
        email.focus();
        return false;
    }

    if (email.value.indexOf("@", 0) < 0) {
        window.alert("Please Enter a Valid E-mail Address.");
        email.focus();
        return false;
    }
    if (phone.value == "") {
        window.alert("Please Enter Your Mobile Number.");
        phone.focus();
        return false;
    }

    if (isNAN(phone.value)) {
        window.alert("Please Enter Only Digits.");
        phone.focus();
        return false;
    }

    if (phone.value.length != 10) {
        window.alert("Please Enter Valid Mobile Number.");
        phone.focus();
        return false;
    }

    if (messages.value == "") {
        window.alert("Please Enter The Message.");
        messages.focus();
        return false;
    }
}
var time= new Date();
document.getElementById("time").innerHTML = time.toDateString();
