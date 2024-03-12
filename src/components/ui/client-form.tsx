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

const schema = z.object({
  labName: z.string().min(1),
  clientName: z.string().min(1),
  clientHostName: z.string().min(1),
  hostPort: z.string().min(1),
  adminUsername: z.string().min(1),
  adminPassword: z.string().min(1),
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

export function ClientForm() {
  // 1. Define your form.
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
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof schema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    form.reset();
    console.log(values)
  }
  return (
    //style={{background:"red"}}
    // <div style={{background:"white"}} className="relative">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-row" >
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
                    {/* onSubmit={(e: React.KeyboardEvent<HTMLInputElement>) => {e.key === 'Enter' && e.preventDefault(); }}  */}
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
                     {/* onSubmit={(e: React.KeyboardEvent<HTMLInputElement>) => {e.key === 'Enter' && e.preventDefault(); }} */}
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
                    // onSubmit={e => { e.preventDefault(); }}
                     required={false} placeholder="placeholder..." {...field} />
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
                    // onSubmit={e => { e.preventDefault(); }} 
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
            <Button  className="mt-8 mx-4" type="submit">Submit</Button> 
          </div>
          {/* className="items-end py-4" */}
        </form>
      </Form>
    // </div>
    
  )
}