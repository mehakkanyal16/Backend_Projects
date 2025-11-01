const express = require('express');
const dbConnect = require('./config/db');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
// Connect to the database
dbConnect();
// Middleware to parse JSON requests
app.use(express.json());
app.use(cookieParser()); 
// Import user routes
const userRoutes = require('./routes/user');
app.use('/api/v1', userRoutes);
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
