let gameNum = 25;
let userNum = Number(prompt('Guess a number:'));
while(userNum !== gameNum){
     userNum = Number (prompt('Wrong guess!! guess again'));
}

alert('congratulations you guessed the number'); 