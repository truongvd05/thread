import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Post from "@/pages/Home/components/Post"

function Reply({ open, onClose }) {
return (
    <Dialog open={open} onOpenChange={onClose}>
      <form>
        <DialogContent className="sm:max-w-[425px] [&>button]:hidden">
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
          <Post />
          <DialogFooter>
            <Button type="submit">Post</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default Reply;