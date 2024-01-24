// routes/tournamentRoutes.js
const express = require('express');
const router = express.Router();
const tournamentController = require('../controllers/tournamentController');

// Rota para criar um novo Tournament
router.post('/tournament', tournamentController.createTournament);

module.exports = router;
