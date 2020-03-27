const knex = require('knex'); //importa
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;