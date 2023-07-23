const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const connectDB = require('./db');
const notes = require('./routes/notes');
const auth = require('./routes/auth');

const app = express();
const PORT = 3000;
connectDB();

app.use(cors());
app.use(express.json());

app.use('/notes', notes);
app.use('/auth', auth);

app.listen(PORT, () => {
    console.log(`server starting at port ${PORT}...`);
});

