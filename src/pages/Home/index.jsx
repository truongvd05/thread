import { Link, NavLink, useNavigate } from "react-router";
import LoginPanel from "./components/LoginPanel";
import News from "./components/news";
import Post from "./components/Post";
import { Button } from "@/components/ui/button";
import PostCard from "@/components/post/PostCard";
import { useSelector } from "react-redux";
import { selectUser } from "@/feartures/User/userSelector";
import HomeSkeleton from "./HomeSkeleton";
import useLoadItems from "@/hooks/useLoadItems";
import useInfiniteScroll from "react-infinite-scroll-hook";
import Loading from "@/components/Loading";
import { selectFeedData } from "@/feartures/feed/feedSelector";
import withLoginModal from "@/hoc/withLoginModal";
import { useRef } from "react";

function Home({requireLogin}) {
    const { user } = useSelector(selectUser)
    const data = useSelector(selectFeedData)

    const navigate = useNavigate()
    const srollRef = useRef(null);
    const {
        items,
        feedLoading,
        hasNextPage,
    loadMore } = useLoadItems();
        
    const [infiniteRef] = useInfiniteScroll({
        loading: feedLoading,
        hasNextPage,
        onLoadMore: loadMore,
        root: srollRef,
        rootMargin: "0px 0px 400px 0px",
    });
    return (
    <div className="w-full flex flex-col m-auto  gap-2 items-center justify-center">
        <div className="flex gap-2 w-full justify-center">
            <div className="text-center w-full flex flex-cow justify-center gap-2">
                <div className="w-full lg:max-w-[590px]">
                    <h1 className="hidden sm:block text-center flex-1">Home</h1>
                    <div className="fixed lg:hidden right-5 top-1">
                        {user ? null : <NavLink to="/login">
                            <Button variant="outline">Login</Button>
                        </NavLink>}
                    </div>
                    <div ref={srollRef} className="w-full min-h-screen max-h-screen overflow-y-auto m-auto sm:w-xl rounded-2xl bg-white  border-gray-500 border-opacity-40 sm:border">
                        
                        <div className="flexjustify-center ">
                            <span className="block sm:hidden text-center flex-1 text-4xl">
                                <i className="fa-brands fa-threads"></i>
                            </span>
                        </div>
                        {user ? <News src="https://hinhcute.net/wp-content/uploads/2025/07/hinh-anh-avatar-trang-cuc-chat-08-05-2025.jpg"/> : null}
                        {feedLoading && items.length === 0 ? (
                            <HomeSkeleton />
                        ) : (
                            items.map(item => (
                                <div onClick={() => {
                                        navigate(`/post/${item.id}`);
                                    }} key={item.id} 
                                    className="flex flex-col gap-2 border-b-[1px] p-[16px] cursor-pointer">
                                    <Post userId={item.user?.id} id={item?.id} name={item?.user.name} content={item?.content} />
                                    <PostCard
                                    replyName={item.user.name}
                                    isLikeByAuth={item.is_liked_by_auth}
                                    id={item.id}
                                    like={item.likes_count}
                                    repeat={item.reposts_and_quotes_count}
                                    cmt={item.replies_count}
                                    share={item.reposts_and_quotes_count}
                                    user={user} requireLogin={requireLogin}
                                    isRepost={item.is_reposted_by_auth}
                                    />
                                </div>
                            ))
                        )}
                        {hasNextPage && (
                            <div ref={infiniteRef} className="h-10">
                                <Loading/>
                            </div>
                            )}
                    </div>
                </div>
            {user ? null : <LoginPanel/>}
            </div>
        </div>
    </div>
    )
}

export default withLoginModal(Home);