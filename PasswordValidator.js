function passwordValid() {
    var guess = document.getElementById("PasswordField").value;
    var owl = "https://www.mindsriver.com/owlGame/mainMenuUk.html";

    //THIS IS NOT FOR YOUR EYES. TRY PLAYING THE GAME.

    console.log("guess: " + guess);
    if (guess.toLowerCase() === lizard){
        window.location.replace(local);
    }else if(guess.toLowerCase() == null){
        alert("ACCESS DENIED!");
    }else if(guess.toLowerCase() === monkey){
        window.location.replace("https://www.youtube.com/watch?v=kffacxfA7G4");
    }else if(guess.toLowerCase() === cow){
        window.location.replace("https://www.youtube.com/watch?v=QJO3ROT-A4E");
    }else if(guess.toLowerCase() === dog){
        window.location.replace("https://www.youtube.com/watch?v=6M6samPEMpM");
    }else if(guess.toLowerCase() === parrot){
        window.location.replace("https://www.youtube.com/watch?v=C-u5WLJ9Yk4");
    }else if(guess.toLowerCase() === bull){
        window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }else if(guess.toLowerCase() === cat){
        window.location.replace("https://www.youtube.com/watch?v=kfVsfOSbJY0");
    }else if(guess.toLowerCase() === bunny){
        window.location.replace("https://www.youtube.com/watch?v=1qN72LEQnaU");
    }else if(guess.toLowerCase() === toad){
        window.location.replace("https://www.youtube.com/watch?v=M11SvDtPBhA");
    }else if(guess.toLowerCase() === lamb){
        window.location.replace("https://www.youtube.com/watch?v=AMT698ArSfQ");
    }else if (guess.toLowerCase() === crow){
        window.location.replace(zone);
    }else if(guess.toLowerCase() === "first ever game"){
        window.location.replace(owl)
    }else if(guess.toLowerCase() === god){
        window.location.replace(land);
    }
    else{
        alert("ACCESS DENIED!");
    }
}
