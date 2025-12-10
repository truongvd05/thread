import { NavLink } from "react-router";
function Icon({children, to, onClick, isActive, backGroundHover, scale, custom,}) {
    return (
        <NavLink to={`/${to}`}
        onClick={onClick}
        className={`
        ${isActive
          ? "text-black font-semibold transition-colors duration-200"
          : "text-gray-500 hover:text-black transition-all duration-200"}
        ${custom ? "bg-gray-200" : ""}
        text-3xl
        ${backGroundHover ? "hover:bg-gray-200" : ""}
        ${scale ? "hover:scale-[1.1] " : ""}
        p-[10px] rounded-2xl relative
        group
        m-auto
      `}
      > 
        {children}
        <p className="absolute left-[100%] z-1 top-[50%] translate-y-[-50%] hidden md:group-hover:block transition text-lg">{to}</p>
        </NavLink>
    )
}

export default Icon;