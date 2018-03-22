function passwordValid() {
    var guess = document.getElementById("PasswordField").value;

    console.log("guess: " + guess);
    if (guess.toLowerCase() === pass){
        window.location.replace(local);
    }else if(guess == null){
        alert("ACCESS DENIED!");
    }else{
        alert("ACCESS DENIED!");
    }
}
