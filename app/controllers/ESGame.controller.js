const db = require("../models");
const ESGame = db.esgame;
const Op = db.Sequelize.Op;
//Op is just operators from Sequelize

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
exports.findAll = (req, res) => {
  const title = req.query.title;
  let condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  ESGame.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "An error occured while retrieving ES Games!",
      });
    });
};

//Retrieve single game by id
exports.findOne = (req, res) => {
  const id = req.params.id;

  ESGame.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({ message: `Cannot find game with id ${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving game with id" + id });
    });
};

//Update single game by id
exports.update = (req, res) => {
  const id = req.params.id;

  ESGame.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Game successfully updated" });
      } else {
        res.send({
          message: `Cannot update game with id ${id} Check that all fields are filled in!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating game with id" + id,
      });
    });
};

//Delete single game by id
exports.delete = (req, res) => {
  const id = req.params.id;

  ESGame.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Game was deleted successfully",
        });
      } else {
        res.send({
          message: `Cannot delete game with id ${id} it may have not been found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete game with id" + id,
      });
    });
};

//Delete all games from db
exports.deleteAll = (req, res) => {
  ESGame.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} games were deleted successfully` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "An error occurred while deleting games",
      });
    });
};
