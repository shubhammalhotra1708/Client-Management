import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {TClient} from "@/types/types"
// import { FaEdit } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import EditForm from "../form/edit-form"

export function EditClient({client} : {client: TClient}) {
  // console.log(`client ${client.ethernet_ip}`)
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
