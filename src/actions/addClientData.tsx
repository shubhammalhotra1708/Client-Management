"use server"
import {schema} from "../types/client-schema";
import {z} from "zod";
import { TClient, TDataAll } from '@/types/types';
import { revalidatePath } from "next/cache";
import React from "react";
// import { useToast } from "@/components/ui/use-toast"
import { toast } from "sonner"
import { AnyRecord } from "dns";




const baseUrl = process.env.BASE_URL;
const token = process.env.TOKEN;

// for server side validation of form data

// export type FormState = {
//   message: string;
//   fields?: Record<string, string>;
//   issues?: string[];
// };

// export async function addClientData(
//   prevState: FormState,
//   data: FormData
// ): Promise<FormState> {
//   const formData = Object.fromEntries(data);
//   const parsed = schema.safeParse(formData);

//   if (!parsed.success) {
//     const fields: Record<string, string> = {};
//     for (const key of Object.keys(formData)) {
//       fields[key] = formData[key].toString();
//     }
//     return {
//       message: "Invalid form data",
//       fields,
//       issues: parsed.error.issues.map((issue) => issue.message),
//     };
//   }

//   return { message: "Client Added" };
// }

export async function addClientData(
  data:z.infer<typeof schema>
){
  // Hardcoded values
  const user = 1;
  // const interfaceVal = "en0";
  // const description = "Test description";
  const trafficProfile = "SampleProfile";

  // Create the body object
  const bd = {
    "user": user,
    "ethernet_ip": `${data.ethernetIP}`, 
    "client_port": `${data.hostPort}`,
    "client_username": `${data.adminUsername}`,
    "client_password": `${data.adminPassword}`, 
    "client_lab": `${data.labName}`, 
    "traffic_profile": trafficProfile,
    "description": `${data.descriptionName}`, 
    "interface_name": `${data.interfaceName}`,
  };
console.log(JSON.stringify(bd));
// const { toast } = useToast()
  const settings = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(bd),
  };
    try {
      const fetchResponse = await fetch(`${baseUrl}/manage/clients/`, settings);
      // const res = await fetchResponse.json();
      // console.log(res);
      // toast("Client Added")
      // revalidatePath("/")
      const res = await fetchResponse.json();
      console.log(`res: ${res}`);
      console.log(`fetchResponse.ok: ${fetchResponse.ok}`);
      console.log(`fetchResponse.status: ${fetchResponse.status}`);

      return {status: fetchResponse.ok, message: res.message}
    } catch (e: any) {
      console.log(e);
      // toast.error("error:")
      return { message : e.message}
    } 

}