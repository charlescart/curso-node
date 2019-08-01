const fs = require('fs');
const colors = require('colors/safe');

let createFile = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base))
            return reject(colors.red(`Error, a number was expected!`));

        let data = '';

        for (let i = 1; i <= limit; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        /* dependiendo de la ubicacion de ejecucion del comando nodemon cambiara la url */
        fs.writeFile(`tables/table-${base}.txt`, data, (err) => {
            if (err)
                return reject(colors.red(`Error creating table-${base}.txt file!: \n${err}`));

            resolve(colors.green(`table-${base}.txt`));
        });
    });
};

let greet = () => console.log('Hola Mundo!');

let listTable = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limit))
            return reject(colors.red(`Error, base[${base}] or limit[${limit}] not was type number`));

        let data = '';

        for (let i = 1; i <= limit; i++) {
            if (i == 1)
                data += colors.green(`### Table of ${base} ###\n\n`);

            data += colors.magenta(`    ${base} * ${i} = ${(base * i)} \n`);
        }

        if (data == '')
            return reject(colors.red(`Error creating table of ${base}`));

        resolve(data);
    });
}

module.exports = {
    createFile,
    greet,
    listTable,
};