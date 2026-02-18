const request = require('supertest')
const expect = require('chai').expect

process.env.NODE_ENV = "test"
const app = require("../server.js")

describe("GET /", () => {
    it("Test server", async () => {
        const res = await request(app).get("/")
           
        expect(res.status).to.equal(200);
        expect(res.text).to.equal("Reply")
    });
})

describe("GET /hex-to-rgb", () => {
    it("Should convert hex to rgb", async () => {
        const res = await request(app).get("/hex-to-rgb?hex=7D1937")
           
        expect(res.status).to.equal(200);
        expect(res.text).to.equal("R:125,G:25,B:55")
    });
})