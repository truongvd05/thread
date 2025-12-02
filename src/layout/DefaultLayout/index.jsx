import { Outlet } from "react-router";
import Navigation from "./component/Navigation";

function DefaultLayout() {
    return (
        <div className="grid min-h-screen w-full m-auto w-full bg-[#fafafa]">
            <Navigation/>
            <Outlet/>
        </div>
    )
}

export default DefaultLayout;