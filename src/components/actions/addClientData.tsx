"use server"
import { revalidatePath } from "next/cache";
import { getSession, getUser } from "../auth/loginActions";

const baseUrl = process.env.BASE_URL;

export async function addClientData(
  prevState: any,
  formData: FormData
){
  console.log("pressed button")
  const data= Object.fromEntries(formData);
  const usr = await getUser();
  const user = usr.user.id
  console.log(`id is ${user}`)
  const session = await getSession();

  const trafficProfile = "SampleProfile";

  // Create the body object
  const bd = {
    "user": `${user}`,
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
      'Authorization': `Bearer ${session.token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(bd),
  };
    try {
      console.log(`token in add is ${session.token}`)
      const fetchResponse = await fetch(`${baseUrl}/manage/clients/`, settings);
      console.log(` POST ${baseUrl}/manage/clients/`)
      const res = await fetchResponse.json();
      console.log(`res: ${res.message}`);
      console.log(`fetchResponse.ok: ${fetchResponse.ok}`);
      console.log(`fetchResponse.status: ${fetchResponse.status}`);
      revalidatePath("/")
      // console.log(res.message.non_field_errors);
      return {active:true,status: true, resStatus:fetchResponse.status, message: res.message}
    } catch (e: any) {
      console.log(e);
      return {active:true, status: false,message : "error reaching api response - catch block"}
    } 

}