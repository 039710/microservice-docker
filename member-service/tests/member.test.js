const {Member} = require('../models/index');
const supertest = require('supertest');
const app = require("../index")

test('Get organisation member of xendit should return all member of xendit [CASE SUCCESS]', () => {
  return supertest(app)
    .get('/xendit/members')
    .expect(200)
    .expect('Content-Type', /json/)
    .expect(res => {
      expect(res.body.members.length).toBeGreaterThan(0);
      expect(res.body.members[0].orgName).toBe('xendit');
    }
  );
});
test('Get organisation member of non exist organisation should return empty result [CASE SUCCESS]', () => {
  return supertest(app)
    .get('/nonExist/members')
    .expect(200)
    .expect('Content-Type', /json/)
    .expect(res => {
      expect(res.body.members.length).toBe(0);
    }
  );
});