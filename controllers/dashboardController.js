const { getDashboardData } = require('../services/dashboardService');

const fetchDashboardData = async (req, res) => {
    try {
        const data = await getDashboardData();
        if (!data) {
            return res.status(404).json({ message: 'No dashboard data found' });
        }
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    fetchDashboardData
};
