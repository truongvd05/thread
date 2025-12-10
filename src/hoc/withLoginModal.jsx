import LoginModal from "@/components/LoginModal";
import { useState } from "react";

function withLoginModal(WrappedComponent) {
    return function withLoginModal(props) {
        const [openLogin, setOpenLogin] = useState(false);
        const requireLogin = () => {
            setOpenLogin(true);
        };
        return (
            <>
                <WrappedComponent {...props} requireLogin={requireLogin}/>
                <LoginModal open={openLogin} onClose={setOpenLogin} />
            </>
           
        )
    }
}

export default withLoginModal;