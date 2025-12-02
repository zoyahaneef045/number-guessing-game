// computer store a number 
let randomNum = Math.floor(Math.random() * 100) + 1;

// variables to target HTML elements
let guessInput = document.getElementById("guessInput");
let checkButton = document.getElementById("checkButton");
let result = document.getElementById("result");
let restartButton = document.getElementById("restartButton");

checkButton.onclick = () => {
    let guess = Number(guessInput.value);

    if (guess < 1 || guess > 100) {
        result.textContent = 'Enter a number between 1 to 100';
        result.style.color = 'white';
    } 
    else if (guess === randomNum) {
        result.innerHTML = '🎉 <b>Congratulations! You win 💕</b>';
        result.style.color = 'white';
        checkButton.disabled = true;
        restartButton.style.display = 'block';
    } 
    else {
        result.textContent = guess < randomNum ? 'Too low! Try again' : 'Too high! Try again';
        result.style.color = 'orange';
    }
};
guessInput.value = '';


restartButton.onclick = () => {
    randomNum = Math.floor(Math.random() * 100) + 1;
    result.textContent = '';
    guessInput.value = '';
    checkButton.disabled = false;
    restartButton.style.display = 'none';
    guessInput.focus();
};
