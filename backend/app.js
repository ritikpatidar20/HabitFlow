const express = require('express');
const dotenv = require('dotenv');
const habitRoutes = require('./routes/habitRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', habitRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));