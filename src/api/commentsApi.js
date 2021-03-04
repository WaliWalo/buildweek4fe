import axios from "../helpers/apiCall";

export const getComments = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}/comments`,
      { withCredentials: true }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
