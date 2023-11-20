/*function getLatinCharacterList(text) {
    const latinCharacters = [];

    for (let i = 0; i < text.length; i++) {
    if (/^[a-zA-Z]$/.test(text[i])) {
        latinCharacters.push(text[i]);
        }
    }
    return latinCharacters; 
}
console.log(latinCharacters(getLatinCharacterList("Hello world")));
*/

//Etape 1

// function getLatinCharacterList(text) {
//     return text.split("");
// }
// console.log(getLatinCharacterList("Hello world"))

//Etape 2

// function translateLatinCharacter(char) {
//     return latinToMorse(char)
// }

//Etape 3

const latinToMorse = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..'
};

function getLatinCharacterList(text) {
    return text.split("");
};

function translateLatinCharacter(character) {
    const uppercaseChar = character.toUpperCase();
    return latinToMorse[uppercaseChar] || character;
}

function encode(text) {
    const characterList = getLatinCharacterList(text);
    const morseCodeList = characterList.map(translateLatinCharacter);
    return morseCodeList.join(" ");
}

const inputText = "Hello world";
const morseCode = encode(inputText);
console.log(morseCode);
console.log(typeof latinToMorse);