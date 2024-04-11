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
import { useEffect, useState } from "react"

import { toast } from "@/components/ui/use-toast"

import { revalidatePath } from "next/cache"
import addFormAction from "@/actions/addFormAction"

export function ClientForm() {

  const initialState = {
    active: false,
    status: false,
    message: "",
  }

  const SubmitButton = () => {
    const {pending} = useFormStatus();
    return (
      <Button aria-disabled={pending} disabled={pending} className="mt-6 mx-4" type="submit">
        {pending ? <ReloadIcon className=" mx-4 h-4 w-4 animate-spin " /> : "Submit"}
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

  // async function onSubmit(values: z.infer<typeof schema>) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
 
  //   // form.reset();
  //   // const mes:any= await addClientData(values);
  //   // console.log(`mes: ${mes} ${mes.ok} ${mes.message}`)

  //   // {mes.ok ? toast.error(mes.message) : toast.success(mes.message)}
    
  //   // {mes.ok ? toast({
  //   //   title: mes.message,
  //   //   description: "Client added successfully"}) : 
  //   // toast({variant : "destructive",
  //   //   title: mes.message,
  //   //   description: "Make sure your client is reachable and has wifi-agent runnning on it."
  //   // })
  //   // }
    
  //   // {mes.ok ? revalidatePath("/") : console.log("error")}
  //   toast({
  //     title: "Client Added",
  //     description: state.message,
  //   })
  // }

  const [state, formAction] = useFormState(addFormAction, initialState);
  // const formRef = useRef<HTMLFormElement>(null);
  useEffect(()=>{
    console.log(`active: ${state.active} in useffect`)
    if(state.active == true){

      if(state?.status == true){
        if(state?.resStatus == 201){
          toast({
            title: "Client added successfully",
            description: state.message,
          })
        }else{
          toast({
            title: "Error in adding client",
            description: state.message,
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
          // ref={formRef}
          // onSubmit={form.handleSubmit(()=> formRef.current?.requestSubmit)}
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
          {/* className="bg-white" */}
          <div >
            <SubmitButton />
            {/* <Button  className="mt-6 mx-4" type="submit">Submit</Button>  */}
            {/* {pending ? <ButtonLoading /> : <SubmitButton />} */}
          </div>
          {/* className="items-end py-4" */}
          
        </form>
          {/* {state?.message !== "" && (
            <div className="text-red-500">
              {state.message}
            </div>
          )} */}
      </Form>
    </>

    
  )
}