let age = 20;
let fullName = 'lindomar';
let isValid = true;
let xablau;
let value = null;

console.log(age);
console.log(fullName);
console.log(isValid);
console.log(xablau);
console.log(value);

if (true) {
    // Início do escopo do if
    var userAge = '20';
    console.log(userAge); // 20
    // Fim do escopo do if
  }
  
  console.log(userAge); // 20

  const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';

console.log(favoriteLanguage); 
// TypeError: Assignment to constant variable.

let patientId = 50;
let isEnrolled = true;
let patientEmail = 'ana@email.com';

console.log(typeof patientId); //number

const age = 87;

if (age >= 18) {
  console.log('Maior de idade');
} else {
  console.log('Menor de idade');
}


let currentHour = 16;
let message = "";

if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour < 14) {
  message = "Hora do almoço!!!";
} else if(currentHour >= 4 && currentHour < 11) {
  message = "Hmmm, cheiro de café recém-passado";
}
console.log(message);
