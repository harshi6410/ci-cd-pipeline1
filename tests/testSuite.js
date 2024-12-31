// test/deployment.test.js
const request = require('supertest');
const app = require('../backend/server');

describe('API Tests', () => {
    it('should return deployment success message', async () => {
        const res = await request(app).post('/api/deploy');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Deployment triggered successfully!');
    });
});
