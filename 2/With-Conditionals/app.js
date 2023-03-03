"use strict";

// Declaración de variables:
let m,
  n1,
  n2,
  op,
  r = "El resultado es: ";

// Ingreso de datos:
n1 = parseInt(prompt("Ingrese el primer operando"));
op = prompt("Ingrese el operador (+, -, *, /)");
n2 = parseInt(prompt("Ingrese el segundo operando"));

if(op === "+"){
    console.log(r += (n1 + n2));
} else if (op === "-") {
    console.log(r += (n1 - n2));
} else if (op === "*") {
    console.log(r += (n1 * n2));
} else if (op === "/") {
    console.log(r += (n1 / n2));
} else {
    console.log('Error al ingresar el operador');
}