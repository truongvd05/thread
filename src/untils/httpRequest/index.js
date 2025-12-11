import { clearUser } from "@/feartures/User/userSlice";
import { store } from "@/store";
import axios from "axios";

const httpThreads = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 30000,
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

httpThreads.interceptors.request.use(
  (config) => {
    if (config.skipAuth) return config;
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.set
        ? config.headers.set("Authorization", `Bearer ${token}`)
        : (config.headers["Authorization"] = `Bearer ${token}`);
    }
    return config;
  },
  (err) => Promise.reject(err),
);

httpThreads.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.code === "ECONNABORTED") {
      console.error("Request timeout");
      return Promise.reject({ message: "Server phản hồi quá lâu!" });
    }

    // ❌ Nếu mạng chết
    if (!error.response) {
      return Promise.reject({ message: "Không có kết nối mạng!" });
    }
    const originalRequest = error.config;

    // Nếu 401 do token hết hạn
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      if (isRefreshing) {
        // Đợi refresh token xong rồi retry request cũ
        console.log("refresh");
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers["Authorization"] = "Bearer " + token;
            return httpThreads(originalRequest);
          })
          .catch((error) => Promise.reject(error));
      }

      isRefreshing = true;

      try {
        const refreshToken = localStorage.getItem("refresh_token");

        // Gọi API refresh token
        const res = await axios.post(
          import.meta.env.VITE_BASE_URL + "api/auth/refresh",
          {
            refresh_token: refreshToken,
          },
          { skipAuth: true },
        );
        const newToken = res.data.data.access_token;

        // Lưu token mới
        localStorage.setItem("access_token", newToken);

        processQueue(null, newToken);
        isRefreshing = false;

        // Retry lại request cũ
        originalRequest.headers["Authorization"] = "Bearer " + newToken;
        console.log("refresh thanh cong");
        return httpThreads(originalRequest);
      } catch (err) {
        store.dispatch(clearUser());
        isRefreshing = false;
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);

const _send = async (method, path, data, config) => {
  const response = await httpThreads.request({
    ...config,
    method,
    url: path,
    data,
  });
  return response.data;
};

const get = async (path, config) => {
  return await _send("get", path, null, config);
};

const post = async (path, data, config) => {
  return await _send("post", path, data, config);
};

const put = async (path, data, config) => {
  return _send("put", path, data, config);
};

const patch = async (path, data, config) => {
  return _send("patch", path, data, config);
};

const del = async (path, config) => {
  return _send("delete", path, null, config);
};

const http = { get, post, put, patch, del };

export default http;
