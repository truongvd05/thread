import { Button } from "@/components/ui/button"
import { NavLink } from "react-router";

function LoginPanel() {
    return (
        <div className="hidden lg:flex">
            <div className=" max-w-[288px] max-h-[260px] pt-5 pb-5 pl-2.5 pr-2.5 rounded-md bg-gray-200 text-center flex flex-col gap-2 ">
                <p className="font-bold text-2xl">Log in or sign up for Theads</p>
                <p className="opacity-45 text-md">See what people are talking about and join the conversation.</p>
                <NavLink to="/login">
                    <Button variant="outline">Continue with instagram</Button>
                </NavLink>
            </div>
        </div>
    )
}

export default LoginPanel;