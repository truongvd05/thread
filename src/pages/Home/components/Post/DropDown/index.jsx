import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import copy from "copy-to-clipboard";


import { deleteSingerFeed } from "@/feartures/feed/feedSlice";
import { selectUser } from "@/feartures/User/userSelector";
import DropDownText from "@/layout/DefaultLayout/component/DropDownText";
import { deletePost } from "@/services/post";
import { useDispatch, useSelector } from "react-redux";

function DropDown({id, userId}) {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const handleDelete = async () => {
        await deletePost(id);
        dispatch(deleteSingerFeed())
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
                    <DropdownMenuItem>
                        <DropDownText text="Lưu" mAuto>
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
                    {user.user?.id === userId ? 
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