import { likePost } from "@/services/postService";
import { useState } from "react";

export default function useLike(initLiked, initCount, id, requireLogin, user) {
  const [isLiked, setIsLiked] = useState(initLiked);
  const [likeCount, setLikeCount] = useState(initCount);
  const [loading, setLoading] = useState(false);
  const toggleLike = async () => {
    if (!user) return requireLogin();
    setLoading(true);
    try {
      setLikeCount(likeCount + 1);
      if (isLiked) {
        setLikeCount(likeCount - 1);
      }
      const res = await likePost(id);
      if (res.is_liked) {
        setLikeCount(res.likes_count);
      }
      setIsLiked(res.is_liked);
    } catch (err) {
      setLikeCount(initCount);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return { isLiked, likeCount, toggleLike, loading };
}
