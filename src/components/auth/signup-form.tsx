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
import { useFormState } from "react-dom"
import { useEffect } from "react"

import { toast } from "@/components/ui/use-toast"
import { signupSchema } from "../../types/client-schema";
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

  const [state, formAction] = useFormState(signup, initialState);
  useEffect(() => {
    // console.log(`active: ${state.active} in useffect`)
    if (state.active == true) {

      if (state?.status == true) {
        if (state?.resStatus == 200) {
          redirect("/")
        } else {
          toast({
            title: "Error in loggin in",
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
          <Button type="submit" onSubmit={onSubmit} disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Log In with Email
          </Button>
          </div>
        </form>
      </Form>

      {/* github or alt login options */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        GitHub
      </Button>
    </div>


  )
}