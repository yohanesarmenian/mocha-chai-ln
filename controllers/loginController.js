// controllers/loginController.js
import request from "supertest"; // Import supertest
const baseUrl = "https://reqres.in"; // Define the base URL for better readability

export async function login(payload) {
    const response = await request(baseUrl)
        .post("/api/login") // Adjust the endpoint for login
        .send(payload);
    return response;
}