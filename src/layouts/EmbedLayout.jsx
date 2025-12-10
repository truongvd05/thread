import { PostModalProvider } from "@/contexts/PostModalContext";
import { Outlet } from "react-router";

function EmbedLayout() {
    return (
        <PostModalProvider>
            <div className="max-w-full min-h-screen">
                <Outlet/>
            </div>
        </PostModalProvider>
       
    )
}

export default EmbedLayout;