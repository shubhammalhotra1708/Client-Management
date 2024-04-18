import { columns } from "@/components/custom/table/columns"
import { DataTable } from "@/components/custom/table/data-table"
import { ModeToggle } from "@/components/theme/dark-mode"
import { getClientData } from "@/components/actions/getClientData"
import { ClientForm } from "@/components/custom/form/client-form"
import { cookies } from 'next/headers'
import { redirect } from "next/navigation"
import { LogoutComp } from "@/components/auth/logout"
import { logout } from "@/components/auth/loginActions";



export default async function DemoPage() {
  const session = cookies().get("session")?.value;
  if (!session || session === "") {
    redirect("/login")
  }

  const data = await getClientData();

  return (
    <div className="container  mx-auto py-10">
      {/* <SsidForm /> */}
      <div className="flex flex-row justify-between">
        <ModeToggle />
        <LogoutComp logout={logout}/>
      </div>

      <ClientForm />
      <DataTable columns={columns} data={data} />
    </div>
  )
}
