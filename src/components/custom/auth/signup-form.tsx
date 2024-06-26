"use client"
import * as React from "react"

import { z } from "zod"
import { Icons } from "@/components/ui/icons"
import { cn } from "@/lib/utils"


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
import { useFormState,useFormStatus } from "react-dom"
import { useEffect } from "react"

import { toast } from "@/components/ui/use-toast"
import { signupSchema } from "../../../types/client-schema";
import { redirect } from "next/navigation"

export interface SignupProps extends React.HTMLAttributes<HTMLDivElement> {
  signup: any;
}
export function SignupForm({ className, signup, ...props }: SignupProps) {

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      emailLogin: "",
      passwordLogin: "",
      full_name: "",
    },
  })
  const initialState = {
    active: false,
    status: false,
    resStatus: 0,
    message: "",
  }
  const SubmitButton = () => {
    const {pending} = useFormStatus();
    return (
      <Button aria-disabled={pending} disabled={pending} type="submit">
        {pending ? <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />: "Submit"}
      </Button> 
    );
  }

  const [state, formAction] = useFormState(signup, initialState);
  useEffect(() => {
    if (state.active == true) {

      if (state?.status == true) {
        if (state?.resStatus == 200) {
          redirect("/")
        } else {
          toast({
            title: "Error in sign in",
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
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }


  return (
    <div className={cn("grid gap-6", className)} {...props}>

      <Form {...form} >
        <form action={formAction}>
        <div className="grid gap-2">

          <FormField
            control={form.control}
            name="emailLogin"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="ml-1" >Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        // Focus on the next input field
                        const nextInput = document.querySelector<HTMLInputElement>(
                          '[name="passwordLogin"]'
                        );
                        console.log(nextInput)
                        if (nextInput) {
                          nextInput.focus();
                        }
                      }
                    }}

                    placeholder="name@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="passwordLogin"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="ml-1" >Password</FormLabel>
                <FormControl>
                  <Input
                  type="password"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        // Focus on the next input field
                        const nextInput = document.querySelector<HTMLInputElement>(
                          '[name="full_name"]'
                        );
                        if (nextInput) {
                          nextInput.focus();
                        }
                      }
                    }}

                    {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="ml-1" > Full Name</FormLabel>
                <FormControl>
                  <Input
                    {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            <SubmitButton />
          </div>
        </form>
      </Form>
    </div>


  )
}