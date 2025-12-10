import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import DropDownText from "../../DropDownText";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "@/feartures/User/userSelector";
import { logOutUser } from "@/services/auth";
import { clearUser } from "@/feartures/User/userSlice";
function DropDown() {
  const dispatch = useDispatch();
  const onLogOutUser = () => {
    logOutUser(dispatch);
    dispatch(clearUser())
  }
  const { user } = useSelector(selectUser)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <i className="fa-solid fa-bars"></i>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <DropDownText text="Giao diện">
                <i className="fa-solid fa-angle-right"></i>
            </DropDownText>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DropDownText text="Thông tin chi tiết"></DropDownText>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DropDownText text="Cài đặt"></DropDownText>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <DropDownText text="Bảng feed">
                <i className="fa-solid fa-angle-right"></i>
            </DropDownText>
          </DropdownMenuItem>
            <DropdownMenuItem>
            <DropDownText text="Đã lưu"></DropDownText>
          </DropdownMenuItem>
            <DropdownMenuItem>
            <DropDownText text="Đã Thích"></DropDownText>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
            <DropDownText text="Báo cáo sự cố"></DropDownText>
        </DropdownMenuItem>
        {user && (
        <DropdownMenuItem onClick={onLogOutUser}>
            <DropDownText text="Log out" red />
        </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropDown;