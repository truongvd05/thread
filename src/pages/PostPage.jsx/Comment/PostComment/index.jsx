import { useComment } from "@/contexts/CommentContext"
import User from "@/pages/Home/components/Post/User"

function PostComment() {
    const comment = useComment()
    return (
        <div className="flex flex-col gap-2">
            <User item={comment}>
                <p className="text-left">{comment?.content}</p>
            </User>
        </div>
    )
}

export default PostComment