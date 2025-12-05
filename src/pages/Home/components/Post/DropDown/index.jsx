import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import { deleteSingerFeed } from "@/feartures/feed/feedSlice";
import { selectUser } from "@/feartures/User/userSelector";
import DropDownText from "@/layout/DefaultLayout/component/DropDownText";
import { collectionPost, deletePost } from "@/services/post";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { usePost } from "@/contexts/PostContext";

function DropDown() {
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
                    <DropdownMenuItem>
                        <DropDownText text="Không quan tâm" mAuto>
                            <i className="fa-regular fa-eye-slash"></i>
                        </DropDownText>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <DropDownText text="Tắt thông báo" mAuto>
                            <i className="fa-solid fa-user-clock"></i>
                        </DropDownText>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <DropDownText text="Hạn chế" mAuto>
                            <i className="fa-solid fa-user-shield"></i>
                        </DropDownText>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <DropDownText text="Chặn" mAuto red>
                            <i className="fa-solid fa-user-slash"></i>
                        </DropDownText>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <DropDownText text="Báo cáo" mAuto red>
                            <i className="fa-solid fa-circle-exclamation"></i>
                        </DropDownText>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <DropDownText text="Sao chéo liên kết" mAuto>
                            <i className="fa-solid fa-link"></i>
                        </DropDownText>
                    </DropdownMenuItem>
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