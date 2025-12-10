import { createContext, useContext } from "react";

const PostModalContext = createContext();

export const PostModalProvider = ({ children, openReply, openQuote }) => {
  return (
    <PostModalContext.Provider value={{ openReply, openQuote }}>
      {children}
    </PostModalContext.Provider>
  );
};

export function usePostModal() {
  const context = useContext(PostModalContext);
  if (!context) {
    throw new Error("usePostModal phải dùng bên trong PostModalProvider");
  }
  return context;
}
