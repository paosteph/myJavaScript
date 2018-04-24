var poblacion = {
    numeroOsos: 1000,
    mes: 0
};

function calcularPoblacionOsos(numeroMeses) {
    for(i=1; i<=numeroMeses; i++){
        poblacion.numeroOsos = recalcularExcesoDeOsos(poblacion.numeroOsos);
        poblacion.mes = poblacion.mes+1;
        console.log('Van a existir '+poblacion.numeroOsos+' osos de anteojos despues del mes '+poblacion.mes);
    }
}

function recalcularExcesoDeOsos(numeroOsos) {
    if(numeroOsos < 10000) {
        if (numeroOsos * 4 < 10000) {
            return numeroOsos * 4;
        } else {
            console.log('Poblacion '+numeroOsos*4+ ' osos');
            console.log('Removiendo '+numeroOsos / 2+' de osos de anteojos de la poblacion');
            return numeroOsos / 2;
        }
    }else{
        recalcularExcesoDeOsos(numeroOsos);
    }
}

console.log(poblacion);
calcularPoblacionOsos(2);
calcularPoblacionOsos(3);
calcularPoblacionOsos(4);