"use client"

import { any, z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { X } from "lucide-react";
import { Input } from "@/components/ui/input"
import { useFormStatus } from "react-dom"
import { ReloadIcon } from "@radix-ui/react-icons"
import { useFormState } from "react-dom"
import { addClientData } from "@/actions/addClientData"
import {schema} from "../../../types/client-schema"




// type FormSchema = z.infer<typeof schema>
export function ClientForm() {
  //  function ButtonLoading() {
//   return (
//     <Button className="mt-8 mx-4" disabled>
//       <ReloadIcon className=" mr-2 h-4 w-4 animate-spin " />
//       Please wait
//     </Button>
//   )
// }
//   const {pending} = useFormStatus();

//   const SubmitButton = () => {
//     return (
//       <Button type="submit" className="mt-8 mx-4" >
//         Submit
//       </Button>
//     );
//   }
 
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      labName: "",
      descriptionName: "",
      ethernetIP: "",
      hostPort: "",
      interfaceName: "",
      adminUsername: "",
      adminPassword: "",
    },
  })
  // const formRef = useRef<HTMLFormElement>(null);
  // django admin db creds -  vibhav.1507@
  // vibhavtest

  function onSubmit(values: z.infer<typeof schema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
 
    form.reset();
    addClientData(values);
  }

  // const [state, formAction] = useFormState(addClientData, {
  //   message: "",
  // });

  return (
    //style={{background:"red"}} action={}
      <Form {...form} >
        <form 
          onSubmit={form.handleSubmit(onSubmit)}
          className=" mt-4 flex flex-row" >
          <div  className="gap-x-4 flex flex-row  items-end justify-between mb-2 ">
          {/* style={{background:"blue"}} */}
            <div>
              <FormField
              control={form.control}
              name="labName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="ml-1" >Lab</FormLabel>
                  <FormControl>
                    <Input
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        // Focus on the next input field
                        const nextInput = document.querySelector<HTMLInputElement>(
                          '[name="descriptionName"]'
                        );
                        console.log(nextInput)
                        if (nextInput) {
                          nextInput.focus();
                        }
                      }
                    }}
                    
                     placeholder="placeholder..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            </div>
            
            <FormField
              control={form.control}
              name="descriptionName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="ml-1" >Description</FormLabel>
                  <FormControl>
                    <Input
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        // Focus on the next input field
                        const nextInput = document.querySelector<HTMLInputElement>(
                          '[name="ethernetIP"]'
                        );
                        if (nextInput) {
                          nextInput.focus();
                        }
                      }
                    }}
                    
                     placeholder="placeholder..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ethernetIP"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="ml-1" >Ethernet IP</FormLabel>
                  <FormControl>
                    <Input 
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        // Focus on the next input field
                        const nextInput = document.querySelector<HTMLInputElement>(
                          '[name="hostPort"]'
                        );
                        if (nextInput) {
                          nextInput.focus();
                        }
                      }
                    }}
                    //  required={false} 
                     placeholder="placeholder..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="hostPort"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="ml-1" >Port</FormLabel>
                  <FormControl>
                    <Input 
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        // Focus on the next input field
                        const nextInput = document.querySelector<HTMLInputElement>(
                          '[name="interfaceName"]'
                        );
                        if (nextInput) {
                          nextInput.focus();
                        }
                      }
                    }}
                    placeholder="placeholder..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="interfaceName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="ml-1" >Interface</FormLabel>
                  <FormControl>
                    <Input 
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        // Focus on the next input field
                        const nextInput = document.querySelector<HTMLInputElement>(
                          '[name="adminUsername"]'
                        );
                        if (nextInput) {
                          nextInput.focus();
                        }
                      }
                    }}
                    placeholder="placeholder..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="adminUsername"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="ml-1" >Username</FormLabel>
                  <FormControl>
                    <Input  
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        // Focus on the next input field
                        const nextInput = document.querySelector<HTMLInputElement>(
                          '[name="adminPassword"]'
                        );
                        if (nextInput) {
                          nextInput.focus();
                        }
                      }
                    }}
                    placeholder="placeholder..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="adminPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="ml-1" >Password</FormLabel>
                  <FormControl>
                    <Input placeholder="placeholder..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* className="bg-white" */}
          <div >
            {/* <SubmitButton /> */}
            <Button  className="mt-8 mx-4" type="submit">Submit</Button> 
            {/* {pending ? <ButtonLoading /> : <SubmitButton />} */}
          </div>
          {/* className="items-end py-4" */}
        </form>
      </Form>
    
  )
}