import axios from "axios";

const API_URL = "";

const register = (username, age, email, password) => {
  return axios.post(API_URL + "/api/auth/register", {
    user: {
      username,
      age,
      email,
      password
    }
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "/api/auth/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("stream-movie-user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("stream-movie-user");
};

const AuthService = {
  register,
  login,
  logout
};

export default AuthService;