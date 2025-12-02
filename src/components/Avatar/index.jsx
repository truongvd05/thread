function Avatar({src}) {
    return (
        <img className="w-[40px] rounded-full" src={src ? src : "https://hinhcute.net/wp-content/uploads/2025/07/hinh-anh-avatar-trang-cuc-chat-08-05-2025.jpg"} alt="" />
    )
}

export default Avatar;