import { expect } from 'chai';
import api from '../utils/requestHelper.js';

describe('User API tests', function() {
  it('should retrieve all users', async function() {
    const response = await api.get('/users');
    expect(response.status).to.equal(200);
    expect(response.body.length).to.equal(10);
  });

  it('should retrieve a specific user', async function() {
    const response = await api.get('/users/1');
    expect(response.status).to.equal(200);
  });

  it('should delete a user', async function() {
    const response = await api.delete('/users/1');
    expect(response.status).to.equal(200);
  });
  
  it('should create a new user', async function() {
    const response = await api
      .post('/users')
      .send({
        name: 'John Doe',
        email: 'john.doe@example.com',
      });

    expect(response.status).to.equal(201);
  });

  it('should update a user', async function() {
    const response = await api
      .put('/users/2')
      .send({
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
      });
    expect(response.status).to.equal(200);
  });
  
  it('should retrieve a specific user by email', async function() {
    const response = await api.get('/users?email=Karley_Dach@jasper.info');
    expect(response.status).to.equal(200);
    expect(response.body[0].id).to.equal(6);
  });

  it('should retrieve a specific user by name', async function() {
    const response = await api.get('/users?username=Leopoldo_Corkery');
    expect(response.status).to.equal(200);
    expect(response.body[0].id).to.equal(6);
  });
});
