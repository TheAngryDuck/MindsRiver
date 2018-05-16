document.onkeydown = function() {
    var guess = document.getElementById("PasswordField").value;
    if(event.keyCode === 13) {
        if(guess.toLowerCase() === "mellon"){
            window.location.replace("credits.html");
        }
    }
};