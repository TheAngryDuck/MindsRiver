function rune() {
    var guess = document.getElementById("runePass").value;
    console.log("guess: " + guess);
    if (guess.toLowerCase() === "sun") {
        alert("Your answer lies on a JOURNEY of ICE");
    }
}