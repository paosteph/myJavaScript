var generadores62MW = [];
var generadores124MW = [];

function cargarGeneradores(tamanio, megawatss) {
    var arreglo = [];
    for (i = 0; i < tamanio; i ++){
        arreglo.push({
           estado: 'apagado',
           megawatts: megawatss,
           total: 0
        });
    }
    return arreglo;
}

function monitorearGeneradores() {
    var i = 0;
    while (i < 4){
        if (generadores62MW[i].estado == 'apagado'){
            console.log('Generador #'+ (i+1) + ' esta '+generadores62MW[i].estado);
        }else {
            generadores62MW[i].total += generadores62MW[i].megawatts;
            console.log('Generador #' + (i+1) + ' esta ' + generadores62MW[i].estado + ', agregando '
                + generadores62MW[i].megawatts + ' para un total de ' + generadores62MW[i].total + ' MW.');
        }
        i++;
    }
    for (i = 0; i < 15; i++){
        if (generadores124MW[i].estado === 'apagado'){
            console.log('Generador #'+ (i+5) + ' esta '+generadores124MW[i].estado);
        }else {
            generadores124MW[i].total += generadores124MW[i].megawatts;
            console.log('Generador #' + (i+5) + ' esta '+generadores124MW[i].estado+', agregando '
                +generadores124MW[i].megawatts+' para un total de '+generadores124MW[i].total+' MW.' );
        }
    }
}

function activarGeneradores(grupo) {
    var inicio = 0;
    var aumento = 2;
    if (grupo === 'pares'){
        inicio = 1;
    }else if (grupo === 'impares'){
        //inicio=0 y aumento=2
    }else{ //todos
        aumento = 1;
    }

    for (i = inicio; i < generadores62MW.length ; i += aumento ){
        generadores62MW[i].estado = 'encendido';
        //generadores124MW[i].estado = 'encendido';
    }
    for (i = inicio; i < generadores124MW.length; i += aumento ){
        //generadores62MW[i].estado = 'encendido';
        generadores124MW[i].estado = 'encendido';
    }
}

//******************************************************
generadores62MW = cargarGeneradores(4, 62);
generadores124MW = cargarGeneradores(15, 124);

activarGeneradores("impares"); //pares, impares, todos
console.log('Monitoreo 1');
monitorearGeneradores();
console.log('Monitoreo 2');
monitorearGeneradores();
console.log('Monitoreo 3');
monitorearGeneradores();