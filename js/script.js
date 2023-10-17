// data-collection
const name = prompt("Come ti chiami?");
console.log(name);

const surname = prompt("Qual è il tuo cognome?");
console.log(surname);

const color = prompt("Qual è il tuo colore preferito?");
console.log(color);

// program-logic
const password = `${name}${surname}${color}21`;
console.log(password);

const message = `Questa è la tua password: ${password}`;
console.log(password);

// output
document.getElementById("password").innerHTML = message;