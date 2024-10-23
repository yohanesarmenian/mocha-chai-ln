import request from "supertest"; // Use ES module syntax
import { expect } from "chai"; // Use ES module syntax

const baseUrl = "https://reqres.in"; // Define the base URL for better readability

// Define the register function
async function register(payload) {
    const response = await request(baseUrl) // Use the base URL defined above
        .post("/api/register") // Adjust the endpoint for registration
        .send(payload);
    return response;
}

describe("Register Feature", () => {
    it("Success Register", async () => {
        const payload = {
            "name": "morpheus",
            "job": "leader"
        };
        const response = await register(payload);

        // ASSERTION    
        expect(response.status).to.equal(200); // No need to await response here            
    });

    it("Failed Register", async () => {
        const payload = {
            "name": "morpheus", // Missing job
        };
        const response = await register(payload);

        // ASSERTION    
        expect(response.status).to.equal(400); // No need to await response here            
    });
});