import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import DropDownText from "../../DropDownText"
import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "@/feartures/User/userSelector"
import { logOutUser } from "@/services/auth"
import { clearUser } from "@/feartures/User/userSlice"
import { useTheme } from "@/contexts/ThemeContext"

function DropDown() {
  const dispatch = useDispatch()
  const { user } = useSelector(selectUser)

  const  {setTheme} = useTheme()

  const onLogOutUser = () => {
    logOutUser(dispatch)
    dispatch(clearUser())
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <i className="fa-solid fa-bars cursor-pointer"></i>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuGroup>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              Giao diện
            </DropdownMenuSubTrigger>

            <DropdownMenuSubContent>
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuItem>
            <DropDownText text="Thông tin chi tiết" />
          </DropdownMenuItem>

          <DropdownMenuItem>
            <DropDownText text="Cài đặt" />
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <DropDownText text="Bảng feed" />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DropDownText text="Đã lưu" />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DropDownText text="Đã thích" />
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <DropDownText text="Báo cáo sự cố" />
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

export default DropDown
