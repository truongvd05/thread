function NameAvatar({name, tick}) {
    return (
        <>
            <p className="mytext-center-col">{name ? name : "user"}</p>
            {tick ? <i className="fa-solid fa-check text-white flex my-auto mx-0 bg-blue-500 rounded-full p-[3px] text-xs"></i> : ""}
        </>
    )
}

export default NameAvatar;