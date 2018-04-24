let nombre: string = 'Pao'; //forma de tipar variable
nombre = '1';
const cedula = '171717'; //solo lectura
//const no pueden ser reasiganadas y let si permite reasignar
let apellido: any = 'Campos'; //duck typing
apellido = 1;
apellido = {};
let edad:number = 1;
let casado:boolean = false;
let fechaNaci:Date = new Date();

//tipo de objeto
let usuario = {
    nombre: 'Adrian',
    edad: 4
};

class Usuario{
    nombre:string; //por defecto es public
    private edad: number;

    constructor(mNombre:string, mEdad:number){
        this.nombre = mNombre;
        this.edad = mEdad;
    }
    imprimirEnConsola(saludo: string)/*:void*/: string{
        //una funcion que no tenga return siempre devuleve undefined o el valor si existe
        //asi como metodos y propeidades son public por default, las funciones on void por default
        //template strings: poner variables en el string ``
        return `${saludo}. Mi nombre es: ${this.nombre}, y mi edad es: ${this.edad}`;
    }
}

let pao = new Usuario('Paola',4);
console.log(pao.imprimirEnConsola('Hey you !'));
//

//parametro que le llega al  se  hace constructor
class UsuarioDos {

    constructor(public nombre:string, private _edad:number, public esposa?:UsuarioDos){
        //incluir modificadores de acceso, no se guardan como propiedades dela
        //leer HANDBOOK en TYpescript (buena practica es poner : private _nombre)
        //el constructor se llama como la prop sin el _
        //? le hace opcional a la porpiedad
    }
    get edad(): number{
        return this._edad;
    }
    set edad(nuevaEdad: number){
        //sirven para validad, para cambiar o transformar datos
        this._edad = nuevaEdad;
    }
}
let steph = new UsuarioDos('Steph', 6);
console.log('pao', steph);

//interfaces usadas para tipar
interface UsuarioTres {
    nombre:string;
    edad:number
    esposa: Usuario
}
let beto: UsuarioTres = {
    nombre: 'Betito',
    edad: 5,
    esposa: new Usuario('Cami', 7)
};