function passwordValid() {
    var guess = document.getElementById("PasswordField").value;

    console.log("guess: " + guess);
    if (guess.toLowerCase() === lizard){
        window.location.replace(local);
    }else if(guess == null){
        alert("ACCESS DENIED!");
    }else if(guess === monkey){
        window.location.replace("https://www.youtube.com/watch?v=kffacxfA7G4");
    }else if(guess === cow){
        window.location.replace("https://www.youtube.com/watch?v=QJO3ROT-A4E");
    }else if(guess === dog){
        window.location.replace("https://www.youtube.com/watch?v=6M6samPEMpM");
    }else if(guess === parrot){
        window.location.replace("https://www.youtube.com/watch?v=C-u5WLJ9Yk4");
    }else if(guess === bull){
        window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }else if(guess === cat){
        window.location.replace("https://www.youtube.com/watch?v=kfVsfOSbJY0");
    }else if(guess === bunny){
        window.location.replace("https://www.youtube.com/watch?v=1qN72LEQnaU");
    }else if(guess === toad){
        window.location.replace("https://www.youtube.com/watch?v=M11SvDtPBhA");
    }else if(guess === lamb){
        window.location.replace("https://www.youtube.com/watch?v=AMT698ArSfQ");
    }else{
        alert("ACCESS DENIED!");
    }
}
