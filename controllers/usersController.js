import request from "supertest"; // Import supertest
const baseUrl = "https://reqres.in";

export async function getUsers() {
    const response = await request(baseUrl).get("/api/users?page=2");
    return response;
}   