"use client"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { MdDeleteOutline } from "react-icons/md";
import { TClient } from "@/types/types"
import { deleteClientData } from "@/components/actions/deleteClientData";
import { useFormState } from "react-dom";
import { toast } from "@/components/ui/use-toast"
import { revalidatePath } from "next/cache";
import { useEffect } from "react";
import {
  Form,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { emptySchema } from "@/types/client-schema";

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"


export function DeleteClient({ client }: { client: TClient }) {

  const form = useForm<z.infer<typeof emptySchema>>({
    resolver: zodResolver(emptySchema),
  })
  const initialState = {
    active: false,
    status: false,
    resStatus: true,
    message: "",
  }
  const clientID = client.id
  const deleteClientDataID = deleteClientData.bind(null, clientID)
  const [state, formAction] = useFormState(deleteClientDataID, initialState);
  useEffect(() => {
    // console.log(`active: ${state.active} in useffect`)
    // console.log(state)
    if (state.active == true) {

      if (state?.status == true) {
        if (state?.resStatus == true) {
          toast({
            title: "Client deleted successfully",
            description: state.message,
          })
          // revalidatePath("/")
        } else {
          toast({
            title: "Error in deleting client",
            description: state.message,
            variant: "destructive"
          })
        }
      } else {
        toast({
          title: "Error in reaching wifi agent",
          description: state.message,
          variant: "destructive"
        })
      }
    }

  }, [state])

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button onClick={() => console.log(`client in delete client is ${client.id}`)} variant="ghost">
          <MdDeleteOutline color="red" size={18} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to delete your client {client.ethernet_ip} ?</AlertDialogTitle>
          <AlertDialogDescription>
            This action will permanently delete your
            client and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          {/* <AlertDialogAction >Continue</AlertDialogAction> */}
          <Form {...form} >
            <form action={formAction}>
              <AlertDialogAction type="submit" >Continue</AlertDialogAction>
            </form>
          </Form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
