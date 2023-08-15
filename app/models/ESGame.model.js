module.exports = (sequelize, Sequelize) => {
  const ESGame = sequelize.define("esgame", {
    title: {
      type: Sequelize.STRING,
    },
    popularity: {
      type: Sequelize.STRING,
    },
    releaseyear: {
      type: Sequelize.INTEGER,
    },
    completionhours: {
      type: Sequelize.INTEGER,
    },
  });
  return ESGame;
};
