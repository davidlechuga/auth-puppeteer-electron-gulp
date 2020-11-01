// las promesas a diferencia de los callback te deja anidar funciones

const { resolve } = require("path");

//
function hola(nombre) {
    //Promise es una funcion asyncrona
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('hola,' + nombre);
            resolve(nombre)
        }, 1000)
        //modificar segundos 2000
    });
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Bla bla bla');
            resolve(nombre);
            // reject('hay un error');
        }, 3000)
    })
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Adios,' + nombre);
            resolve();
        }, 2000);
        //modificar segundos 1000
    });
}

console.log('Iniciando el proceso....');

hola('David')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminado el proceso');
    })
    //Para no propagar el error en las funciones, en base de datos etc, esta catch
    .catch(error => {
        console.log(`error: ${error}`);
    })
