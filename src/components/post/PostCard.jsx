import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

import { useForm } from "react-hook-form"
import copy from "copy-to-clipboard";
import DropDownText from "@/layouts/DefaultLayout/component/DropDownText";
import useRepost from "@/hooks/useRepost";
import useLike from "@/hooks/useLike";
import { usePostModal } from "@/contexts/PostModalContext";
import { usePost } from "@/contexts/PostContext";
import { useSelector } from "react-redux";
import { selectUser } from "@/feartures/User/userSelector";
import { useNavigate } from "react-router";

function PostCard ({requireLogin, interactive = true,}) {
    const post = usePost();
    const navigate = useNavigate()
    const {user} = useSelector(selectUser);
    const {
        formState: { errors },
    } = useForm()
    const {isLiked, likeCount, toggleLike, loading: likeLoading} = 
        useLike(post.is_liked_by_auth, post.likes_count, post.id, requireLogin, user)
    const { isReposted, repostCount, toggleRepost, loading: repostLoading } =
        useRepost(post.is_reposted_by_auth, post.replies_count, post.id, requireLogin, user);
    const { openReply, openQuote } = usePostModal();
    const onButtonClick = () => {
        const node = getNode();
        if (!node) return;
        htmlToImage
            .toPng(node)
            .then((dataUrl) => {
                const img = new Image();
                img.src = dataUrl;
                document.body.appendChild(img);
            })
            .catch((err) => {
                console.error('oops, something went wrong!', err);
            });
    }
    const handleEmbeb = () => {
        navigate(`/${post?.owner.name}/post/${post?.id}/embed`)
    }
    return (
        <div onClick={(e) => {
            e.stopPropagation()
        }}>
            <div className="myflex-col flex gap-8">
                <div className={`cursor-pointer hover-icon ${!interactive && "pointer-events-none opacity-60"}`} 
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
                        openReply(post.id)
                }} className={`cursor-pointer hover-icon ${!interactive && "pointer-events-none opacity-60"}`}>
                    <i className="fa-regular fa-comment my-auto mx-0"></i>
                    <p>{post.replies_count ?? 5}</p>
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
                            <div className={`flex gap-2 hover-icon ${!interactive && "pointer-events-none opacity-60"}`}>
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
                                    openQuote(post?.id)
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
                            <div className={`flex gap-2 hover-icon ${!interactive && "pointer-events-none opacity-60"}`}>
                                <i className="fa-solid fa-share my-auto mx-0"></i>
                                <p>{post.reposts_and_quotes_count ?? 1}</p>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem onClick={(e) => {
                                const link = `${window.location.origin}/thread/#/post/${post?.id}`;
                                copy(link);
                                console.log(link);
                                }}>
                                <DropDownText text="Copy link" mAuto>
                                    <i className="fa-solid fa-link"></i>
                                </DropDownText>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={onButtonClick}>
                                <DropDownText text="Copy image" mAuto>
                                    <i className="fa-regular fa-images"></i>
                                </DropDownText>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={handleEmbeb}>
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