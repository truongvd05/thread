import { usePost } from "@/contexts/PostContext";
import User from "./User";

function Post() {
    const post = usePost()
    return (
        <div className="flex flex-col gap-2">
            <User item={post}>
                <p className="text-left whitespace-pre-wrap break-words">{post?.content}</p>
            </User>
        </div>
    )
}

export default Post;