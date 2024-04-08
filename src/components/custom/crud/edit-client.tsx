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
  console.log(`client ${client.ethernet_ip}`)
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
        {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="labName" className="text-left">
              Lab Name
            </Label>
            <Input
              id="labName"
              defaultValue={client.client_lab}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="descriptionName" className="text-left">
              Description
            </Label>
            <Input
              id="descriptionName"
              defaultValue={client.client_lab}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="clientName" className="text-left whitespace-nowrap">
              Hostname
            </Label>
            <Input
              id="hostname"
              defaultValue={client.hostname}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="ethernetIP" className="text-left">
              Ethernet IP
            </Label>
            <Input
              id="ethernetIP"
              defaultValue={client.ethernet_ip}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="hostPort" className="text-left">
              Port
            </Label>
            <Input
              id="hostPort"
              defaultValue={client.client_port}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="interfaceNumber" className="text-left">
              Interface
            </Label>
            <Input
              id="interfaceNumber"
              defaultValue={client.interface_name}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="adminUsername" className="text-left">
              Username
            </Label>
            <Input
              id="adminUsername"
              defaultValue={client.client_username}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="adminPassword" className="text-left">
              Password
            </Label>
            <Input
              id="adminPassword"
              defaultValue={client.client_password}
              className="col-span-3"
            />
          </div>
        </div> */}
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
