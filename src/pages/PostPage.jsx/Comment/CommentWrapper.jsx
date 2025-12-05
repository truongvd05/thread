import CommentContext from "@/contexts/CommentContext";

function CommentWrapper({item, children}) {
    if (!item || !item.user) return null;
    const nomal = {
        id: item.id,
        content: item.content,
        created_at: item.created_at,
        like: item.likes_count,
        replies_count: item.replies_count,
        reposts_and_quotes_count: item.reposts_and_quotes_count,
        owner: {
            avatar_url: item.user.avatar_url,
            id: item.user.id,
            name: item.user.name,
        }
    }
    if (!item) return null;
    return (
        <CommentContext.Provider value={nomal}>
            {children}
        </CommentContext.Provider>
    )
}
export default CommentWrapper;