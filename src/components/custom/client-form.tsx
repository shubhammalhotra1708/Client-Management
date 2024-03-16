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
import { useRef } from "react"
import {schema} from "./client-schema"




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
      clientName: "",
      clientHostName: "",
      hostPort: "",
      adminUsername: "",
      adminPassword: "",
    },
  })
  const formRef = useRef<HTMLFormElement>(null);

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
          className=" mt-4   flex flex-row" >
          <div  className="gap-x-4 flex flex-row  items-end justify-between mb-2 ">
          {/* style={{background:"blue"}} */}
            <div>
              <FormField
                control={form.control}
                name="labName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lab Name</FormLabel>
                    <FormControl>
                      <Input 
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          // Focus on the next input field
                          const nextInput = document.querySelector<HTMLInputElement>(
                            '[name="clientName"]'
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
            </div>
            
            <FormField
              control={form.control}
              name="clientName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Client Name</FormLabel>
                  <FormControl>
                    <Input
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        // Focus on the next input field
                        const nextInput = document.querySelector<HTMLInputElement>(
                          '[name="clientHostName"]'
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
              name="clientHostName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Client IP</FormLabel>
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
                  <FormLabel>Host Port</FormLabel>
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
                  <FormLabel>Admin Username</FormLabel>
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
                  <FormLabel>Admin Password</FormLabel>
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