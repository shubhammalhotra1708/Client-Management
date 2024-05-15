import { columns } from "@/components/custom/table/columns"
import { DataTable } from "@/components/custom/table/data-table"
import { getClientData } from "@/components/actions/getClientData"
import { cookies } from 'next/headers'
import { redirect } from "next/navigation"

export default async function DataTableComp(){
  const session = cookies().get("session")?.value;
  if (!session || session === "") {
    redirect("/login")
  }

  const data = await getClientData();
  return (
    <DataTable columns={columns} data={data} />

  )
}