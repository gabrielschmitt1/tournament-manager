// controllers/tournamentController.js
const { Tournament } = require('../models/Tournament'); // Ajuste o caminho conforme necessário

const createTournament = async (req, res) => {
    try {
        const { name } = req.body;

        const newTournament = await Tournament.create({ name });

        res.status(201).json({ mensagem: "Tournament criado com sucesso!", Tournament: newTournament });
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

module.exports = {
    createTournament
};
