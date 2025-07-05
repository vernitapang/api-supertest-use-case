import { expect } from 'chai';
import api from '../utils/requestHelper.js';

describe('User API tests', function() {
  it('should retrieve all users', async function() {
    const response = await api.get('/users');
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
  });

  it('should retrieve a specific user', async function() {
    const response = await api.get('/users/1');
    expect(response.status).to.equal(200);
    expect(response.body).to.include.keys('id', 'name', 'email');
  });
});
