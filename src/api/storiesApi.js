export const getStories = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BE_URL}/stories`, {
      credentials: "include",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const postStory = async (file) => {
  try {
    console.log(file);
    var formdata = new FormData();
    formdata.append("picture", file);
    const response = await fetch(`${process.env.REACT_APP_BE_URL}/stories`, {
      method: "POST",
      body: formdata,
      credentials: "include",
    });

    return response;
  } catch (error) {
    return error;
  }
};

export const refreshToken = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BE_URL}/refreshToken`,
      {
        credentials: "include",
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
