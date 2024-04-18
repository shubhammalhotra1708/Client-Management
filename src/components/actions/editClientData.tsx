"use server"
import { getSession, getUser } from "../auth/loginActions";
const baseUrl = process.env.BASE_URL;

export async function editClientData(
  prevState: any,
  formData: FormData
){
  const data= Object.fromEntries(formData);

  // Hardcoded values
    // const interfaceVal = "en0";
  // const description = "Test description";
  const trafficProfile = "SampleProfile";
  const usr = await getUser();
  const user  = usr.user.id;
  console.log(`id is ${user}`)
  const session = await getSession();

  // Create the body object
  const bd = {
    "user": `${user}`,
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

  const settings = {
    headers: {
      'Authorization': `Bearer ${session.token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(bd),
  };
  try {
      const fetchResponse = await fetch(`${baseUrl}/manage/clients/modify/`, settings);
      console.log(`${baseUrl}/manage/clients/modify/`)
      const res = await fetchResponse.json();
      console.log(res);
      console.log(fetchResponse.status);
      return {active:true,status: true, resStatus:fetchResponse.status, message: res}
  } catch (e) {
      console.log(e);
      return {active:true, status: false,message : "error reaching api response - catch block"}


  } 

}