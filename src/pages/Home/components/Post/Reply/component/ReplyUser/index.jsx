function ReplyUser({src, name, children, time}) {
    return (
        <div className="flex items-center gap-2">
            <div>
                <img src={src || `https://hinhcute.net/wp-content/uploads/2025/07/hinh-anh-avatar-trang-cuc-chat-08-05-2025.jpg`} className="h-10 w-10 rounded-full"  alt="" />
            </div>
            <div>
                <div className="flex gap-2">
                    <p>{name}</p>
                    <p>{time}</p>
                </div>
                {children}
            </div>
        </div>
    )
}

export default ReplyUser;