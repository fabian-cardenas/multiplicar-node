const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} No es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${limite} No es un número`);
            return;
        }

        console.log('========================================='.green);
        console.log(`============Tabla del ${base}============`.red);
        console.log('=========================================='.green);


        for (i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i} \n`);
        }
    })


}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} No es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}