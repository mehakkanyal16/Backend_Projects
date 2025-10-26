const express = require('express');
const dbConnect = require('./config/db');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
// Connect to the database
dbConnect();
// Middleware to parse JSON requests
app.use(express.json());
// Import user routes
const userRoutes = require('./routes/user');
app.use('/api/v1', userRoutes);
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
