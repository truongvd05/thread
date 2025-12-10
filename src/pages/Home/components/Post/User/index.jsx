import Avatar from "@/components/Avatar";
import DropDown from "../DropDown";
import NameAvatar from "../NameAvatar";
import { formatPostTime } from "@/untils/time";

function User({children, item}) {
    const res = item?.created_at ? formatPostTime(item.created_at) : null;
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-3">
                <Avatar tick src={item?.owner?.avatar || item?.user?.avatar_url}/>
                <div className="flex my-auto mx-0 gap-1.5">
                    <NameAvatar name={item?.owner?.name || item?.user?.name}/>
                    {res && <p className="opacity-50">{res}</p>}
                </div>
                <div className="ml-auto cursor-pointer rounded-full 
                    hover:bg-gray-50 transition-all liner duration-400
                    ">
                    <DropDown/>
                </div>
            </div>
                {children}
        </div>
    )
}

export default User;