import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { useForm } from "react-hook-form"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useSelector } from "react-redux";
import { selectFeedById } from "@/feartures/feed/feedSelector";
import Post from "@/pages/Home/components/Post";
import PostWrapper from "@/pages/Home/components/Post/PostWrapper";
import { selectUser } from "@/feartures/User/userSelector";
import User from "@/pages/Home/components/Post/User";
import { Textarea } from "../ui/textarea";
import { quotePost } from "@/services/postService";
function QuoteModal({open, onClose, id}) {
  const post = useSelector(selectFeedById(id))
  const user = useSelector(selectUser)
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    try {
      const res = await quotePost(post?.id, data.content);
      console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
      onClose()
    }
  }  
  return (
  <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[625px] [&>button]:hidden">
        <DialogHeader>
            <div className="flex items-center">
              <Button variant="outline">Cancel</Button>
              <DialogTitle className="flex flex-1">
                <div className="text-center w-full">New thread</div>
              </DialogTitle>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <i className="fa-solid fa-ellipsis cursor-pointer"></i>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <p className="">Add Ai label</p>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
        </DialogHeader>
        <form className=" flex gap-4 flex-col" onSubmit={handleSubmit(onSubmit)}> 
          <div className="flex flex-col gap-4 p-[15px] border rounded-2xl">
            <PostWrapper item={post}>
                <User item={user}>
                  <Textarea className="max-w-[525px]" placeholder="mô tả" {...register("content")}/>
                </User>
                <div className="grid gap-3 p-[25px] border rounded-2xl">
                    <Post/>
                </div>
            </PostWrapper>
          </div>
        <DialogFooter>
          <Button type="submit">Post</Button>
        </DialogFooter>
        </form>
      </DialogContent>
  </Dialog>
)
}

export default QuoteModal;