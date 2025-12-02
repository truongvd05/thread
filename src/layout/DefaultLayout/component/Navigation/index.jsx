import Icon from "./icon";
import DropDown from "./DropDown";
import { useState } from "react";

function Navigation() {
    const [active , setActive] = useState("/")
    return (
        <div className="fixed bottom-0 flex md:flex md:flex-col md:justify-between md:min-h-screen p-[16px] w-screen md:w-auto">
            <div className="hidden md:block">
                <Icon to="">
                    <i className="fa-brands fa-threads"></i>
                </Icon>
            </div>
            <div className="md:flex-col gap-1 flex w-full">
                <Icon to="home" backGroundHover isActive={active === "home"} onClick={() => setActive("home")}>
                    <i className="fa-solid fa-house"></i>
                </Icon>
                <Icon to="search" backGroundHover isActive={active === "search"} onClick={() => setActive("search")}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </Icon>
                <Icon custom ><i className="fa-solid fa-plus"></i>
                </Icon>
                <Icon to="heart" backGroundHover isActive={active === "heart"} onClick={() => setActive("heart")}>
                    <i className="fa-regular fa-heart"></i>
                </Icon>
                <Icon to="user" backGroundHover isActive={active === "user"} onClick={() => setActive("user")}>
                    <i className="fa-regular fa-user"></i>
                </Icon>
            </div>
            <div className="hidden md:flex justify-center text-3xl cursor-pointer">
                <DropDown/>
            </div>
        </div>
    )
}

export default Navigation;