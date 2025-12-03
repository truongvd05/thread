import { Outlet } from "react-router";
import Navigation from "./component/Navigation";
import { useState } from "react";
import Reply from "@/pages/Home/components/Post/Reply";
import QuoteModal from "@/components/QuoteModal";
import { PostModalProvider } from "@/contexts/PostModalContext";

function DefaultLayout() {
    const [replyTo, setReplyTo] = useState(null);
    const [quoteTo, setQuoteTo] = useState(null);
    return (
        <PostModalProvider openReply={setReplyTo} openQuote={setQuoteTo}>
            <div className="grid min-h-screen w-full m-auto w-full bg-[#fafafa]">
                <Navigation/>
                <Outlet/>
                <Reply id={replyTo} open={replyTo !== null} onClose={() => setReplyTo(null)}/>
                <QuoteModal id={quoteTo} open={quoteTo !== null} onClose={() => setQuoteTo(null)}/>
            </div>
        </PostModalProvider>
    )
}

export default DefaultLayout;