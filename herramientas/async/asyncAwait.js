
//
async function hola(nombre) {
    //Promise es una funcion asyncrona
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('hola,' + nombre);
            resolve(nombre)
        }, 1000)
        //modificar segundos 2000
    });
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Bla bla bla');
            resolve(nombre);
            // reject('hay un error');
        }, 3000)
    })
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Adios,' + nombre);
            resolve();
        }, 2000);
        //modificar segundos 1000
    });
}


async function main() {
    let nombre = await hola('David')
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Terminamos el proceso....');

}

console.log('Empezamos el proceso....');
main();

console.log('Va a ser la segunda instruccioón');