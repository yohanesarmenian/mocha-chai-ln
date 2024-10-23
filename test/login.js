import request from "supertest"; // Use ES module syntax
import { expect } from "chai"; // Use ES module syntax

const baseUrl = "https://reqres.in"; // Define the base URL for better readability

async function login(payload) {
    const response = await request(baseUrl) // Use the base URL defined above
        .post("/api/login")
        .send(payload);
    return response;
}

describe("Login Feature", () => {
    it("Success Login", async () => {
        const payload = {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        };
        const response = await login(payload);

        // ASSERTION
        expect(response.status).to.equal(200); // No need to await response here
    });

    it("Failed Login", async () => {
        const payload = {
            "email": "peter@klaven" // Missing password
        };
        const response = await login(payload);

        // ASSERTION
        expect(response.status).to.equal(400); // No need to await response here
    });
});