function getComputerChoice(){
    let randomNumber = Math.round(Math.random()*4);
    if(randomNumber == 4){
        randomNumber = 3;
    }
    if(randomNumber == 0){
        randomNumber = 1;
    }
    switch(randomNumber){
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors'
            break;
    }
}
function playRound(playerSelection, computerSelection){
    /*
        game cases:
        both pick same, tie

        rock vs paper, loss
        scissors vs rock, loss
        paper vs scissors, loss

        scissors vs paper, win
        paper vs rock, win
        rock vs scissors, win
    */
    let player = playerSelection.toLowerCase();
    if(playerSelection === computerSelection){
        return 'Tie!';
    }else if(playerSelection === 'rock' && computerSelection === 'paper'){
        return 'Loss! Paper beats rock.'
    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'Win! Rock beats scissors.'
    }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        return 'Loss! Scissors beats paper.'
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return 'Win! Paper beats rock.'
    }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        return 'Loss! Rock beats scissors.'
    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'Win! Scissors beats paper.'
    }else{
        return 'Not valid?'
    }
}
function game(){
    for(let i=0;i<5;i++){
        let userInput = prompt("Input rock, paper, or scissors!");
        let computerInput = getComputerChoice();
        console.log('user input: '+userInput);
        console.log('computer input: '+computerInput);
        console.log(playRound(userInput,computerInput));
    }
}