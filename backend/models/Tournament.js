// models/Tournament.js
module.exports = (sequelize, DataTypes) => {
    const Tournament = sequelize.define('Tournament', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        // Adicione aqui mais campos conforme necessário
    });

    return Tournament;
};
