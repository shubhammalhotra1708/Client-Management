import { columns } from "@/components/custom/table/columns"
import { DataTable } from "@/components/custom/table/data-table"
import { ModeToggle } from "@/components/theme/dark-mode"
import { getClientData } from "@/components/actions/getClientData"
import { ClientForm } from "@/components/custom/form/client-form"
import { cookies } from 'next/headers'
import { redirect } from "next/navigation"
import { LogoutComp } from "@/components/auth/logout"
import { logout } from "@/components/auth/loginActions";
import DataTableComp from "@/components/custom/table/data-table-component"
import { Suspense } from "react"
import {SkeletonTable} from "@/components/custom/table/skeleton-table"



export default async function DemoPage() {
  // const session = cookies().get("session")?.value;
  // if (!session || session === "") {
  //   redirect("/login")
  // }

  // const data = await getClientData();

  return (
    <div className="container w-fit ">
      {/* <SsidForm /> */}
      <div className="flex flex-row justify-between">
        {/* <ModeToggle /> */}
        {/* <LogoutComp logout={logout}/> */}
      </div>

      <ClientForm />
      <Suspense fallback={SkeletonTable()}>
        <DataTableComp />
      </Suspense>
    </div>
  )
}
