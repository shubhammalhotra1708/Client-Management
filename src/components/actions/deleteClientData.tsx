"use server"

import { revalidatePath } from "next/cache";

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

export async function deleteClientData(
  clientID:number, 
  prevState: any,
  formData: FormData
){
 

  const bd = {
    "id" : `[${clientID}]`
  };

  console.log(JSON.stringify(bd));

  const settings = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'DELETE',
    body: JSON.stringify(bd),
  };
  try {
      const fetchResponse = await fetch(`${baseUrl}/manage/clients/modify/`, settings);
      // const res = await fetchResponse.json();
      // console.log(res);
      console.log(fetchResponse.status);
      // console.log(fetchResponse.statusText);
      console.log(fetchResponse.ok)
      // console.log(res);
      revalidatePath("/")

      return {active:true,status: true, resStatus:fetchResponse.ok, message: "Client deleted successfully"}
  } catch (e) {
      console.log(e);
      return {active:true, status: false,message : "error reaching api response - catch block"}


  } 

}