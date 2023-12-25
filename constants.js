const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT;
const api_key = process.env.APP_KEY;
const url = `https://crudcrud.com/api/${api_key}/shoes` 

module.exports = { port, api_key, url }