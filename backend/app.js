const { Sequelize } = require('sequelize');
const config = require('./config/config'); // Ajuste o caminho conforme necessário
const express = require('express');
const app = express();

const sequelize = new Sequelize(config.development);

// Função assíncrona para conectar ao banco de dados
const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão estabelecida com sucesso.');
    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error);
    }
};

connectToDatabase();

const tournamentRoutes = require('./routes/tournamentRoutes'); // Ajuste o caminho conforme necessário

app.use(express.json());

// Definindo as rotas
app.use('/api', tournamentRoutes);

// Restante do código...
