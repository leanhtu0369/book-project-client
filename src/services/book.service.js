import axios from 'axios';
import authHeader from './auth-header';

// const API_URL_BOOK = `${process.env.API_URL}/book/`;
const API_URL_BOOK = `http://localhost:3030/api/book/`;

class BookService {
  getBooks() {
    return axios
    .get(API_URL_BOOK, { headers: authHeader() })
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

export default new BookService();
