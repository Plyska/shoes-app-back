const axios = require("axios");
const { url } = require("../constants");

const getAllShoes = async () => {
    return await axios.get(url).then(res => res.data);
};

module.exports = { getAllShoes };
