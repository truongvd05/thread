import { usePost } from "@/contexts/PostContext";
import User from "../User";

function QoutePost() {
    const post = usePost()
    return (
        <div className="border p-[20px] rounded-2xl">
            <User item={post.original_post}>
                <p className="text-left">{post.original_post.content}</p>
            </User>
        </div>
    )
}

export default QoutePost;