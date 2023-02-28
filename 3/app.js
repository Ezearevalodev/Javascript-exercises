'use strict'

let m = '' , cont = 0, acum = 0, min, max, prom;

for (let i = 0; i < 5; i++) {
    let n = parseInt(prompt('Ingresé un numero'));

    cont++
    acum += n;

    if (cont === 1) {
        min = n;
        max = n;
    } else {
        if (n < min) {
            min = n
        }
        if (n > max) {
            max = n
        }
    }

    prom = acum / cont;

}
console.log("Promedio " + prom)
console.log("Minimo " + min)
console.log("Maximo " + max)