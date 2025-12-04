import Avatar from "@/components/Avatar";
import DropDown from "../DropDown";
import NameAvatar from "../NameAvatar";
import { formatPostTime } from "@/untils/time";

function User({src, name, children, id, userId, time}) {
    const res = formatPostTime(time)
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-3">
                <Avatar tick src={src ? "https://hinhcute.net/wp-content/uploads/2025/07/hinh-anh-avatar-trang-cuc-chat-08-05-2025.jpg" : ""}/>
                <div className="flex my-auto mx-0 gap-1.5">
                    <NameAvatar name={name} tick/>
                    <p>{res}</p>
                </div>
                <div className="ml-auto cursor-pointer rounded-full 
                    hover:bg-gray-50 transition-all liner duration-400
                    ">
                    <DropDown userId={userId} id={id}/>
                </div>
            </div>
                {children}
        </div>
    )
}

export default User;