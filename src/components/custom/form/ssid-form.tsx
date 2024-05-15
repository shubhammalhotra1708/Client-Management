"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const schema = z.object({
  ssidName: z.string().min(1),
  ssidSecurity: z.string().min(1),
  ssidPassword: z.string().min(1),
});

export function SsidForm() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      ssidName: "",
      ssidPassword: "",
      ssidSecurity: "",

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
 

  const initialState = {
    message: null,
  }
  return (
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-row" >
          <div  className="gap-x-4 flex flex-row  items-end justify-between mb-2 ">
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
                     placeholder="placeholder..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div >
            <Button  className="mt-8 mx-4" type="submit">Submit</Button> 
          </div>
        </form>
      </Form>
    
  )
}