/*

ETAPE 1

let givenNumber = parseInt(prompt("Ecris moi un nombre"));

function didWin() {

    if (givenNumber === 22){
        document.body.innerHTML += "<h2>"+"Bravo ! Vous avez devine le nombre"+"</h2>";
    } else {
        if (givenNumber < 22) {
        document.body.innerHTML += "<h2>"+"Plus grand"+"</h2>";
        } else {
            if (givenNumber > 22) {
            document.body.innerHTML += "<h2>"+"Plus petit"+"</h2>";
            }   
        }
    }
} 
for (let givenNumber = parseInt(prompt("Ecris moi un nombre")); givenNumber != nombreJeu;);
*//*

ETAPE 2

let nombreJeu = 22;

function gamePlay() {
    let givenNumber
    while (givenNumber != nombreJeu) {
        givenNumber = parseInt(prompt("Ecris moi un nombre"));
        function didWin() {
            if (givenNumber == nombreJeu){
            alert("Bravo ! Vous avez devine le nombre");
            } else {
                if (givenNumber < nombreJeu) {
                alert("Plus grand");
                } else {
                    if (givenNumber > nombreJeu) {
                    alert("Plus petit");
                    }   
                }
            }
        }
        didWin();
    }
}

gamePlay();
*//*

ETAPE 3/4
*//*
const minNum = 0;
const maxNum = 50;
let intervale = "entre "+minNum+" et "+maxNum;

let nombreJeu = parseInt(prompt("Premier joueur ecris moi un nombre "+intervale+" :"));

function gamePlay() {
    let givenNumber;
    let i = false;

    while (!i) {
        givenNumber = parseInt(prompt("Deuxième joueur, devine le nombre du premier joueur "+intervale+" :"));
        i = didWin(givenNumber);
    }

    if (i) {
        alert("Bravo ! Vous avez devine le nombre");
    }
}

function didWin(givenNumber) {
    if (givenNumber === nombreJeu) {
        return true;
    } else {
        if (givenNumber < nombreJeu) {
            alert("Plus grand");
        } else {
            alert("Plus petit");
        }
        return false;
    }
}

console.log(gamePlay());
*//*

ETAPE 5 et dans le fichier 02_guess_a_number/index.html

*/

let minNum = 0;
let maxNum = 50;
let compteur = 1;

let nombreJeu = parseInt(prompt(`Premier joueur ecris moi un nombre entre ${minNum} et ${maxNum} :`));

function didWin(givenNumber, nombreJeu) {
    if (givenNumber < nombreJeu) {
        minNum = givenNumber;
        alert("Plus grand");
        alert(`Le nombre se situe entre ${minNum} et ${maxNum}`);
        //document.body.innerHTML += "<h4>"+(`Le nombre se situe entre ${minNum} et ${maxNum}`)+"</h4>";
        compteur++;
        return false;
    } else if (givenNumber > nombreJeu){
        maxNum = givenNumber;
        alert("Plus petit");
        alert(`Le nombre se situe entre ${minNum} et ${maxNum}`);
        //document.body.innerHTML += "<h4>"+(`Le nombre se situe entre ${minNum} et ${maxNum}`)+"</h4>";
        compteur++;
        return false;
    } else {
        alert(`Bravo ! Vous avez devine le nombre en ${compteur} tours.`);
        return true;
    }        
}

function verifier() {
    const inputElement = document.getElementById("nombreJeu");
    let givenNumber = parseInt(inputElement.value);
    didWin(givenNumber, nombreJeu);
}