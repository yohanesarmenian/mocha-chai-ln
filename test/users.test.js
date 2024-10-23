import { expect } from "chai";
import request from "supertest";
import app from "../app.js"; // Ensure this points to your Express app

describe("Users Feature", () => {
    it("Success Users", async () => {
        const response = await request(app)
            .get("/api/users?page=2"); // Update the endpoint to match the server code

        // ASSERTION
        expect(response.status).to.equal(200);
    });
});