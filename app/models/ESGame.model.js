module.exports = (sequelize, Sequelize) => {
  const ESGame = sequelize.define("esgame", {
    title: {
      type: Sequelize.STRING,
    },
    popularity: {
      type: Sequelize.STRING,
    },
    releaseYear: {
      type: Sequelize.INTEGER,
    },
    completionHours: {
      type: Sequelize.INTEGER,
    },
    imgURL: {
      type: Sequelize.STRING,
    },
  });
  return ESGame;
};
