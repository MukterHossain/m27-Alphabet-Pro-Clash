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

function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet)
}




function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}