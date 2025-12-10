import { createContext, useContext } from "react";

const PostContext = createContext(null);

export const usePost = () => useContext(PostContext);

export default PostContext;