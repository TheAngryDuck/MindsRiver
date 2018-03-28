function travelPlan() {
    var guess = document.getElementById("feedbackPass").value;

    console.log("guess: " + guess);
    if (guess.toLowerCase() === "superman"){
        alert("Now, superman is indeed very super, but what if he was less super and more of a Sinner. What would he be called then?" +
            "\n\n What was the last place/being to where he went to hide, that accepted him?");
} else if(guess.toLowerCase() === "devil"){
        alert("Now, we know that the devil is a known deceiver and hides behind many faces. Maybe the great fighters of the foo know anything about it." +
            "\n\n What will the fighter never do?");
    }else if (guess.toLowerCase() === "surrender"){
        alert("Now, in the north there are a group of warriors who also will never surrender. They go by a silly name like Sabaton or something. Could they hold your final answer?" +
            "\n\n Where does the one way trip lead?");
    }else if (guess.toLowerCase() === "auschwitz"){
        alert("Your final answer is: desc");
    }
}