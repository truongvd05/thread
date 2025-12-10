
function Avatar({src}) {
    return (
        <img className="w-[40px] rounded-full" src={src || `./picture/avatar.jpg`} alt="" />
    )
}

export default Avatar;