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
const config = {
    title: 'Express Status',
    path: '/status',
    spans: [{
        interval: 1,
        retention: 60
    }, {
        interval: 5,
        retention: 60
    }, {
        interval: 15,
        retention: 60
    }],
    chartVisibility: {
        cpu: true,
        mem: true,
        load: true,
        responseTime: true,
        rps: true,
        statusCodes: true
    },
    healthChecks: [
        {
            protocol: 'http',
            host: 'localhost',
            path: '/test',
            port: '4000'
        }
    ],
    ignoreStartsWith: '/admin'
}

/**
 * API routes.
 */
app.post("/getCityNames", weatherController.getCityNames);
app.post("/getWeatherData", weatherController.getWeatherData);
app.use(require('express-status-monitor')(config));
app.get('/test', (req, res) => {
    res.send('Hello');
})
export default app;
