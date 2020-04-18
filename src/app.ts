import express from "express";
// compresses requests
import compression from "compression";
import bodyParser from "body-parser";

import { loadEnv } from "./util/secrets";
loadEnv();

// Controllers (route handlers)
import * as weatherController from "./controllers/weatherController";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT);
app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));

/**
 * API routes.
 */
app.post("/getCityNames", weatherController.getCityNames);
app.post("/getWeatherData", weatherController.getWeatherData);
export default app;
