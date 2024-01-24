// controllers/tournamentController.js
const { Tournament } = require('../models');

const createTournament = async (req, res) => {
    try {
        const { name } = req.body;

        // Validação de entrada
        if (!name) {
            return res.status(400).json({ erro: "Nome é obrigatório" });
        }

        // Tentativa de criar um novo torneio
        const newTournament = await Tournament.create({ name });

        // Resposta de sucesso
        res.status(201).json({ mensagem: "Tournament criado com sucesso!", Tournament: newTournament });
    } catch (error) {
        console.error("Erro ao criar torneio:", error);

        // Tratamento de erros específicos do Sequelize
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ erro: "Um torneio com esse nome já existe" });
        }
        if (error.name === 'SequelizeValidationError') {
            const mensagens = error.errors.map(err => err.message);
            return res.status(400).json({ erro: mensagens.join(", ") });
        }

        // Para outros tipos de erros não específicos do Sequelize
        return res.status(500).json({ erro: "Erro interno no servidor" });
    }
};

module.exports = {
    createTournament
};
