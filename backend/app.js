const { Sequelize } = require('sequelize');
const config = require('./config/config'); // Ajuste o caminho conforme necessário
const express = require('express');
const app = express();

// Importe seus modelos aqui
const { Tournament } = require('./models'); // Ajuste o caminho conforme necessário

const sequelize = new Sequelize(config.development);

// Função assíncrona para conectar ao banco de dados e sincronizar modelos
const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        //console.log('Conexão estabelecida com sucesso.');

        // Sincroniza todos os modelos com o banco de dados
        await sequelize.sync({ force: false }); // force: true irá apagar e recriar as tabelas
        //console.log('Modelos sincronizados com sucesso.');
    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados ou sincronizar os modelos:', error);
    }
};

connectToDatabase();

const tournamentRoutes = require('./routes/tournamentRoutes'); // Ajuste o caminho conforme necessário

app.use(express.json());

// Definindo as rotas
app.use('/api', tournamentRoutes);


// Configuração do app, rotas, etc.
module.exports = app;