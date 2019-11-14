const request = require('supertest');
const app = require('./app');

describe('server', () => {
  describe('GET / endpoint', () => {
    it('should return 200 OK', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
    });
    it('should return correct response body', async () => {
      const response = await request(app).get('/');
      expect(response.body).toEqual({ api: 'up' });
    });
  });
});
