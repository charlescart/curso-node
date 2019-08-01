const opts = {
    base: {
        demand: true,
        alias: 'b',
    },
    limit: {
        alias: 'l',
        default: 10,
    }
};

const { argv } = require('yargs')
    .command('list', 'list the table multiply', opts)
    .command('create', 'create file of table', opts)
    .help(); // para que cuando lancen `node app list` u `node app list --help` aparezca la ayuda.

module.exports = {
    argv,
}