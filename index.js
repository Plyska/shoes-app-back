const express = require("express");
const app = express();
const cors = require("cors");
const { port } = require("./constants");
const { getAllShoes, editShoes, addShoes, deleteShoes } = require("./api");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.get("/all-shoes", cors(corsOptions), async (_, res) => {
  try {
    const data = await getAllShoes();
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});

app.post("/all-shoes", cors(corsOptions), async (req, res) => {
  try {
    const shoes = req.body;
    await addShoes(shoes);
    res.status(200).send({ status: 200, message: "Shoes was added" });
  } catch (e) {
    console.log(e);
  }
});

app.put("/all-shoes/:id", cors(corsOptions), async (req, res) => {
  try {
    const shoes = req.body;
    const shoesId = req.params.id;
    await editShoes(shoesId, shoes);
    res.send({ status: "success" });
  } catch (e) {
    console.log(e);
  }
});

app.delete("/all-shoes/:id", cors(corsOptions), async (req, res) => {
  try {
    const shoesId = req.params.id;
    await deleteShoes(shoesId);
    res.send({ status: "success", message: "Shoes was deleted" });
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;