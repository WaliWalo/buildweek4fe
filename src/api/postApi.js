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

export const postPost = async (content) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BE_URL}/posts/`,
      { content },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {}
};

export const postPics = async (postId, file) => {
  try {
    var formdata = new FormData();
    console.log(file);
    file.forEach((f) => {
      formdata.append("picture", f);
    });

    const response = await fetch(
      `${process.env.REACT_APP_BE_URL}/posts/${postId}/postPicture`,
      {
        method: "POST",
        body: formdata,
        credentials: "include",
      }
    );
    console.log(response);
    return response;
  } catch (error) {}
};
