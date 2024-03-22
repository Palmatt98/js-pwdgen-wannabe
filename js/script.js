//età dell'utente
let userName = prompt("ciao utente come qual è il tuo nome")
console.log(userName, typeof userName);

let userSurname = prompt("cognome")
console.log(userSurname);
alert(`ciao ${userName + userSurname}`)

let userAge = prompt("quanti hanni hai?")
console.log(userAge, typeof userAge); //srtring

userAge = parseInt(userAge) //adesso si è trasmofrmato in NUMBER
console.log(userAge, typeof userAge)

const currentYear = 2024; //number
//sottrazione dell'età corrente meno l'età dell'user da vita all'anno di nascita
let birthAge = currentYear - userAge;
console.log(birthAge);

favoriteColor = prompt("qual è il tuo colore preferito")
alert(`complimenti, molto bello  ${favoriteColor}`)

document.getElementById ("result")
.innerHTML = userName + favoriteColor + userSurname;

// document.getElementById("demo").innerHTML =
// Math.floor(Math.random() * 99);

