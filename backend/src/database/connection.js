const knex = require('knex');
const configuration = require('../../knexfile');

const conf = process.env.NODE_ENV === 'teste' ? configuration.teste : configuration.development;
const connection = knex(conf);


module.exports = connection;
