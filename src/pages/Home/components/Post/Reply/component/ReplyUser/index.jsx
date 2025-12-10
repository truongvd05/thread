function ReplyUser({src, name, children, time}) {
    return (
        <div>
            <div className="flex gap-2">
            <img src={src || `https://hinhcute.net/wp-content/uploads/2025/07/hinh-anh-avatar-trang-cuc-chat-08-05-2025.jpg`} className="h-10 w-10 rounded-full"  alt="" />
                <p>{name}</p>
                <p>{time}</p>
            </div>
            {children}
        </div>
    )
}

export default ReplyUser;