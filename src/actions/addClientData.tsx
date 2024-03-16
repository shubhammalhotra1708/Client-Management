"use server"
import {schema} from "../components/custom/client-schema";
import {z} from "zod";

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
  console.log(data);

}