import PostCard from "@/components/post/PostCard";
import Post from "@/pages/Home/components/Post";

function Comment({name, content, like, repeat, cmt, share}) {
    return (
        <div>
            <Post name={name}/>
            <p>{content}</p>
            <PostCard like={like} repeat={repeat} cmt={cmt} share={share}/>
        </div>
    )
}

export default Comment;