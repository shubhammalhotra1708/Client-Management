"use server"

import { cookies } from "next/headers";
import { getSession, getUser } from "../auth/loginActions";

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

async function addClientData(
  // data:z.infer<typeof schema>
  prevState: any,
  formData: FormData
){
  const data= Object.fromEntries(formData);
  // Hardcoded values
  // const interfaceVal = "en0";
  // const description = "Test description";
  // const user=1;
  const user = await getUser();
  console.log(`id is ${user.user.id}`)
  const session = await getSession();

  const trafficProfile = "SampleProfile";

  // Create the body object
  const bd = {
    "user": `${user.user.id}`,
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
      const res = await fetchResponse.json();
      console.log(`res: ${res.message}`);
      console.log(`fetchResponse.ok: ${fetchResponse.ok}`);
      console.log(`fetchResponse.status: ${fetchResponse.status}`);
      return {active:true,status: true, resStatus:fetchResponse.status, message: res.message}
    } catch (e: any) {
      console.log(e);
      return {active:true, status: false,message : "error reaching api response - catch block"}
    } 

}
export default addClientData;