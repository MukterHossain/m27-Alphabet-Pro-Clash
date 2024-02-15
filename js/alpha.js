// function play(){
//     // step-1: hide the home screen. to hide the screen add teh class hidden to teh home section

//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     // console.log(homeScreen.classList); class list বের করতে

//     // step-2: show the playground

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList)
// }


// // capture keyboard key press
// function handleKeyboardButtonPress(){
//     console.log('button pressed')
// }
// document.addEventListener('keyup', handleKeyboardButtonPress);

// or  //m-28
function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed)

    // stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // check right or wrong key pressed  //m-28
    if(playerPressed === expectedAlphabet){
        console.log('you get a point')

        //short code 
        const currentScore = getTextElementValueById('current-score');
        // console.log(currentScore);
        const updateScore = currentScore + 1;
        setTextElementValueById('current-score', updateScore);



        // ---------------------//Details code start---------------------------
        // update score:
       
        // 1. get the current score                       

        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText); // convert number
        // console.log(currentScore)

        // // 2. increase the score by 1
        // const newScore = currentScore + 1;
        // // 3. show the current score
        // currentScoreElement.innerText = newScore;       //Details code End

        


        //start a new round
        // console.log('you have pressed correctly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you lost a point')
        //short code
        const currentLife = getTextElementValueById('current-life');
        const updateLife = currentLife -1;
        setTextElementValueById('current-life', updateLife);

        if(updateLife === 0){
            gameOver();
        }





        // ---------------------//Details code start---------------------------

        // // step-1: get the current life number             
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText)
        // // step-2: reduce the life count
        // const newLife = currentLife - 1;
        // // step-2: display the update life count
        // currentLifeElement.innerText = newLife;            //Details code end
    }
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent); //m-28

function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet)


    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;


    //set background color
    setBackgroundColorById(alphabet);
    // removeBackgroundColorById(alphabet); // Remove করতে হলে
}






function play(){
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    //reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}


function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // 1. get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore)
    setTextElementValueById('last-score', lastScore)

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet)
    removeBackgroundColorById(currentAlphabet);
}