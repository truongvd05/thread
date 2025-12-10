import PostContext from "@/contexts/PostContext";

function PostWrapper({ item, children }) {
    if (!item || !item.user) return null;
    const normal = {
        id: item.id,
        content: item.content ?? "",
        created_at: item.created_at ?? "",
        is_saved_by_auth: item.is_saved_by_auth,
        is_quote: item.is_quote,
        is_liked_by_auth: item.is_liked_by_auth,
        is_reposted_by_auth: item.is_reposted_by_auth,
        likes_count: item.likes_count,
        replies_count: item.replies_count,
        reposts_and_quotes_count: item.reposts_and_quotes_count,
        owner: {
            id: item.user.id,
            name: item.user.name ?? "Unknown",
            avatar: item.user.avatar_url ?? "./picture/avatar.jpg"
        },
        original_post: item.original_post ?? null,
    }
    if (!item) return null;
    return (
        <PostContext.Provider value={normal}>
            {children}
        </PostContext.Provider>
    )
}

export default PostWrapper;