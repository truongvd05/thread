import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { usePostModal } from "@/feartures/modal/modal";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function ReportModal() {
const { reportOpen, closeReport } = usePostModal();
return (
    <Dialog open={reportOpen} onOpenChange={closeReport}>
      <form>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
              <div className="text-center">
                <DialogTitle>Repost</DialogTitle>
              </div>
              <DialogDescription>
                Why are you reporting this post?
              </DialogDescription>
          </DialogHeader>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Chọn lí do" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Tôi không thích nội dung này</SelectItem>
              <SelectItem value="dark">Nội dun bắt nạt</SelectItem>
              <SelectItem value="system">Tự tử, Tự làm hại bản thân</SelectItem>
            </SelectContent>
        </Select>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default ReportModal;