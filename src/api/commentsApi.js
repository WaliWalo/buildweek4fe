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

export const addComment = async (body) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BE_URL}/comments`,
      body,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addRemoveLike = async (commentId, userId) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BE_URL}/comments/${commentId}/${userId}`,
      {},
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
