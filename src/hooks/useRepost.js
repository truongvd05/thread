import { repost } from "@/services/postService";
import { useState } from "react";

export default function useRepost(
  initialReposted,
  initialCount,
  id,
  requireLogin,
  user,
) {
  const [isReposted, setIsReposted] = useState(initialReposted);
  const [repostCount, setRepostCount] = useState(initialCount);
  const [loading, setLoading] = useState(false);
  const toggleRepost = async () => {
    if (!user) return requireLogin();
    setLoading(true);

    try {
      const res = await repost(id);
      setIsReposted(res.is_reposted);
      setRepostCount(res.reposts_and_quotes_count);
      return res;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return { isReposted, repostCount, toggleRepost, loading };
}
