import { selectUser } from "@/feartures/User/userSelector";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Post from "../Home/components/Post";
import PostCard from "@/components/post/PostCard";
import { useEffect, useState } from "react";
import { getCmt, getSingerPost } from "@/services/postService";
import PostSkeleton from "./PostSkeleton";
import Comment from "./Comment";
import PostWrapper from "../Home/components/Post/PostWrapper";
import CommentWrapper from "./Comment/CommentWrapper";

function PostPage() {
    const { id } = useParams();
    const { user } = useSelector(selectUser)
    const [ cmt, setCmt ] = useState([]);
    const [ post, setPost ] = useState(null);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const rescmt = await getCmt(id);
                setCmt(rescmt);
                const respost = await getSingerPost(id);
                setPost(respost)
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        fetchData()
    }, [id])
    if (loading || !post) return <PostSkeleton />;
    return (
        <div className="w-full min-h-screen max-h-screen overflow-y-auto m-auto sm:w-xl rounded-2xl bg-white  border-gray-500 border-opacity-40 sm:border *:p-[16px]">
            <PostWrapper item={post}>
                <div className="flexjustify-center ">
                    <span className="block sm:hidden text-center flex-1 text-4xl">
                        <i className="fa-brands fa-threads"></i>
                    </span>
                </div>
                <div
                    className="flex flex-col gap-2 border-b-[1px]  cursor-pointer">
                        <Post/>
                        <PostCard/>
                </div>
                <div className="flex justify-between border-b-[1px]">
                    <p>Top</p>
                    <p>View activity</p>
                </div>
                    {cmt.length > 0 ? (cmt.map((item) => {
                        return <div key={item.id}>
                                <CommentWrapper item={item}>
                                    <Comment/>
                                </CommentWrapper>
                            </div>
                    }))
                    : "chưa có bình luận nào"}
                <div>
                </div>
            </PostWrapper>
        </div>
    )
}

export default PostPage;