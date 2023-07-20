const express = require('express');

const listRoute = require('./routes/list');

const app = express();
const PORT = 3000;

app.use('/list', listRoute);

app.listen(PORT, () => {
    console.log(`server starting at port ${PORT}...`);
});

