import { expect } from 'chai';
import api from '../utils/requestHelper.js';

describe('Post API tests', function() {
  it('should retrieve all posts', async function() {
    const response = await api.get('/posts');
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
  });

  it('should retrieve a specific post', async function() {
    const response = await api.get('/posts/1');
    expect(response.status).to.equal(200);
    expect(response.body).to.include.keys('id', 'title', 'body');
  });

  it('should create a new post', async function() {
    const response = await api
      .post('/posts')
      .send({
        title: 'Lorem Ipsum',
        body: 'This is a sample post',
      });

    expect(response.status).to.equal(201);
  });

  it('should update a post', async function() {
    const response = await api
      .put('/posts/1')
      .send({
        title: 'Lorem Ipsum Updated',
        body: 'This is an updated post',
      });

    expect(response.status).to.equal(200);
  });

  it('should delete a post', async function() {
    const response = await api.delete('/posts/1');
    expect(response.status).to.equal(200);
  });

  
  it('should retrieve posts by user id', async function() {
    const response = await api.get('/posts?userId=1');
    expect(response.status).to.equal(200);
  });

  it('should retrieve a specific post by its id', async function() {
    const expResp = {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
    const response = await api.get('/posts/1');
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(expResp);
  });
});
