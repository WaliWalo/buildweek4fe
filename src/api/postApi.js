import axios from "../helpers/apiCall";

export const getPosts = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BE_URL}/posts`, {
      withCredentials: true,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
