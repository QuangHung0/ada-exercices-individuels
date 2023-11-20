function dateToTab (date) {
    const listDate = date.split('/');
    return listDate;
}

function isValidDate (date) {
    
    const listDate = dateToTab(date);
    const day = parseInt(listDate[0]);
    const month = parseInt(listDate[1]);
    const year = parseInt(listDate[2]);
    
    if (!(year>999 && year<9999))
        return false  
    
    if (!(month>0 && month<13))
        return false;
        const maxDay = maxDayMonth(month) + bissextille(year);
    
    if (!(day>0 && day<=maxDay))
        return false
    return true;
}


const maxDayMonth = (month) => { 

    const list31 = [1,3,5,7,8,10,12];
    const list30 = [4,6,9,11];

    if (list30.includes(month))
        return 30;

        else if (list31.includes(month))
        return 31;

        else
        return 28;        
}

const bissextille = (year) =>{ 

    if (year%400 === 0 | (year%4 === 0 && year%100 !== 0))
        return 1;

    else
        return 0;
} 

function isPalindrome(date){
    let dateNormal = date.split("/").join("");
    let dateReverse = date.replace(/\//g,"").split("").reverse().join("");
    if (dateNormal === dateReverse && isValidDate(date)){
        return true
    }else{
        return false
    }
}

const getNextPalindromes = (x) =>{
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let currentDate =`${day}/${month}/${year}`;
    let compteur = 1;
    let resultat ="";
while (compteur <=x){
    currentDate =`${("0" + day).slice(-2)}/${("0"+month).slice(-2)}/${year}`;
if (isPalindrome(currentDate)===true){
    compteur +=1;
    resultat+=currentDate + "\n"
}
    if(month === 12 && day ===31){
        year += 1
        month = 1
        day = 1
    }else if(day === maxDayMonth(month)){
        month +=1
        day =1;
    }else{
        day +=1
    }
} return resultat;
}

console.log(isValidDate("29/02/2004"))
console.log(isPalindrome("08/11/2003"));
console.log(isPalindrome("08/20/2003"));
console.log(isPalindrome("10/02/2001"));
console.log(getNextPalindromes(8));