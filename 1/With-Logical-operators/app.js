'use strict';

let m = 'El triangulo es ',
    l1,
    l2,
    l3;

l1 = parseInt(prompt('Ingrese el lado 1'));
l2 = parseInt(prompt('Ingrese el lado 2'));
l3 = parseInt(prompt('Ingrese el lado 3'));

if (l1 == l2 && l2 == l3) {
    console.log(m += 'Equilatero');
} else if (l1 === l2 || l1 === l3 || l2 === l3) {
    console.log(m += 'isósceles');
} else {
    console.log(m += 'Escaleno');
}