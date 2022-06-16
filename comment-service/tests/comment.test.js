const app = require('../index');
const request = require('supertest');
const {Comment} = require('../models');

// setup test data
const testData = [
  {
    orgName : 'xendit',
    comment : 'xendit is a good company',
    softDeleted : false,
  },
  {
    orgName : 'xendit',
    comment : 'xendit provide good service',
    softDeleted : false,
  },
  {
    orgName: 'test',
    comment: 'this is a dummy test',
    softDeleted: false,
  },
]
const initializeCityDatabase = async () => {
  await Comment.bulkCreate(testData);
}

const clearCityDatabase = async () => {
  // truncate
  await Comment.destroy({ truncate: true, cascade: true, restartIdentity: true })
}

beforeEach(() => {
  return initializeCityDatabase();
});

afterEach(() => {
  return clearCityDatabase();
});

describe('GET /orgs/:orgName/Comments',()=>{
  test('should get only non deleted comments and status 200', async () => {
    const response = await request(app).get('/orgs/xendit/comments');
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(2);
  })
})

describe('POST /orgs/:orgName/comments',()=>{
  test('should return posted comments and status 201', async () => {
    const response = await request(app).post('/orgs/test/comments').send({
      comment: 'This is a test comment',
    });
    expect(response.statusCode).toBe(201);
    expect(response.body.comment).toBe('This is a test comment');
  })
})


describe('DELETE /orgs/:orgName/comments', () => {
  test('should soft delete comment if exists', async () => {
    const response = await request(app).delete('/orgs/test/comments')
    expect(response.statusCode).toBe(200);
  });
  test('should return 404 if orgName not exists', async () => {
    const response = await request(app).delete('/orgs/test123/comments')
    expect(response.statusCode).toBe(404);
  });
  test('should return 0 comments', async () => {
    const response = await request(app).get('/orgs/test/comments');
    expect(response.statusCode).toBe(200);
  })
});

