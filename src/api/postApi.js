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

export const addRemovePostLike = async (postId, userId) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BE_URL}/posts/${postId}/addRemoveLike/${userId}`,
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
