const express = require("express");
const app = express();
const cors = require("cors");
const { port } = require("./constants");
const { getAllShoes } = require("./api");

app.use(cors());

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

app.post("/all-shoes", cors(corsOptions), async (_, res) => {
    try {
        // const { name, brand }
    } catch (e) {
      console.log(e);
    }
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;