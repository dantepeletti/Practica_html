
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

sumar(numero, num) //activa la funciones ^^^