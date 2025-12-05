import { usePost } from "@/contexts/PostContext";
import User from "./User";
import { useEffect } from "react";

function Post() {
    const post = usePost()
    return (
        <div className="flex flex-col gap-2">
            <User item={post}>
                <p className="text-left">{post?.content}</p>
            </User>
        </div>
    )
}

export default Post;