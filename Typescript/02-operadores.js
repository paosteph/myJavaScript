var arregloNumerosUno = [1, 2, 3, 4, 5];
var arregloUsuarios = [
    {
        nombre: 'Pao0',
        edad: 28
    },
    {
        nombre: 'Pao1',
        edad: 10
    },
    {
        nombre: 'Pao2',
        edad: 70
    },
    {
        nombre: 'Pao3',
        edad: 32
    },
    {
        nombre: 'Pao4',
        edad: 39
    }
];
var arregloDeudasFamiliares = [
    140,
    314.23,
    50.94,
    17,
    200
];
//let arregloNumerosDos: Array<number> = [];
//asi se tipa una funcion anonima -> funciones de flecha gorda => fat  functions
var sumarDosNumeros = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};
//se puede omitir los parentesis si es de un parametro
var potenciaDeDosDeUnNumero = function (numero) {
    return numero * numero;
};
//si es sencillo, se puede retornar en la misma linea
var potenciaDeDosDeUnNumeroDos = function (numero) { return numero * numero; };
var sumatoriaDeValores = 0;
var resultadoForEach = arregloNumerosUno.forEach(function (valorDelArreglo, indice, arreglo) {
    sumatoriaDeValores = sumatoriaDeValores + valorDelArreglo;
    console.log(valorDelArreglo);
    console.log(indice);
    console.log(arreglo);
});
console.log('Resultado forEach', resultadoForEach);
console.log('sumatoria de valores', sumatoriaDeValores);
var resultadoSuma = arregloNumerosUno
    .reduce(
//recibe 1. una funcion, y 2. valor en el que empieza
function (valorActualDeLaOperacion, valorDelArreglo) {
    console.log('valor actual de la operacion', valorActualDeLaOperacion);
    console.log('valor del arreglo', valorDelArreglo);
    return valorActualDeLaOperacion - valorDelArreglo;
}, 20 //inicializa valoractualdelaoperacion
);
console.log('resultadodelasuma', resultadoSuma);
var totalEdadUsuarios = arregloUsuarios.reduce(function (total, usuario) { return total + usuario.edad; }, 0);
console.log('Total edad usuarios', totalEdadUsuarios);
function calcularDeuda(edad) {
    return arregloDeudasFamiliares
        .reduce(function (totalDeuda, valorDeuda) {
        return (totalDeuda + (valorDeuda * (edad / 100)));
    } //se puede omitir el valor de iniciacion
    );
}
//map : transformar o mutar el arreglo
var usuariosCasados = arregloUsuarios
    .map(function (usuario) {
    usuario.casado = false;
    return usuario; //esto dice que es lo que a haber en esa posicion
})
    .map(function (usuario) {
    usuario.deuda = calcularDeuda(usuario.edad);
    return usuario; //esto dice que es lo que a haber en esa posicion
})
    .filter(function (usuario) { return (usuario.deuda <= 310); } //&& edad > 30);
)
    /*.every(
        (usuario: UsuarioArreglo)=>{
            return usuario.edad <= 30;
        }
    );*/
    .some(//OR
function (usuario) {
    return usuario.edad >= 18;
});
console.log('usuarioscasados', usuariosCasados);
