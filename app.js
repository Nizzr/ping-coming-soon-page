const btn = document.querySelector("#button")
btn.addEventListener("click",(e)=>{
  e.preventDefault();
  console.log(validation());
    switch(validation()) {
        case "valid":
            location.reload();
            break;
        case "invalid":
            text.innerHTML = "Please provide a valid email adress";
            break;
        case "empty":
            text.innerHTML = "Whoops! It looks like you forgot to add your email";
            break;
    }
    
})

function validation() {
    const form = document.querySelector("#form");
    const email = document.querySelector("#email").value;
    const text = document.querySelector("#text");
    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    
    if (email.match(pattern)) {
        text.innerHTML = "";
        document.getElementById("email").style.borderColor = "hsl(223, 100%, 88%)";
        return "valid";
    } else if(email==="") {
        document.getElementById("email").style.borderColor = "hsl(354, 100%, 66%)";
        return "empty";
    }
    
    else {
        document.getElementById("email").style.borderColor = "hsl(354, 100%, 66%)";
        return "invalid";
    }
} 