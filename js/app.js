/* 
let nombre = "juan"
let apellido = "perez"
let altura = 1.65
let edad = 18
let numero1 = 22
let numero2 = "24.23"
let numero3 = 0



console.log(`tu nombres ${nombre} y tu apellido es ${apellido}`)

console.log(typeof(numero2))
numero3 = Number(numero2)
console.log(numero2)

//condicionales

if (edad > 18){
    console.log("sos mayor de edad")
} 
if (edad = 18) {
    console.log("tenes 18")
} else {
    console.log("sos menor de edad")
}

//operador ternario

edad > 18 ? console.log("sos mayor de 18") : console.log("no sos mayor de 18")


//bucles
let x = 7

while(x < 20){
    console.log("x vale",x )

    x= x + 1
}

let y = 0
do{
    console.log("el valor de y es", y)
    y++
}while(y < 10)

//for clasic

for(let z = 0; z < 24; z++){
    console.log(`el valor de z es ${z}`)
}

let palabra = `cat`
switch(palabra){
    case `dog` :
        console.log("Su traduccion es perro")
        break;
    case `cat` :
        console.log("Su traduccion es gato")
        break;
    default:
        console.log("No se encontro traduccion")
}

//funciones
 let numero = 23
 let num = 2
function sumar (a, b){
    let resultado = a + b + 2
    console.log(resultado)
}

sumar(numero, num) //activa la funciones ^^^ */

// propiedades y metodos de clases
class Persona {
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }
} 

let p1 = new Persona("juan", "perez", 18);
p1.saludar();


// propiedades y metodos estaticos
class Coche {
    constructor(marca, modelo, año){
        this.marca = marca
        this.modelo = modelo
        this.encendido = false
    }
    arrancar(){
        this.encendido = true
        console.log(`El coche ${this.marca} ${this.modelo} ha arrancado.`);
    }
    obtenerInfo(){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
}

let miCoche = new Coche("Toyota", "Corolla", 2020);
miCoche.arrancar();
miCoche.obtenerInfo();


// desestructuracion de objetos
let persona1 = { nombre: "Ana", edad: 25, ciudad: "Madrid" };

let { nombre: nombrePersona, edad: edadPersona } = persona1;

console.log(nombrePersona); // Ana
console.log(edadPersona);   // 25


// desestructuracion de arrays
let numeros = [10, 20, 30, 40];

let [a, b, ...restoArray] = numeros;

console.log(a);          // 10
console.log(b);          // 20
console.log(restoArray); // [30, 40]


// spread operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

console.log(arr2); // [1, 2, 3, 4, 5]

let obj1 = { nombre: "Ana" };
let obj2 = { ...obj1, edad: 25 };

console.log(obj2); // { nombre: "Ana", edad: 25 }


// operador rest en arrays
let numeross = [1, 2, 3, 4, 5];

let [g, h, ...restNumeros] = numeross;

console.log(g);           // 1
console.log(h);           // 2
console.log(restNumeros); // [3, 4, 5]


// operador rest en objetos
let persona2 = { nombre: "Ana", edad: 25, ciudad: "Madrid" };

let { nombre: nombre2, ...restObjeto } = persona2;

console.log(nombre2);    // Ana
console.log(restObjeto); // { edad: 25, ciudad: "Madrid" }