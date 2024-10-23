// controllers/registerController.js
import request from "supertest"; // Import supertest
const baseUrl = "https://reqres.in";

export async function register(payload) {
    const response = await request(baseUrl)
        .post("/api/register")
        .send(payload);
    return response;
}