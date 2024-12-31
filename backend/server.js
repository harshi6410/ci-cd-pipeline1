// server.js
const express = require('express');
const app = express();
const deploymentRoutes = require('./routes/deploymentRoutes');

// Middleware
app.use(express.json());

// API Routes
app.use('/api', deploymentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;  // Export app for testing purposes
