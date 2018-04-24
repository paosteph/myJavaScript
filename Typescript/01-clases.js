var nombre = 'Pao'; //forma de tipar variable
nombre = '1';
var cedula = '171717'; //solo lectura
//const no pueden ser reasiganadas y let si permite reasignar
var apellido = 'Campos'; //duck typing
apellido = 1;
apellido = {};
var edad = 1;
var casado = false;
var fechaNaci = new Date();
//tipo de objeto
var usuario = {
    nombre: 'Adrian',
    edad: 4
};
var Usuario = /** @class */ (function () {
    function Usuario(mNombre, mEdad) {
        this.nombre = mNombre;
        this.edad = mEdad;
    }
    Usuario.prototype.imprimirEnConsola = function (saludo) {
        //una funcion que no tenga return siempre devuleve undefined o el valor si existe
        //asi como metodos y propeidades son public por default, las funciones on void por default
        //template strings: poner variables en el string ``
        return saludo + ". Mi nombre es: " + this.nombre + ", y mi edad es: " + this.edad;
    };
    return Usuario;
}());
var pao = new Usuario('Paola', 4);
console.log(pao.imprimirEnConsola('Hey you !'));
//
//parametro que le llega al  se  hace constructor
var UsuarioDos = /** @class */ (function () {
    function UsuarioDos(nombre, _edad, esposa) {
        this.nombre = nombre;
        this._edad = _edad;
        this.esposa = esposa;
        //incluir modificadores de acceso, no se guardan como propiedades dela
        //leer HANDBOOK en TYpescript (buena practica es poner : private _nombre)
        //el constructor se llama como la prop sin el _
        //? le hace opcional a la porpiedad
    }
    Object.defineProperty(UsuarioDos.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (nuevaEdad) {
            //sirven para validad, para cambiar o transformar datos
            this._edad = nuevaEdad;
        },
        enumerable: true,
        configurable: true
    });
    return UsuarioDos;
}());
var steph = new UsuarioDos('Steph', 6);
console.log('pao', steph);
var beto = {
    nombre: 'Betito',
    edad: 5,
    esposa: new Usuario('Cami', 7)
};
