const { config } = require("dotenv");

config();

const port = process.env.PORT || 3000;
const dbUri = process.env.DB_URI;
const geminiAiApiKey = process.env.API_KEY;

module.exports = { port, dbUri, geminiAiApiKey };
