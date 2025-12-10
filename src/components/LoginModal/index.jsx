import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useNavigate } from "react-router";
import { Button } from "../ui/button";

function LoginModal({ open, onClose }) {
  const navigate = useNavigate();

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Vui lòng đăng nhập để tiếp tục
          </DialogTitle>
          <DialogDescription className="text-center">
            Bạn cần đăng nhập để thực hiện hành động này.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-2 mt-4">
          <Button
            onClick={() => {
              navigate("/login");
              onClose(false);
            }}
          >
            Đăng nhập
          </Button>
          <Button
            onClick={() => {
              navigate("/register");
              onClose(false);
            }}
          >
            Đăng ký
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

 export default LoginModal;