const mongoose = require('mongoose');

// Define Schema and explicitly set collection name to 'dashboard'
const dashboardSchema = new mongoose.Schema({
    bookedLeads: Number,
    adSpendMicrosoft: Number,
    clicksMicrosoft: Number,
    clicksCalls: String,
    adSpendFacebook: Number,
    checkinsFacebook: Number,
    adSpendYelp: Number
}, { collection: 'dashboard' }); // Specify the collection name

// Create and export the model
const Dashboard = mongoose.model('Dashboard', dashboardSchema);

module.exports = Dashboard;
