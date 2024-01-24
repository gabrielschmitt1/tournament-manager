// tests/integration/tournamentRoutes.test.js
const request = require('supertest');
const app = require('../../app'); // Ajuste o caminho para sua instância do Express
const { Tournament } = require('../../models');

describe('Tournament API', () => {

    let server;
    beforeAll(() => {
        server = app.listen(3000); // Inicia o servidor em uma porta específica
    });

    it('POST /api/tournament - Cria um novo torneio', async () => {
        const res = await request(app)
            .post('/api/tournament')
            .send({
                name: 'Torneio Teste'
            });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('mensagem', 'Tournament criado com sucesso!');
    });

    afterAll(async () => {
        try {
            // Limpa os registros de torneios
            await Tournament.destroy({ where: {} });

            // Fecha o servidor
            server.close();
        } catch (error) {
            console.error('Falha ao limpar banco de dados:', error);
        }
    });


});
