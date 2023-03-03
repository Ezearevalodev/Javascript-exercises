"use strict";

let m = "El triangulo es ",
  l1,
  l2,
  l3;

l1 = parseInt(prompt("Ingrese el lado 1"));
l2 = parseInt(prompt("Ingrese el lado 2"));
l3 = parseInt(prompt("Ingrese el lado 3"));

if (l1 == l2) {
  if (l2 == l3) {
    console.log((m += "Equilatero")); //Tres lados iguales
  } else {
    console.log((m += "isósceles")); //Dos lados iguales
  }
} else if (l2 == l3) {
  console.log((m += "isósceles")); //Dos lados iguales
} else if (l1 == l3) {
  console.log((m += "isósceles")); //Dos lados iguales
} else {
  console.log((m += "Escaleno")); //ningun lado igual al otro
}

// Equilatero: Tres lados iguales
// Isósceles: Dos lados iguales
// Escaleno: Todos los lados distintos