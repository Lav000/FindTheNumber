let randomNumber = Math.floor(Math.random()*100 + 1);

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess() {
    const userGuess = Number(guessField.value);

    if (guessCount === 1){
        guesses.textContent = "Vous avez essayez :";
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`;


    if(userGuess === randomNumber){
        lastResult.textContent = "Gagné !";
        lastResult.style.color = "#09ff00";
        lastResult.style.textShadow = "0 0 5px #00ffff;";
        setGameOver();
    }
    else if(guessCount >= 10){
        lastResult.textContent = "Perdu tu pue la merde";
        setGameOver();
    }
    else{
        lastResult.textContent = "Faux zebi";
        lastResult.style.color = "red";
        if(userGuess > randomNumber){
            lowOrHi.textContent = "Ton chiffre est trop grand";
        }
        else if(userGuess < randomNumber){
            lowOrHi.textContent = "Ton chiffre est trop petit";
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Recommencer";
    resetButton.style.display = "block";
    resetButton.style.margin = "0 auto";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
// Animantion Rainbow

const title = document.getElementById("title");

let hue = 0;

function rainbowEffect() {
    title.style.color = `hsl(${hue}, 100%, 50%)`;
    hue+= 0.5;

    if (hue > 360) {
        hue = 0;
    }

    requestAnimationFrame(rainbowEffect);
}

rainbowEffect();