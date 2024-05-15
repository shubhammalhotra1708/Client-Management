"use server"

import { revalidatePath } from "next/cache";
import { getSession } from "../auth/loginActions";


const baseUrl = process.env.BASE_URL;

export async function deleteClientData(
  clientID:number, 
  prevState: any,
  formData: FormData
){
  const bd = {
    "id" : `[${clientID}]`
  };
  const session = await getSession();
  console.log(JSON.stringify(bd));

  const settings = {
    headers: {
      'Authorization': `Bearer ${session.token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'DELETE',
    body: JSON.stringify(bd),
  };
  try {
      const fetchResponse = await fetch(`${baseUrl}/manage/clients/modify/`, settings);
      console.log(fetchResponse.status);
      console.log(fetchResponse.ok)
      revalidatePath("/")

      return {active:true,status: true, resStatus:fetchResponse.ok, message: "Client deleted successfully"}
  } catch (e) {
      console.log(e);
      return {active:true, status: false,message : "error reaching api response - catch block"}


  } 

}