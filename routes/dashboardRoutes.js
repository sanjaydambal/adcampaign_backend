const express = require('express');
const router = express.Router();
const { fetchDashboardData } = require('../controllers/dashboardController');

router.get('/', fetchDashboardData);

module.exports = router;
