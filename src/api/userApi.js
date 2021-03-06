import axios from "../helpers/apiCall";

export const loginUser = async (body) => {
  try {
    // const response = await axios.post(
    //   `${process.env.REACT_APP_BE_URL}/login`,
    //   body,
    //   {
    //     headers: { "Content-Type": "application/json" },
    //     withCredentials: true,
    //   }
    // );
    const response = await fetch(`${process.env.REACT_APP_BE_URL}/login`, {
      method: "POST",

      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(body),
    });

    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const registerUser = async (body) => {
  try {
    // const response = await axios.post(
    //   `${process.env.REACT_APP_BE_URL}/register`,
    //   body,
    //   {
    //     headers: { "Content-Type": "application/json" },
    //   }
    // );
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const response = await fetch(`${process.env.REACT_APP_BE_URL}/register`, {
      method: "POST",
      headers: myHeaders,
      credentials: "include",
      body: JSON.stringify(body),
    });

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BE_URL}/me`, {
      withCredentials: true,
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getUserById = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}/users/${id}`,
      {
        withCredentials: true,
      }
    );

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const editUser = async (body) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_BE_URL}/me`,
      body,
      {
        withCredentials: true,
      }
    );

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const addUserImage = async (body) => {
  try {
    let response = await axios.post(
      `${process.env.REACT_APP_BE_URL}/me/postProfilePic`,
      body,
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
