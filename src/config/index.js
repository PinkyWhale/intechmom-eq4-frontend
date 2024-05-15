const express = require("express");
const { config } = require("dotenv");

config();

const app = express();

const port = process.env.PORT || 3000;
const dbUri = process.env.DB_URI;
const openAiApiKey = process.env.OPEN_AI_API_KEY;

module.exports = { app, port, dbUri, openAiApiKey };
