const express = require("express");
const connectDB = require("./src/config/db.config.js");
const routes = require("./src/routers/user.js");

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());

app.use('/', routes);

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});
