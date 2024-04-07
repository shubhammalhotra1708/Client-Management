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
import { Input } from "@/components/ui/input"
import { useFormStatus } from "react-dom"
import { ReloadIcon } from "@radix-ui/react-icons"
import { useFormState } from "react-dom"
// import { init } from "next/dist/compiled/webpack/webpack"
import { addClientData } from "@/actions/addClientData"


const schema = z.object({
  ssidName: z.string().min(1),
  ssidSecurity: z.string().min(1),
  ssidPassword: z.string().min(1),
  // hostPort: z.string().min(1),
  // adminUsername: z.string().min(1),
  // adminPassword: z.string().min(1),
});
// const parse = schema.safeParse({
//   labName: formData.get('labName'),
//   clientName: formData.get("clientName"),
//   clientHostName: formData.get("clientHostName"),
//   hostPort: formData.get("hostPort"),
//   adminUsername: formData.get("adminUsername"),
//   adminPassword: formData.get("adminPassword"),
// });

// const formSchema = z.object({
//   username: z.string().min(2).max(50),
// })

export function SsidForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      ssidName: "",
      ssidPassword: "",
      ssidSecurity: "",
      // hostPort: "",
      // adminUsername: "",
      // adminPassword: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof schema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setTimeout(() => {
      console.log("Hello, World!");
    }, 2000);
    form.reset();
    console.log(values)
  }
 
 
 function ButtonLoading() {
  return (
    <Button className="mt-8 mx-4" disabled>
      <ReloadIcon className=" mr-2 h-4 w-4 animate-spin " />
      Please wait
    </Button>
  )
}
  const {pending} = useFormStatus();

  const SubmitButton = () => {
    return (
      <Button type="submit" className="mt-8 mx-4" >
        Submit
      </Button>
    );
  }
  const initialState = {
    message: null,
  }
  // const [state , clientAction] = useFormState(addClientData , initialState);
  return (
    //style={{background:"red"}} action={}
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)}
          // action={addClientData}
          // style={{background:"blue"}} 
          // action="onSubmit"
          className="flex flex-row" >
          <div  className="gap-x-4 flex flex-row  items-end justify-between mb-2 ">
          {/* style={{background:"blue"}} */}
            <div>
              <FormField
                control={form.control}
                name="ssidName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>SSID</FormLabel>
                    <FormControl>
                      <Input 
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          // Focus on the next input field
                          const nextInput = document.querySelector<HTMLInputElement>(
                            '[name="ssidSecurity"]'
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
              name="ssidSecurity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Security</FormLabel>
                  <FormControl>
                    <Input
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        // Focus on the next input field
                        const nextInput = document.querySelector<HTMLInputElement>(
                          '[name="ssidPassword"]'
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
              name="ssidPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input 
                    // onKeyDown={(e) => {
                    //   if (e.key === "Enter") {
                    //     e.preventDefault();
                    //     // Focus on the next input field
                    //     const nextInput = document.querySelector<HTMLInputElement>(
                    //       '[name="hostPort"]'
                    //     );
                    //     if (nextInput) {
                    //       nextInput.focus();
                    //     }
                    //   }
                    // }}
                    //  required={true} 
                     placeholder="placeholder..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
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
            /> */}
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