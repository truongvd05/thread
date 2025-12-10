import { useComment } from "@/contexts/CommentContext";
import PostComment from "./PostComment";
import PostCardComment from "./PostCardComment/inex";

function Comment() {
    return (
        <div>
            <PostComment/>
            <PostCardComment/>
        </div>
    )
}

export default Comment;