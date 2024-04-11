"use server"
import {schema} from "../types/client-schema";
import {z} from "zod";
import { TClient, TDataAll } from '@/types/types';
import { revalidatePath } from "next/cache";
import React from "react";


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

export async function editClientData(
  data:z.infer<typeof schema>
){
  // Hardcoded values
  const user = 1;
  console.log(data)
  // const interfaceVal = "en0";
  // const description = "Test description";
  const trafficProfile = "SampleProfile";

  // Create the body object
  const bd = {
    "user": user,
    "ethernet_ip": `${data.ethernetIP}`, 
    "client_port": data.hostPort, 
    "client_username": `${data.adminUsername}`,
    "client_password": `${data.adminPassword}`, 
    "client_lab": `${data.labName}`, 
    "traffic_profile": trafficProfile,
    "description": `${data.descriptionName}`, 
    "id" : 10,
    "interface_name": `${data.interfaceName}`,
  };

console.log(JSON.stringify(bd));


// const response = await fetch(`${baseUrl}/manage/clients`, {
//   headers: {
//     'Authorization': `Bearer ${token}`
//   },
//   method: 'POST',
//   body: JSON.stringify(bd), // Convert bd object to JSON
// });
// if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
// }
// const res = await response.json();
// console.log(res);
// revalidatePath('/payments');

  const settings = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(bd),
  };
  try {
      const fetchResponse = await fetch(`${baseUrl}/manage/clients/modify/`, settings);
      const res = await fetchResponse.json();
      console.log(res);
      return {status: fetchResponse.status, message: res.message}
      // return res;
  } catch (e) {
      console.log(e);
      return {message : "e"}

  } 

}