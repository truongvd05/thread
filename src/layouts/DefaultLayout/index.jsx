import { Navigate, Outlet } from "react-router";
import Navigation from "./component/Navigation";
import { useState } from "react";
import Reply from "@/pages/Home/components/Post/Reply";
import { PostModalProvider } from "@/contexts/PostModalContext";
import ReportModal from "@/components/ReportModal";
import QuoteModal from "@/components/post/QuoteModal";
import { useSelector } from "react-redux";
import { selectUser } from "@/feartures/User/userSelector";

function DefaultLayout() {
    const [replyTo, setReplyTo] = useState(null);
    const [quoteTo, setQuoteTo] = useState(null);
    const {user} = useSelector(selectUser);
    console.log(user);
    
    if(!user) {
        return <Navigate to="/login" replace/>
    }
    return (
        <PostModalProvider openReply={setReplyTo} openQuote={setQuoteTo}>
            <div className="grid min-h-screen w-full m-auto w-full bg-[#fafafa]">
                <Navigation/>
                <Outlet/>
                <Reply id={replyTo} open={replyTo !== null} onClose={() => setReplyTo(null)}/>
                <QuoteModal id={quoteTo} open={quoteTo !== null} onClose={() => setQuoteTo(null)}/>
                <ReportModal/>
            </div>
        </PostModalProvider>
    )
}

export default DefaultLayout;