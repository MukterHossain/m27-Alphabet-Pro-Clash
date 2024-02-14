function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const shoElement = document.getElementById(elementId);
    shoElement.classList.remove('hidden')
}

// set key Hight color
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

// // remove key Hight color
// function removeBackgroundColorById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.remove('bg-orange-400');
// }


function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}





// function getARandomAlphabet(){
//     // get or create an alphabet array
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');  // string থেকে  array  কে বিভিন্ন ভাগে ভাগ করা
//     // console.log(alphabets) 

//     // get a random index between 0 -25
//     const randomNumber = Math.random()*25;
//     const index = Math.round(randomNumber);

//     const alphabet = alphabets[index];
    
//     // console.log(index, alphabet);
//     return alphabet;
// }