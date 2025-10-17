const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/mongoose');

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.get('/', (req, res) => {
    res.send('DevConnect  backend is running and is connected to MongoDB');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on https://localhost:${PORT}`);
});