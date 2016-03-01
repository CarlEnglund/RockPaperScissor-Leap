var fingers;
var logged = false;

var threeSeconds = 3 
    display = document.getElementById('countDown');
    
setTimeout(startTimer(threeSeconds, display), 1);

var controller = Leap.loop(function(frame){
    if(frame.hands.length > 0) {
        fingers = frame.hands[0].fingers;
    }
});

function isTrue(value) {
  return value;
}

function returnHand() {
     if(!logged) {
        
        logged = true;
        fingers = fingers.filter(function(d) {
            return d.extended;
        })
        var playerChoice;

        if(fingers.length == 0 || fingers.length == 1) {
            document.getElementById('countDown').innerHTML = "You picked Rock!";
            playerChoice = 1;
        }
        else if(fingers.length > 4) {
            document.getElementById('countDown').innerHTML = "You picked Paper!";
            playerChoice = 2;
        }
        else if(fingers.length > 1 && fingers.length < 3) {   
            document.getElementById('countDown').innerHTML = "You picked Scissor!";
            playerChoice = 3;
        }

        computerChoice = parseInt((Math.random()*3)+1);
            if(computerChoice == 1) 
                document.getElementById('computerChoice').innerHTML = "Computer picked Rock!";
            else if(computerChoice == 2)
                document.getElementById('computerChoice').innerHTML = "Computer picked Paper!";
            else if(computerChoice == 3)
                document.getElementById('computerChoice').innerHTML = "Computer picked Scissor!";
        
       
        if(playerChoice == computerChoice) 
            document.getElementById('result').innerHTML = "It's a tie!";
        else if(playerChoice == 1 && computerChoice == 2)
            document.getElementById('result').innerHTML = "You lost!";
        else if(playerChoice == 1 && computerChoice == 3)
            document.getElementById('result').innerHTML = "You won!";
        else if(playerChoice == 2 && computerChoice == 1)
            document.getElementById('result').innerHTML = "You won!";
        else if(playerChoice == 2 && computerChoice == 3)
            document.getElementById('result').innerHTML = "You lost!";    
        else if(playerChoice == 3 && computerChoice == 1)
            document.getElementById('result').innerHTML = "You lost!";    
        else if(playerChoice == 3 && computerChoice == 2)
            document.getElementById('result').innerHTML = "You won!";
    
       document.getElementById('playAgain').style.display = "block";   
    }
    
}

function startTimer(duration, display) {
    var timer = duration, seconds;
    
    setInterval(function () {
        if(timer > -1) {
        seconds = parseInt(timer % 60, 10);
        if(!(seconds < 0))
            display.innerHTML = seconds;
        console.log(timer);
        if (--timer < 0) 
            returnHand(); 
        }
    }, 1000);
}

function playAgain() {
    document.getElementById('countDown').innerHTML = "";
    document.getElementById('computerChoice').innerHTML = "";
    document.getElementById('result').innerHTML = "";
    document.getElementById('playAgain').style.display = "none";   
    logged = false;
    setTimeout(startTimer(threeSeconds, display), 1);

}

document.getElementById("playAgain").addEventListener("click", playAgain);

