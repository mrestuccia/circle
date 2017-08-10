const expect = require('chai').expect;
const app = require('supertest')(require('../app'));


describe('Routes', () => {
  describe('/', () => {
    it('is ok', () => {
      return app.get('/').expect(200);
    });
  });
});
