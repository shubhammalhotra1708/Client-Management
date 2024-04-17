"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormState } from "react-dom"
import { useEffect } from "react"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { toast } from "@/components/ui/use-toast"
import { loginSchema } from "../../types/client-schema";
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useFormStatus } from "react-dom"
import { ReloadIcon } from "@radix-ui/react-icons"


export interface LoginProps extends React.HTMLAttributes<HTMLDivElement> {
  login: any;
}

export function LoginForm({ className, login, ...props }: LoginProps) {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      emailLogin: "",
      passwordLogin: "",
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

  const [state, formAction] = useFormState(login, initialState);
  //toast
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
                      // disabled={isLoading}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          // Focus on the next input field
                          const nextInput = document.querySelector<HTMLInputElement>(
                            '[name="passwordLogin"]'
                          );
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
                      // type="password"
                      // disabled={isLoading}
                      {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SubmitButton />
            {/* <Button type="submit"disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Log In with Email
            </Button> */}
          </div>
        </form>
      </Form>
      {/* github or alt login options */}

      {/* <div className="relative">
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
      </Button> */}
    </div>
  )
}