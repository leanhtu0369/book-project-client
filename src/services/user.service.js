import axios from 'axios';
import authHeader from './auth-header';

// const API_URL_USER = `${process.env.API_URL}/user/`;
const API_URL_USER = `http://localhost:3030/api/user/`;

class UserService {
  async getUsers() {
    return await axios
    .get(API_URL_USER, { headers: authHeader() })
      .then(function (response) {
        // handle success

        return response.data;
      })
      .catch(function (error) {
        // handle error
        throw error;
      });
  }
}

export default new UserService();
