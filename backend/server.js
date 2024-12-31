const express = require('express');
const app = express();
const deploymentRoutes = require('./routes/deploymentRoutes');

app.use(express.json());
app.use('/api', deploymentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
