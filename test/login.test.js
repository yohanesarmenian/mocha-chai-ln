// test/login.test.js
import { expect } from "chai";
import request from "supertest";
import app from "../app.js"; // Ensure this points to your Express app

describe("Login Feature", () => {
    let token; // Variable to store the token

    it("Success Login", async () => {
        const payload = {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        };
        const response = await request(app) // Use supertest to make a request
            .post("/api/login") // Adjust the endpoint to your login route
            .send(payload);

        // ASSERTION
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('token'); // Check if token is present
        token = response.body.token; // Store the token from the response
    });

    it("Failed Login", async () => {
        const payload = {
            "email": "peter@klaven" // Missing password
        };
        const response = await request(app) // Use supertest to make a request
            .post("/api/login") // Adjust the endpoint to your login route
            .send(payload);

        // ASSERTION
        expect(response.status).to.equal(400); // Adjusted to 400 for incorrect login
    });
});