import axios from "axios";

export const fetchConversations = async (userId) => {
  try {
    // const response = await axios.get({
    //   method: "get",
    //   url: `${process.env.REACT_APP_BE_URL}/conversation/${userId}`,
    //   withCredentials: true,
    // });
    const response = await fetch(
      `${process.env.REACT_APP_BE_URL}/conversation/${userId}`,
      { credentials: "include" }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const fetchMessages = async (convoId) => {
  try {
    console.log(convoId);
    const response = await fetch(
      `${process.env.REACT_APP_BE_URL}/messages/getMessage/${convoId}`,
      { credentials: "include" }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const fetchImgUrl = async (file) => {
  try {
    var formdata = new FormData();
    formdata.append("picture", file);
    const response = await fetch(
      `${process.env.REACT_APP_BE_URL}/messages/postPic`,
      { method: "POST", body: formdata, credentials: "include" }
    );

    return response;
  } catch (error) {
    return error;
  }
};
