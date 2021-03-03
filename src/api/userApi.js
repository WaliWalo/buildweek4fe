import axios from "../helpers/apiCall";

export const loginUser = async (body) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BE_URL}/login`,
      body,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async (body) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BE_URL}/register`,
      body,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
