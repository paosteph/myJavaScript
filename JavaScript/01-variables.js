console.log('Hola javascript!');
var mutar;
var nombre = 'Pao Steph';
console.log(nombre);
var edad = 28;
var deudas = 45487.15;
var fechaNacimiento = new Date();
var casado = false;
var estoyVacio = null; //false
var noEstoyDefinido = undefined; //false
mutar = sumarDosNumeros; //
// -1 : true, 0: falso, 1: true
if (1) {
    console.log('Verdad');
} else {
    console.log('Falso');
}
//objeto Json
var usuario = {
    "nombre": "Pao",
    apellido: 'Guamani',
    edad: sumarDosNumeros(10,15),
    //imprimirConsola: function () {
    //    console.log(this.nombre + ' ' + this.apellido + ' ' + this.edad);
    //}
    imprimirConsola: sumarDosNumeros,
};
console.log(usuario.nombre);
//delete usuario.edad;
console.log(usuario);
usuario.cedula = '1745454545';
console.log(usuario);
// no puede esto -> usuario.mascotas.nombre = 'Cami';
usuario.mascotas = {};
usuario.mascotas.nombre = 'Cami';
console.log(usuario);
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof casado);
console.log(typeof fechaNacimiento);
console.log(typeof usuario);
function sumarDosNumeros(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};
console.log(sumarDosNumeros(1,2));
//funcion anonima :  no es necesario poner el nombre de la funcion al definir asi
var sumarDosNumerosVersionDos = function (numeroUno, numeroTres) {
    return numeroUno + numeroTres;
};
console.log(sumarDosNumerosVersionDos(5,5));
console.log(usuario.imprimirConsola);
console.log(usuario);
var arreglo = [
    1,
    'Pao',
    2.2,
    true,
    undefined,
    null,
    sumarDosNumeros(1,2),
    sumarDosNumeros,
    [1,2,3,true]
];
