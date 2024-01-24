// controllers/tournamentController.test.js
const { createTournament } = require('./tournamentController');
const { Tournament } = require('../models');
const httpMocks = require('node-mocks-http');

// Mock do modelo Sequelize
jest.mock('../models', () => ({
    Tournament: {
        create: jest.fn()
    }
}));

describe('createTournament Controller', () => {
    it('deve criar um torneio com sucesso', async () => {
        // Configurando os mocks
        const request = httpMocks.createRequest({
            method: 'POST',
            url: '/api/tournament',
            body: {
                name: 'Torneio Exemplo'
            }
        });
        const response = httpMocks.createResponse();

        Tournament.create.mockResolvedValue({ name: 'Torneio Exemplo' });

        // Executando o controlador
        await createTournament(request, response);

        // Verificações
        expect(response.statusCode).toBe(201);
        expect(response._getJSONData()).toHaveProperty('mensagem', 'Tournament criado com sucesso!');
    });

    it('deve retornar um erro 400 se o nome não for fornecido', async () => {
        // Configurando os mocks
        const request = httpMocks.createRequest({
            method: 'POST',
            url: '/api/tournament',
            body: {}
        });
        const response = httpMocks.createResponse();

        // Executando o controlador
        await createTournament(request, response);

        // Verificações
        expect(response.statusCode).toBe(400);
        expect(response._getJSONData()).toHaveProperty('erro');
    });
});
