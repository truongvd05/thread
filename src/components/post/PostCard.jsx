import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useForm } from "react-hook-form"
import copy from "copy-to-clipboard";
import DropDownText from "@/layout/DefaultLayout/component/DropDownText";
import useRepost from "@/hooks/useRepost";
import useLike from "@/hooks/useLike";
import { usePostModal } from "@/contexts/PostModalContext";

function PostCard({
    like,
    cmt,
    repeat,
    share, 
    id,
    isLikeByAuth,
    replyName,
    user,
    requireLogin,
    isRepost
}) {
    const {
        formState: { errors },
    } = useForm()
    const {isLiked, likeCount, toggleLike, loading: likeLoading} = 
        useLike(isLikeByAuth, like, id, requireLogin, user)
    const { isReposted, repostCount, toggleRepost, loading: repostLoading } =
        useRepost(isRepost, repeat, id, requireLogin, user);
    const { openReply, openQuote } = usePostModal();
    return (
        <div onClick={(e) => {
            e.stopPropagation()
        }}>
            <div className="myflex-col flex gap-8">
                <div className="cursor-pointer" 
                    onClick={(e) => {
                        e.stopPropagation();
                        !likeLoading && toggleLike();
                    }}>
                    <i className={`fa-regular fa-heart my-auto mx-0 
                    ${isLiked ? "fa-solid text-red-500" : "fa-regular text-gray-500"}
                   transition-color duration-300
                   `}></i>
                    <p>{likeCount ?? 100}</p>
                </div>
                <div onClick={(e) => {
                    e.stopPropagation();
                    if(!user) return requireLogin();
                        e.stopPropagation()
                        openReply(id)
                }} className="cursor-pointer">
                    <i className="fa-regular fa-comment my-auto mx-0"></i>
                    <p>{cmt ?? 5}</p>
                </div>
                <div>
                    <DropdownMenu open={!user ? false : undefined}
                    onOpenChange={(open) => {
                            if (open && !user) {
                                requireLogin();
                                return;
                            }
                        }}>
                        <DropdownMenuTrigger asChild>
                            <div className="flex gap-2">
                                <i className="fa-solid fa-repeat my-auto mx-0"></i>
                                <p>{repostCount ?? 5}</p>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent >
                            <DropdownMenuItem onClick={(e) => {
                                e.stopPropagation()
                                !repostLoading && toggleRepost()
                            }}>
                                <DropDownText text="Repost" mAuto>
                                    <i className={`fa-solid fa-repeat ${isReposted ? "text-blue-500" : "text-black-500"}`}></i>
                                </DropDownText>
                            </DropdownMenuItem>
                            <DropdownMenuItem >
                                <DropDownText onClick={(e) => {
                                    e.stopPropagation()
                                    openQuote(id)
                                }} text="Quote" mAuto>
                                    <i className="fa-regular fa-comment-dots"></i>
                                </DropDownText>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div>
                    <DropdownMenu 
                    open={!user ? false : undefined}
                    onOpenChange={(open) => {
                            if (open && !user) {
                                requireLogin();
                                return;
                            }
                        }}>
                        <DropdownMenuTrigger asChild >
                            <div className="flex gap-2">
                                <i className="fa-solid fa-share my-auto mx-0"></i>
                                <p>{share ?? 1}</p>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem onClick={() => {
                                copy(`${window.location.origin}/#/post/${id}`)
                            }}>
                                <DropDownText text="Copy link" mAuto>
                                    <i className="fa-solid fa-link"></i>
                                </DropDownText>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <DropDownText text="Copy image" mAuto>
                                    <i className="fa-regular fa-images"></i>
                                </DropDownText>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <DropDownText text="Ged Embed code" mAuto>
                                    <i className="fa-solid fa-code"></i>
                                </DropDownText>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    )
}

export default PostCard;