import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { useForm } from "react-hook-form"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"
import { getSingerPost, replyPost } from "@/services/postService"
import ReplyUser from "./component/ReplyUser"
import { useSelector } from "react-redux"
import { selectUser } from "@/feartures/User/userSelector"

function Reply({ open, onClose, id }) {
  const [data, setData] = useState(null)
  const user = useSelector(selectUser)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    await replyPost(data.message, id)
    onClose();
  }

  useEffect(() => {
    if(!id) return;
    const fetchSingerPost = async () => {
      try {
        const res = await getSingerPost(id);
        setData(res)
      } catch (err) {
        console.log(err);
      }
    }
    fetchSingerPost();
  }, [id, open])
  
  return (
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px] [&>button]:hidden">
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogHeader >
              <div className="flex items-center ">
                  <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <DialogTitle className="m-auto">
                      Reply
                  </DialogTitle>
                  <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <i className="fa-solid fa-ellipsis cursor-pointer ml-auto"></i>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <p className="">Add Ai label</p>
                      </DropdownMenuContent>
                    </DropdownMenu>
              </div>
            </DialogHeader>
            <div className="flex flex-col gap-4">
              <ReplyUser src={data?.user.avatar_url} name={data?.user.name}>
                  <p>{data?.content}</p>
              </ReplyUser>
              <ReplyUser name={user?.user?.name}>
                  <div className="flex gap-2 flex-col">
                    <Input className="min-w-[150px]" placeholder={`reply to ${data?.user.name}`} {...register("message")}/>
                    <div className="flex gap-2">
                      <i className="fa-regular fa-image"></i>
                      <i className="fa-solid fa-upload"></i>
                      <i className="fa-regular fa-face-smile"></i>
                      <i className="fa-solid fa-bars-staggered"></i>
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                  </div>
              </ReplyUser>
            </div>
            <DialogFooter className="!justify-between items-center">
                <p>Reply options</p>
                <Button type="submit">Post</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    )
}

export default Reply;