import axios from "../../config/Axios.config";

export const LoginAction = async (email, password) => {
  try {
    const response = await axios.post("/auth/login", {
      email,
      password,
    });
    const accessToken = response.data.data.token.accessToken;
    const user = response.data.data.user;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("user", user);

    window.location.href = "/";
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.error);
  }
};

export const RegisterAction = async (form) => {
  try {
    const response = await axios.post("/auth/register", {
      ...form,
    });
    const accessToken = response.data.data.token.accessToken;
    const user = response.data.data.user;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("user", user);
    window.location.href = "/";
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};
