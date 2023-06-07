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
