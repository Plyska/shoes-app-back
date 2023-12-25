const axios = require("axios");
const { url } = require("../constants");

const getAllShoes = async () => {
    return await axios.get(url).then(res => res.data);
};

const editShoes = async (shoesId, shoes) => {
    return await axios.put(`${url}/${shoesId}`, shoes);
};

const addShoes = async (shoes) => {
    return await axios.post(url, shoes).then(res => res.data);
}

const deleteShoes = async (shoesId) => {
    return await axios.delete(`${url}/${shoesId}`);
}

module.exports = { getAllShoes, editShoes, addShoes, deleteShoes };
