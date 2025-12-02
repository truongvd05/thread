import http from "@/untils/httpRequest";

export const registerUser = async (data) => {
  try {
    const res = await http.post("api/auth/register", data);
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "Đăng ký thất bại" };
  }
};

export const loginUser = async (data) => {
  try {
    const res = await http.post("api/auth/login", data);
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "Sai tài khoản hoặc mật khẩu" };
  }
};

export const validateEmail = async (email) => {
  try {
    const res = await http.post("api/auth/validate/email", { email });
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "Email không hợp lệ" };
  }
};

export const getUser = async (token) => {
  try {
    const res = await http.get("/api/auth/user");
    return res.data;
  } catch (err) {
    throw err.response?.data || err;
  }
};

export const logOutUser = async () => {
  localStorage.clear();
  try {
    const res = await http.post("api/auth/logout");
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const forgotPassword = async (email) => {
  try {
    const res = await http.post("api/auth/forgot-password", { email });
    return res.data;
  } catch (err) {
    throw err;
  }
};
