'use strict'

let cont = 0, acum = 0, min, max, promedioAprobado, promedioDesaprobado, promedioPromocionado, promedio;

do {
    let nota = parseInt(prompt('Ingresè una nota'));

    cont++;
    acum += nota;

    if(cont === 1){
        min = nota
        max = nota
    }else{
        if (min > nota) {
            min = nota
        }
        if (max < nota) {
            max = nota
        }
    }

    console.log('Nota: ' + nota);
    console.log('Nota Minima: ' + min);
    console.log('Nota Maxima: ' + max);
    console.log('Acumulador: ' + acum);

    promedio = acum / cont;

    if (promedio >= 4 || promedio < 8) {
        console.log(promedioAprobado);
    }
    
    if (promedio >= 0 || promedio <= 3) {
        console.log("Desaprobado: " + promedio);
    }

    if (promedio >= 8 || promedio <= 10) {
        console.log("Promocionado: " + promedio);
    }
} while (confirm('Deseas agregar otra nota ?'));