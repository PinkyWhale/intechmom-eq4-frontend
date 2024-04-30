import express from "express";
import connectDB from "./src/config/db.config.js";
import routes from "./src/routers/user.js";


const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());


app.use('/', routes)

app.get('/', (req, res) => {
    res.send('Welcome')
});

app.listen(3000, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});