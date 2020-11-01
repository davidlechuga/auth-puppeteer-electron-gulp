/* las funciones de JS son elementos de primer nivel,
es Decir, lo podemos utilizar como queramos, en este ejemplo como parametros y eso es un callback.*/

/*

function soyAsincrona(miCallback) {
    // console.log('Hola, soy una funcion asuncrona');
    setTimeout(function () {
        //  la funcion se ejecuta cada 1000 mili segundo = 1 segundo
        console.log('Estoy siendo asíncrona');
        miCallback();
    }, 2000)
}
console.log('iniciando proceso....');
// soyAsincrona();
// console.log('terminando proceso....');
//acepta parametro callback, y este callback hace cualquier cosa.
soyAsincrona(function () {
    console.log('terminando proceso....');
});

*/


function hola(nombre, miCallback) {
    // console.log('Hola, soy una funcion asuncrona');
    setTimeout(function () {
        //  la funcion se ejecuta cada 1000 mili segundo = 1 segundo
        console.log('hola,' + nombre);
        // miCallback();
        miCallback(nombre)
    }, 1000)
    //modificar segundos 2000
}

function adios(nombre, otrocallback) {
    setTimeout(function () {
        console.log('Adios,' + nombre);
        otrocallback();
    }, 2000);
    //modificar segundos 1000
}

console.log('iniciando proceso....');

// soyAsincrona();
// console.log('terminando proceso....');
//acepta parametro callback, y este callback hace cualquier cosa.

// hola('Carlos', function () {
//     adios('Carlos', function () {
//         console.log('terminando proceso....');
//     })
// });
//el nombre ahora me lo da mi callback
hola('Carlos', function (nombre) {
    adios(nombre, function () {
        console.log('terminando proceso....');
    })
});

//  cambiamos el orden que se ejecuta la funcion modificando el setimeout
// hola('Carlos', function () { });
// adios('Carlos', function () { });