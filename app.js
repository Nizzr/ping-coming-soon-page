function validation() {
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        document.getElementById("email").style.borderColor = "hsl(223, 100%, 88%)";
    }
    else {
        form.classList.add("invalid");
        form.classList.remove("valid");
        text.innerHTML = "Please provide a valid email adress";
        document.getElementById("email").style.borderColor = "hsl(354, 100%, 66%)";
    }
}