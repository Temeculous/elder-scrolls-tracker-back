const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

let corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//do this when out of development - db.sequelize.sync().then(() => {console.log('synced db')})
const db = require("./app/models");
db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("dropped and re-synced db");
  })
  .catch((err) => {
    console.log("Failed to sync db" + err.message);
  });

app.get("/", (req, res) => {
  res.json({ message: "All is well, hello world" });
});

require("./app/routes/ESGame.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
