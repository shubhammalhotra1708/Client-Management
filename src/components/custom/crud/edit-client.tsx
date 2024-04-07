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

export function EditClient({client} : {client: TClient}) {
  console.log(`client ${client.clientName}`)
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <MdOutlineEdit size={16} />

        </Button>
        {/* <Button variant="outline">Edit Profile</Button> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[475px]">
        <DialogHeader>
          <DialogTitle>Edit Client</DialogTitle>
          <DialogDescription>
            Make changes to your client here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="labName" className="text-left">
              Lab Name
            </Label>
            <Input
              id="labName"
              defaultValue={client.clientLab}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="clientName" className="text-left whitespace-nowrap">
              Client Name
            </Label>
            <Input
              id="clientName"
              defaultValue={client.clientName}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="clientIP" className="text-left">
              Client IP
            </Label>
            <Input
              id="clientIP"
              defaultValue={client.clientIP}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="hostPort" className="text-left">
              Host Port
            </Label>
            <Input
              id="hostPort"
              defaultValue={client.clientPort}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="interfaceNumber" className="text-left">
              Interface
            </Label>
            <Input
              id="interfaceNumber"
              defaultValue={client.interface}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="adminUsername" className="text-left">
              Admin Username
            </Label>
            <Input
              id="adminUsername"
              defaultValue={client.clientUsername}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="adminPassword" className="text-left">
              Admin Password
            </Label>
            <Input
              id="adminPassword"
              defaultValue={client.clientPassword}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
