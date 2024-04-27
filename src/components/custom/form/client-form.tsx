"use client"

import {  z } from "zod"
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
import { useFormStatus } from "react-dom"
import { ReloadIcon } from "@radix-ui/react-icons"
import { useFormState } from "react-dom"
import {schema} from "../../../types/client-schema"
import { createRef, useEffect } from "react"

import { toast } from "@/components/ui/use-toast"
import { useRef } from "react";


import { revalidatePath } from "next/cache"
import addClientData from "@/components/actions/addClientData"
import { Icons } from "@/components/ui/icons"


export function ClientForm() {

  const initialState = {
    active: false,
    status: false,
    message: "",
  }
  const ref = createRef<HTMLFormElement>();

  const SubmitButton = () => {
    const {pending} = useFormStatus();
    return (
      <Button aria-disabled={pending} disabled={pending} type="submit" className="mt-6 mx-4" >
        {pending ? <Icons.spinner className=" mr-2 h-4 w-4 animate-spin " /> : "Submit"}
      </Button> 
    );
  }
 
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      labName: "",
      descriptionName: "",
      ethernetIP: "",
      hostPort: 8083,
      interfaceName: "",
      adminUsername: "",
      adminPassword: "",
    },
  })

  const clearForm = () => {
    form.reset({
      labName: "",
      descriptionName: "",
      ethernetIP: "",
      hostPort: 8083,
      interfaceName: "",
      adminUsername: "",
      adminPassword: "",
    })
  }
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction] = useFormState(addClientData, initialState);
  useEffect(()=>{
    console.log(`active: ${state.active} in useffect`)
    if(state.active == true){

      if(state?.status == true){
        if(state?.resStatus == 201){
          toast({
            title: "Client added successfully",
            description: state.message,
          })
          clearForm()
          // ref.current?.reset()
          // state=initialState
        }else if (state?.resStatus == 400){
          toast({
            title: "Error in adding client",
            description: state.message.non_field_errors ? state.message.non_field_errors[0]  : "Bad request",
            variant : "destructive"
          })
        }
      }else{
        toast({
          title: "Error in reaching wifi agent",
          description: state.message,
          variant : "destructive"
        })
      }
    }

  },[state])
 
  

  return (
    <>
      <Form {...form} >
        <form 
          // onSubmit={form.handleSubmit(onSubmit)}
          action={formAction}
          //to bring client side validation
          ref={formRef}
          onSubmit={form.handleSubmit(()=> formRef?.current?.requestSubmit)}
          className=" mt-4 flex flex-row" >
          <div  className="gap-x-4 flex flex-row  items-end justify-between mb-2 ">
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
                    
                     placeholder="Pegasus" {...field} />
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
                    
                     placeholder="Test client" {...field} />
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
                     placeholder="10.87.10.200" {...field} />
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
                    type="number"
                    // { ...register('myNumberField', { valueAsNumber: true } ) } 
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
                    placeholder="8083" {...field} />
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
                    placeholder="en1" {...field} />
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
                    placeholder="Pune-Lab" {...field} />
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
                    <Input placeholder="Welcome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div >
            <SubmitButton />
          </div>
          
        </form>
          
      </Form>
    </>

    
  )
}