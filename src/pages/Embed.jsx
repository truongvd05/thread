import PostCard from "@/components/post/PostCard";
import { getSingerPost } from "@/services/postService";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PostWrapper from "./Home/components/Post/PostWrapper";
import User from "./Home/components/Post/User";

function Embeb() {
    const param = useParams();
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async() => {
            try {
                const res = await getSingerPost(param.postId)
                setData(res)
            } catch (err) {
                console.log(err);
            }
        }
        fetchData()
    }, [param.postId])
    if(!data) return;
    return (
        <div className="border rounded-2xl p-[15px]">
            <PostWrapper item={data}>
                <User item={data}>
                    <p>{data.content}</p>
                </User>
                <PostCard interactive={false}/>
            </PostWrapper>
        </div>
    )
}

export default Embeb;