'use strict'

let cont = 0, acum = 0, min, max, prom;

for (let i = 1; i <= 5; i++) {
    cont ++

    let nota = parseInt(prompt("Ingrese un numero"));

    acum += nota;
    
    if (cont === 1) {
        min = nota;
        max = nota;
    } else{
        if (min > nota) {
            min = nota;
        }
        if (max < nota) {
            max = nota;
        }
    }

    prom = acum / [i];

    console.log(`Nota Minima: ${min}`);
    console.log(`Nota Maxima: ${max}`);
    console.log(`Nota Promedio: ${prom}`);
    console.log(` `);
}