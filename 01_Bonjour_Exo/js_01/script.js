/*
let Prenom = prompt('Quel est ton Prenom ?');
let phraseAcceuil = "Bonjour "+Prenom+" !";

document.body.innerHTML += "<h2>"+phraseAcceuil+"</h2>";

let Annee = prompt('Quelle est ton année de naissance ? ');

let age = (an) => {
    (an - Annee);
    return ("Tu as "+(an - Annee)+" ans !");
}

document.body.innerHTML += "<h3>"+age(2023)+"</h3>";
*/
/*
let askBirthYear = () => {
    Annee = prompt('Quelle est ton année de naissance ? ');
    let age = (an) => {
        (an - Annee);
        return ("Tu as "+(an - Annee)+" ans !");
    }
    document.body.innerHTML += "<h3>"+age(2023)+"</h3>";
}
*/
/*
askBirthYear();
*/

let askName = () => {
    Prenom = prompt('Quel est ton Prenom ?');
    let phraseAcceuil = "Bonjour "+Prenom+" !";
    document.body.innerHTML += "<h2>"+phraseAcceuil+"</h2>";
}
askName();

function askBirthMonth (moisNaissance) {
    mois = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
    moisNaissance = prompt('Quel est ton mois de naissance ? (En lettre, avec une majuscule au debut et sans accent)');
    anneeNaissance = prompt('Quelle est ton année de naissance ? ');

    let i = 0

    while (moisNaissance != mois[i]) {
        i++
    }

    i++

    const dateActuelle = new Date();
  
    const anneeActuelle = dateActuelle.getFullYear();
    const moisActuel = dateActuelle.getMonth() + 1;
  
    let ageAnnees = anneeActuelle - anneeNaissance;
    let ageMois = moisActuel - i;
  
    if (moisActuel < i) {
      ageAnnees--;
      ageMois = 12 - (i - moisActuel);

    }
    
    document.body.innerHTML += "<h3>"+(`Tu as ${ageAnnees} ans et ${ageMois} mois !`)+"</h3>";
}

askBirthMonth()

/*
function AskBirthMonth() {
    
    const anneeNaissance = parseInt(prompt("Quel est ton annee de naissance ?"));
  
    const moisNaissance = parseInt(prompt("Quel est ton mois de naissance ? (sous forme numerique, de 1 à 12)"));
  
    const dateActuelle = new Date();
  
    const anneeActuelle = dateActuelle.getFullYear();
    const moisActuel = dateActuelle.getMonth() + 1;
  
    let ageAnnees = anneeActuelle - anneeNaissance;
    let ageMois = moisActuel - moisNaissance;
  

    if (moisActuel < moisNaissance) {
      ageAnnees--;
      ageMois = 12 - (moisNaissance - moisActuel);
    }
    document.body.innerHTML += "<h2>"+(`Tu as ${ageAnnees} ans et ${ageMois} mois !`)+"</h2>";
  }
  
  AskBirthMonth();
*/