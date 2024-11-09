# test/app.test.js içeriği
const request = require('supertest');
const app = require('../src/app');

describe('API Tests', () => {
    test('GET / should return hello message', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Hello from Sample App!');
    });

    test('GET /status should return status', async () => {
        const response = await request(app).get('/status');
        expect(response.status).toBe(200);
        expect(response.body.status).toBe('OK');
        expect(response.body.timestamp).toBeDefined();
    });
});