
let Prenom = prompt('Quel est ton Prenom ?');
let phraseAcceuil = "Bonjour "+Prenom+" !";

document.body.innerHTML += "<h2>"+phraseAcceuil+"</h2>";

let Annee = prompt('Quelle est ton année de naissance ? ');

let age = (an) => {
    (an - Annee);
    return ("Tu as "+(an - Annee)+" ans !");
}

document.body.innerHTML += "<h3>"+age(2023)+"</h3>";


let askName = () => {
    Prenom = prompt('Quel est ton Prenom ?');
    let phraseAcceuil = "Bonjour "+Prenom+" !";
    document.body.innerHTML += "<h2>"+phraseAcceuil+"</h2>";
}

let askBirthYear = () => {
    Annee = prompt('Quelle est ton année de naissance ? ');
    let age = (an) => {
        (an - Annee);
        return ("Tu as "+(an - Annee)+" ans !");
    }
    document.body.innerHTML += "<h3>"+age(2023)+"</h3>";
}

askName();
askBirthYear();


