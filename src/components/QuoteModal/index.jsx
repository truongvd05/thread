import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
function QuoteModal({open, onClose}) {
    return (
    <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px] [&>button]:hidden">
          <DialogHeader>
            <div className="flex justify-between items-center">
              <Button variant="outline">Cancel</Button>
              <DialogTitle>
                New thread
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
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default QuoteModal;