const request = require("supertest");
const { expect } = require("chai");

/******  3e652e8a-4106-4e99-8e65-993d994c4539  *******/async function login(payload) {
    const response = await request("https://reqres.in")
        .post("/api/login")
        .send(payload)
    return response
};
