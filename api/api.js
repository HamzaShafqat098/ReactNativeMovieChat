import axios from "axios";

const API_BASE_URL =
  "https://chatgptpromt-flask-app-3e93bb6fd690.herokuapp.com";

const signup = async (email, username, password) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/user/signup`,
      {
        email: email,
        display_name: username,
        password: password,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.data && response.data.error) {
      throw new Error(response.data.error);
    } else {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};

const getMovies = async (apiUrl) => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { signup, getMovies };