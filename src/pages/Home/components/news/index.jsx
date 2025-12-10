import Avatar from "@/components/Avatar";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { addFeed } from "@/feartures/feed/feedSlice";
import { createPost } from "@/services/postService";

import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";


function News({src, name}) {
  const dispatch = useDispatch()
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    const res = await createPost(data.message)
    dispatch(addFeed(res))
  }
    return (
        <form className="flex gap-3 p-[16px] border-b-[1px]" onSubmit={handleSubmit(onSubmit)}>
            <Avatar name={name} src={src ? "https://hinhcute.net/wp-content/uploads/2025/07/hinh-anh-avatar-trang-cuc-chat-08-05-2025.jpg" : ""}/>
            <Input defaultValue="Có gì mới?" placeholder="Có gì mới?" {...register("message")} />
            <Button type="submit" variant="outline" className="ml-auto">Đăng</Button>
        </form>       
    )
}

export default News;