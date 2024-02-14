function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const shoElement = document.getElementById(elementId);
    shoElement.classList.remove('hidden')
}

function getARandomAlphabet(){
    // get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');  // string থেকে  array  কে বিভিন্ন ভাগে ভাগ করা
    // console.log(alphabets) 

    // get a random index between 0 -25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    
    // console.log(index, alphabet);
    return alphabet;
}