module.exports = (app) => {
  const ESGames = require("../controllers/ESGame.controller.js");

  let router = require("express").Router();

  //Create new game
  router.post("/", ESGames.create);

  //Retrieve all games
  router.get("/", ESGames.findAll);
};
