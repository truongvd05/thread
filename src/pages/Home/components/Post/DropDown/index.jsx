import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import copy from "copy-to-clipboard";
import { deleteSingerFeed, updatePostHidden } from "@/feartures/feed/feedSlice";
import { selectUser } from "@/feartures/User/userSelector";
import DropDownText from "@/layouts/DefaultLayout/component/DropDownText";
import { blockUser, collectionPost, deletePost, hiddenPost, muteUser, restrictUser } from "@/services/postService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { usePost } from "@/contexts/PostContext";
import { usePostModal } from "@/feartures/modal/modal";

function DropDown() {
    const { openReport } = usePostModal();
    const post = usePost()
    const [isSave, setIsSave] = useState(post?.is_saved_by_auth)
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const handleDelete = async () => {
        await deletePost(post?.id);
        dispatch(deleteSingerFeed())
    }
    const handleCollection = async () => {
        try {
            const res = await collectionPost(post?.id);
            setIsSave(res?.is_saved)
        } catch (err) {
            console.log(err);
        }
    }
    const handleHiddenPost = async () => {
        try {
            const res = await hiddenPost(post?.id);
            dispatch(updatePostHidden({id: post?.id, is_ghost: true}))
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }
    const handleMute = async () => {
        const res = await muteUser(post?.owner.id);
        console.log(res);
    }
    const handleRestrict = async () => {
        try {
            const res = await restrictUser(post?.owner.id);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }
    const handleBlock = async () => {
        try {
            const res = await blockUser(post?.owner.id);
            console.log(res);
        } catch(err) {
            console.log(err);
        }
    }
    return (
        <div onClick={(e) => {
            e.stopPropagation();
            }}>
            <DropdownMenu>
                <DropdownMenuTrigger >
                    <i className="fa-solid fa-ellipsis"></i> 
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <DropDownText text="Thêm vào bảng feed" mAuto>
                            <i className="fa-solid fa-angle-right"></i>
                        </DropDownText>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => handleCollection()}>
                        <DropDownText text={isSave ? `unsave` : " save"} mAuto>
                            <i className="fa-regular fa-bookmark"></i>
                        </DropDownText>
                        </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleHiddenPost()}>
                        <DropDownText text="Không quan tâm" mAuto>
                            <i className="fa-regular fa-eye-slash"></i>
                        </DropDownText>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleMute()}>
                        <DropDownText text="Tắt thông báo" mAuto>
                            <i className="fa-solid fa-user-clock"></i>
                        </DropDownText>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleRestrict()}>
                        <DropDownText text="Hạn chế" mAuto>
                            <i className="fa-solid fa-user-shield"></i>
                        </DropDownText>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleBlock()}>
                        <DropDownText text="Chặn" mAuto red>
                            <i className="fa-solid fa-user-slash"></i>
                        </DropDownText>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={openReport}>
                        <DropDownText text="Báo cáo" mAuto red>
                            <i className="fa-solid fa-circle-exclamation"></i>
                        </DropDownText>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={(e) => {
                                        const link = `${window.location.origin}/thread/#/post/${post?.id}`;
                                        copy(link);
                                        console.log(link);
                                        }}>
                        <DropDownText text="Sao chéo liên kết" mAuto>
                            <i className="fa-solid fa-link"></i>
                        </DropDownText>
                    </DropdownMenuItem>
                    {user?.user?.id === post?.owner.id ? 
                    <DropdownMenuItem onClick={() => handleEdit()}>
                        <DropDownText text="Sửa" mAuto red>
                            <i class="fa-solid fa-pen-to-square"></i>
                        </DropDownText>
                    </DropdownMenuItem> : null}
                    {user?.user?.id === post?.owner.id ? 
                    <DropdownMenuItem onClick={() => handleDelete()}>
                        <DropDownText text="Xóa" mAuto red>
                            <i className="fa-solid fa-delete-left"></i>
                        </DropDownText>
                    </DropdownMenuItem> : null}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default DropDown;