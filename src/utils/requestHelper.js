import request from 'supertest';
import dotenv from 'dotenv';

dotenv.config();

const api = request(process.env.BASE_URL);
export default api;