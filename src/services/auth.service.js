import axios from "axios";

// const API_URL_AUTH = `${process.env.API_URL}/auth/`;
const API_URL_AUTH = `http://localhost:3030/api/auth/`;

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL_AUTH + "signin", {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
} 

export default new AuthService()
