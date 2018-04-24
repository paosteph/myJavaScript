function validarNumeroDeStringsEnArreglo(arreglo) {
    var contador = 0;
    for(i=0; i < arreglo.length; i++){
       if(typeof arreglo[i] === 'string'){
            contador++;
       }
    }
    return contador;
}
var arreglo = ['pao', 'steph', 23456, {uno:'1'}, '']
console.log(validarNumeroDeStringsEnArreglo(arreglo));