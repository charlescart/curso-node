const { createFile, greet, listTable } = require('./multiply/multiply');
const { argv } = require('./config/yargs');
const colors = require('colors/safe');

let command = argv._[0];

switch (command) {
    case 'list':
        listTable(argv.base, argv.limit)
            .then(table => {
                console.log(table);
            })
            .catch((err) => {
                console.log(err);
            });
        break;

    case 'create':
        createFile(argv.base, argv.limit)
            .then((fileName) => {
                console.log(`The file ${fileName} has been created success!`);
            })
            .catch((err) => {
                console.log(err);
            });
        break;

    default:
        console.log(colors.red(`command [${command}] not fund!`));
        break;
}

// console.log(argv);