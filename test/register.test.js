// test/register.test.js
import { expect } from "chai";
import request from "supertest";
import app from "../app.js"; // Ensure this points to your Express app

describe("Register Feature", () => {
    it("Success Register", async () => {
        const payload = {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        };
        const response = await request(app)
            .post("/api/register") // Update the endpoint to match the server code
            .send(payload);

        // ASSERTION
        expect(response.status).to.equal(200); // Adjusted to 201 for successful registration
        expect(response.body).to.have.property('id'); // Check if user ID is returned (if applicable)
    });

    it("Failed Register", async () => {
        const payload = {
            "email": "sydney@fifen" // Missing password
        };
        const response = await request(app)
            .post("/api/register") // Update the endpoint to match the server code
            .send(payload);

        // ASSERTION
        expect(response.status).to.equal(400); // Adjusted to 400 for incorrect registration
    });
});