import { Outlet } from "react-router";

function AuthLayout() {
    return (
        <div>
            <picture className="fixed z-0 pointer-events-none top-0 w-screen overflow-hidden w-screen transform -translate-y-1/4">
                <source srcSet="https://static.cdninstagram.com/rsrc.php/yC/r/JlaY6JCPfe-.avif" type="image/avif"/>
                <source srcSet="https://static.cdninstagram.com/rsrc.php/yd/r/odhNEU0wX4h.webp" type="image/webp"/>
                <img className="min-w-[1785px] ml-[-120px]" height="510" width="1785" src="https://static.cdninstagram.com/rsrc.php/v4/ym/r/_qas8NM9G0b.png" alt="" />
            </picture>
            <Outlet/>
            <div className="fixed bottom-0 left-[50%] transform translate-x-[-50%]">
                <p><i className="fa-regular fa-copyright"></i> Thread Team Privacy Policy Cookies Policy Repost a problem</p>
            </div>
        </div>
    )
}

export default AuthLayout;