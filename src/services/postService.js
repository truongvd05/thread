import http from "@/untils/httpRequest";

export const getFeed = async (type, page, per_page) => {
  try {
    const res = await http.get("api/posts/feed", {
      params: {
        type: type,
        page: page,
        per_page,
      },
    });
    return res;
  } catch (err) {
    throw err.response?.data || { massage: "lỗi" };
  }
};

export const likePost = async (id) => {
  try {
    const res = await http.post(`api/posts/${id}/like`);
    return res.data;
  } catch (err) {
    throw err.response?.data || { massage: "lỗi" };
  }
};

export const repost = async (id) => {
  try {
    const res = await http.post(`api/posts/${id}/repost`);
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "lỗi" };
  }
};

export const getCmt = async (id) => {
  try {
    const res = await http.get(`api/posts/${id}/replies`);
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "lỗi" };
  }
};

export const getSingerPost = async (id) => {
  try {
    const res = await http.get(`api/posts/${id}`);
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "lỗi" };
  }
};

export const deletePost = async (id) => {
  try {
    const res = await http.del(`api/posts/${id}`);
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "lỗi" };
  }
};

export const createPost = async (content) => {
  try {
    const res = await http.post(`api/posts`, {
      content,
    });
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "lỗi" };
  }
};

export const replyPost = async (content, id) => {
  try {
    const res = await http.post(`api/posts/${id}/reply`, { content });
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "lỗi" };
  }
};

export const collectionPost = async (id) => {
  try {
    const res = await http.post(`api/posts/${id}/save`);
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "lỗi" };
  }
};

export const hiddenPost = async (id) => {
  try {
    const res = await http.post(`api/posts/${id}/hide`);
    return res;
  } catch (err) {
    throw err.response?.data || { message: "lỗi" };
  }
};

export const muteUser = async (userId) => {
  try {
    const res = await http.post(`api/users/${userId}/mute`);
    return res;
  } catch (err) {
    throw err.response?.data || { message: "lỗi" };
  }
};

export const restrictUser = async (userId) => {
  try {
    const res = await http.post(`api/users/${userId}/restrict`);
    return res;
  } catch (err) {
    throw err.response?.data || { message: "lỗi" };
  }
};

export const blockUser = async (userId) => {
  try {
    const res = await http.post(`api/users/${userId}/block`);
    return res;
  } catch (err) {
    throw err.response?.data || { message: "lỗi" };
  }
};

export const quotePost = async (userId, content) => {
  try {
    const res = await http.post(`api/posts/${userId}/quote`, { content });
    return res;
  } catch (err) {
    throw err.response?.data || { message: "lỗi" };
  }
};
