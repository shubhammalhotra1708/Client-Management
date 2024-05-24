import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {TClient} from "@/types/types"
import { MdOutlineEdit } from "react-icons/md";
import EditForm from "../form/edit-form"

export function EditClient({client} : {client: TClient}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <MdOutlineEdit size={16} />
        </Button>
      </DialogTrigger>
      {/* width of dialog box */}
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Edit Client</DialogTitle>
          <DialogDescription>
            Make changes to your client here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
          <EditForm client={client} />
      </DialogContent>
    </Dialog>
  )
}
