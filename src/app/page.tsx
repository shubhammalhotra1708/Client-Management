import { columns } from "@/components/custom/table/columns"
import { DataTable } from "@/components/custom/table/data-table"
import { ModeToggle } from "@/components/theme/dark-mode"
import { getClientData } from "@/actions/client/getClientData"
import { ClientForm } from "@/components/custom/form/client-form"
import { cookies } from 'next/headers'
import { redirect } from "next/navigation"

import DataTableComp from "@/components/custom/table/data-table-component"
import { Suspense } from "react"
import {SkeletonTable} from "@/components/custom/table/skeleton-table"
import DashboardPage from "./(home)/dashboard/page"



export default async function DemoPage() {
  const session = cookies().get("session")?.value;
  if (!session || session === "") {
    redirect("/login")
  }else{
    redirect("/dashboard")
  }
}
