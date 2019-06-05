// All logic for the express server

const express = require('express');

const app = express();

app.listen(4000, () => {
    console.log("Listening on port 4000");
});