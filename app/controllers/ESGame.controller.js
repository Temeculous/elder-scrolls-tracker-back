const db = require("../models");
const ESGame = db.esgame;
const Op = db.Sequelize.Op;

//Create new game instance
exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: "Title is required" });
    return;
  }
  const game = {
    title: req.body.title,
    popularity: req.body.popularity,
    releaseYear: req.body.releaseYear,
    completionHours: req.body.completionHours,
    imgURL: req.body.imgURL,
  };

  ESGame.create(game)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.statys(500).send({
        message: err.message || "An error occured while creating new game!",
      });
    });
};

//Retrieve all games
exports.getAll = (req, res) => {
  const title = req.query.title;
  let condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  ESGame.getAll({ where: condition })
    .then((data) => {
      tes.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({
          message: err.message || "An error occured while retrieving ES Games!",
        });
    });
};

//Retrieve single game by id
exports.getOne = (req, res) => {};

//Update single game by id
exports.update = (req, res) => {};

//Delete single game by id
exports.deleteOne = (req, res) => {};

//Delete all games from db
exports.deleteAll = (req, res) => {};
