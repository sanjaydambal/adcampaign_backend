const Dashboard = require('../models/Dashboard');

// Service to get dashboard data
const getDashboardData = async () => {
    try {
        const data = await Dashboard.findOne(); // Fetch the single document
        return data;
    } catch (err) {
        throw new Error('Error fetching dashboard data');
    }
};

module.exports = {
    getDashboardData
};
