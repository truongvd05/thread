import { formatPostTime } from "@/untils/time";
import User from "../User";

function QoutePost({content, id ,user, time}) {
    return (
        <div className="border p-[20px] rounded-2xl">
            <User time={time} userId={user.id} name={user.name} src={user.avatar_url}>
                <p className="text-left">{content}</p>
            </User>
        </div>
    )
}

export default QoutePost;