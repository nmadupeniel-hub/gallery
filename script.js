const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if(username === "admin" && password === "1234"){
        message.innerHTML = "Login Successful!";
    }else{
        message.innerHTML = "Invalid Username or Password";
        message.style.color = "red";
    }
});

