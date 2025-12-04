import User from "./User";

function Post({src, name, content, id, userId, time}) {
    return (
        <div className="flex flex-col gap-2">
            <User time={time} userId={userId} id={id} tick src={src} name={name}>
                <p className="text-left">{content}</p>
            </User>
        </div>
    )
}

export default Post;