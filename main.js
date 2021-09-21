'use strict';

const nombre = prompt("Ingrese su nombre");
const apellido = prompt("Ingrese su apellido");
const año = parseInt(prompt("Ingrese su año de nacimiento"));
const añoActual = new Date().getFullYear();

const edad = (añoActual - año);
const nombreCompleto = `${nombre} ${apellido}`;

let rta = "";

//Validar que la respuesta sea solo si o no
do{
    rta = prompt("¿Desea relizar la tabla de multiplicación de un número? (si/no)");
}while(rta.toLowerCase() != 'si' && rta.toLowerCase() != 'no');

//En caso de que sea "si" realizar la tabla del número
while(rta.toLowerCase() == 'si'){
    const nro = parseInt(prompt("Ingrese un número: "));
    let i = 1;

    console.log(`------ TABLA DEL ${nro} ------`);
    for(i; i<=10; i++){
        let result = nro * i;
        console.log(`${nro} x ${i} = ${result}`);
    }

    do{
        rta = prompt("¿Desea relizar la tabla de multiplicación de un número? (si/no)");
    }while(rta.toLowerCase() != 'si' && rta.toLowerCase() != 'no');
}

if(nombre.toLowerCase() == "hola" && apellido.toLowerCase() == "hola"){
    alert("Has ingresado hola en su nombre y apellido!!");
}else if(apellido.toLowerCase() == "hola"){
    alert("Has ingresado hola en su apellido!!");
}else if(nombre.toLowerCase() == "hola"){
    alert("Has ingresado hola en su nombre!!");
}else{
    alert("Su nombre completo es: "+nombreCompleto);
}

if(edad >= 1 && edad < 103){
    alert(`Su edad es: ${edad}`);
}else{
    alert("Año de nacimiento incorrecto");
}