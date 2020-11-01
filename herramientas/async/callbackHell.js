
function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('hola,' + nombre);
        miCallback(nombre)
    }, 1000)
    //modificar segundos 2000
}

function hablar(callbackHablar) {
    setTimeout(function () {
        console.log('Bla bla bla');
        callbackHablar();
    }, 3000)
}

function adios(nombre, otrocallback) {
    setTimeout(function () {
        console.log('Adios,' + nombre);
        otrocallback();
    }, 2000);
    //modificar segundos 1000
}

//funcion recursiva
function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function () {
            // veces -1  = --veces
            conversacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback);
    }
}

console.log('iniciando proceso....');
hola('David', function (nombre) {
    conversacion(nombre, 3, function () {
        console.log('proceso terminado');
    })
});

//es verdad que funciona la asincronia pero no es la forma de hacer las cosas, a esto se le llama callbackHell
// hola('Carlos', function (nombre) {
//     hablar(function () {
//         hablar(function () {
//             adios(nombre, function () {
//                 console.log('terminando proceso....');
//             })
//         })
//     })
// });

