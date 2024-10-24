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

    it("Sucess GetOne User", async () => {
        const userId = 2;
        const response = await request(app)
            .get(`/api/users/${userId}`)

        //ASSERTION
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property("data");
        expect(response.body.data).to.have.property("id", userId);
    });
});