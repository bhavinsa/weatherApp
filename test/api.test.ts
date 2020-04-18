import request from "supertest";
import app from "../src/app";
import logger from "../src/util/logger";

// close the server after each test
afterEach((done) => {
  done();
});


describe("GET /getWeatherData", () => {
    it("should return 404 OK", () => {
        return request(app).get("/getWeatherData")
            .then(res => {
                expect(res.status).toBe(404);
            });
    });
});

describe("GET /getCityNames", () => {
    it("should return 404 OK", () => {
        return request(app).get("/getCityNames")
            .then(res => {
                expect(res.status).toBe(404);
            });
    });
});


describe("POST /getWeatherData", () => {
    it("should return 200 OK", () => {
        return request(app).post("/getWeatherData")
        .then(res => {
            expect(res.status).toBe(200);
            expect(res.text).toContain('errors');
        });
    });
    it("param checking", () => {
        return request(app).post("/getWeatherData").send({cityIds: ''})
        .then(res => {
            expect(res.status).toBe(200);
            expect(res.text).toContain('errors');
        });
    });
});


describe("POST /getCityNames", () => {
    it("should return 200 OK", () => {
        return request(app).post("/getCityNames")
        .then(res => {
            expect(res.status).toBe(200);
            expect(res.text).toContain('country');
        });
    })
});
