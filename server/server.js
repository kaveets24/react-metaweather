var express = require("express");
var cors = require("cors");
var app = express();
const axios = require("axios");
require("dotenv").config({ path: "../.env" });

app.use(cors());
app.get("/", async function(req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.get("/api/location/search/:location", async (req, res) => {
  let response = await axios.get(
    `https://www.metaweather.com/api/location/search/?query=${req.params.location}`
  );
  if (response.data.length) {
    res.status(200).send(response.data);
  } else {
    res.status(200).send(null);
  }
});

app.get("/api/location/:woed", async (req, res) => {
  let response = await axios.get(`https://www.metaweather.com/api/location/${req.params.woed}`)
  if (response.data) {
    res.status(200).send(response.data);
  } else {
    res.status(200).send(null);
  }
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "client/build")));

  const path = require('path');
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}
let port = 8000;

app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});
