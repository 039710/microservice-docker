const {Member} = require('../models/index');
const supertest = require('supertest');
const app = require("../index")

const testData = [

]
for (let i = 0; i < 30; i++) {
  testData.push({
    orgName: `xendit`,
    avatar_url: `https://i.pravatar.cc/150?img=${i + 1}`,
    followers: Math.floor(Math.random() * 100),
    followings: Math.floor(Math.random() * 100),
    createdAt: new Date(),
    updatedAt: new Date()
  })
}
const initializeCityDatabase = async () => {
  await Member.bulkCreate(testData);
}

const clearCityDatabase = async () => {
  // truncate
  await Member.destroy({ truncate: true, cascade: true, restartIdentity: true })
}

beforeEach(() => {
  return initializeCityDatabase();
});

afterEach(() => {
  return clearCityDatabase();
});
test('Get organisation member of xendit should return all member of xendit [CASE SUCCESS]', () => {
  return supertest(app)
    .get('/orgs/xendit/members')
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
    .get("/orgs/nonExist/members")
    .expect(200)
    .expect("Content-Type", /json/)
    .expect((res) => {
      expect(res.body.members.length).toBe(0);
    });
});