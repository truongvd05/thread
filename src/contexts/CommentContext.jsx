import { createContext, useContext } from "react";

const CommentContext = createContext(null);

export const useComment = () => useContext(CommentContext)

export default CommentContext;