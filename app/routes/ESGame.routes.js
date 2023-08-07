module.exports = (app) => {
  const ESGames = require("../controllers/ESGame.controller.js");

  let router = require("express").Router();

  //Create new game
  router.post("/", ESGames.create);

  //Retrieve all games
  router.get("/", ESGames.findAll);

  //Retrieve single game by id
  router.get("/:id", ESGames.findOne);

  //Update game by id
  router.put("/:id", ESGames.update);

  //Delete single game by id
  router.delete("/:id", ESGames.delete);

  //Delete all games
  router.delete("/", ESGames.deleteAll);

  app.use("/api/ESGames", router);
};
