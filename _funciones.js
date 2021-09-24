'use strict';

let user = 'Luca';
let pass = '1234L';

let pRemeraPers = 1450;
let pRemeraDev = 1250;
let pRemeraCart = 1250;
let pRemeraMI = 1150;
let pEstampado = 975;

let pago_Total = 0;
//Funciones
//función loguear y registrar
const logear_Registrar = () => {
    let rta = "";

    do{
        rta = prompt('Quiere logearse o registrarse?(log/reg/salir)');
    }while(rta.toLowerCase() != 'log' && rta.toLowerCase() != 'reg' && rta.toLowerCase() != 'salir');

    
    switch (rta.toLowerCase()) {
        //log in
        case 'log': 
            validar_Datos();
            break;
        //registro
        case 'reg':
            user = prompt("Ingrese nombre de usuario");
            pass = prompt("Ingrese su contraseña");
            
            while(user === '' || pass === ''){
                alert('La contraseña y/o usuario no pueden estar vacíos!!');
                user = prompt("Ingrese nombre de usuario");
                pass = prompt("Ingrese su contraseña");
            }

            alert(`Gracias por el registro!, Bienvenido a MI ${user}`);
            carrito();
            break;
    }
}

//función validar usuario y contraseña
const validar_Datos = () => {
    let logUser = prompt('Ingrese su nombre de usuario');
    let logPass = prompt('Ingrese su contraseña');
    let cont = 1;

    if(logUser === user && logPass === pass){
        alert(`Hola ${logUser}, bienvenido!!`);
        carrito();
    }else{
        while(logUser !== user && logPass !== pass && cont<3){
            alert('Contraseña y/o usuario incorrecto, intente de nuevo');

            logUser = prompt('Ingrese su nombre de usuario');
            logPass = prompt('Ingrese su contraseña');

            cont++;

            if(cont >= 3){
                alert("Has llegado al limite de intentos, prueba más tarde");
                break;
            }
        }
    }
}

//función carrito
const carrito = () => {
    let rpta = "";
    let seguir_comprando = "";

    do{
        rpta = prompt("¿Desea comprar algún producto? (si/no)");
    }while(rpta.toLowerCase() != 'si' && rpta.toLowerCase() != 'no');

    while(rpta.toLowerCase() == 'si'){
        let eleccion = "";
        
        alert(`
            Los productos en stock son: 
            Remeras personalizadas (RP) - $1450
            Remeras de MI (RMI) - $1150
            Remeras de desarrolladores (RD) - $1250
            Remeras cartoons (RC) - $1250
            Estampados (E) - $950
        `);

        do{
            eleccion = prompt("¿Que producto desea comprar?");
        }while( eleccion.toUpperCase() != 'RP' && eleccion.toUpperCase() != 'RMI' && eleccion.toUpperCase() != 'RD' && eleccion.toUpperCase() != 'RC' && eleccion.toUpperCase() != 'E');

        pago_Total = pago_Total + Comprar(eleccion);

        do{
            seguir_comprando = prompt("¿Desea seguir comprando? (si/no)");
        }while(seguir_comprando.toLowerCase() != 'si' && seguir_comprando.toLowerCase() != 'no');    
    }

    if(seguir_comprando == 'no'){
        let finalizar_Compra = "";

        do{
            finalizar_Compra = prompt(`¿Desea abonar el total de ${pago_Total}?`);
        }while(finalizar_Compra.toLowerCase() != 'si' && finalizar_Compra.toLowerCase() != 'no');

        if(finalizar_Compra == 'si'){
            alert('Gracias por comprar en MI Indumentaria, lo esperamos pronto!');
        }else{
            alert('Guardaremos sus productos para una futura compra!');
        }
    }
}

//Función compra
const Comprar = compra => {

    let precio_Total = 0;

    switch(compra.toUpperCase()){
        case 'RP':
            precio_Total = calcular_Precio(pRemeraPers);
            break;
        case 'RMI':
            precio_Total = calcular_Precio(pRemeraMI);
            break;
        case 'RD':
            precio_Total = calcular_Precio(pRemeraDev);
            break;
        case 'RC':
            precio_Total = calcular_Precio(pRemeraCart);
            break;   
        case 'E':
            precio_Total = calcular_Precio(pEstampado);
            break;
    }

    return precio_Total;
}

//Función calcular precio total
const calcular_Precio = precio => {
    console.log("precio en funcion calcular precio");
    console.log(precio);

    const total_IVA = calcular_IVA(precio);
    let precio_Total = 0;

    precio_Total = precio_Total + total_IVA;
    
    return precio_Total;
} 

//Función calcular el IVA del precio
const calcular_IVA = precio => {
    console.log("precio en funcion calcular IVA");
    console.log(precio);

    const precio_IVA = precio + (precio*0.21);

    return precio_IVA;
}

export { carrito, logear_Registrar };