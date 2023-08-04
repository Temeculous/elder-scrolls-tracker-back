module.exports = (sequelize, Sequelize) => {
  const ESGame = sequelize.define("esgame", {
    title: {
      type: Sequelize.STRING,
    },
    popularity: {
      type: Sequelize.STRING,
    },
    releaseYeae: {
      type: Sequelize.INTEGER,
    },
    completionHours: {
      type: Sequelize.INTEGER,
    },
  });
  return ESGame;
};
