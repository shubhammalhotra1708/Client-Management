import { ClientForm } from "@/components/custom/form/client-form"


import DataTableComp from "@/components/custom/table/data-table-component"
import { Suspense } from "react"
import {SkeletonTable} from "@/components/custom/table/skeleton-table"


export default async function DashboardPage() {
  return (
    <div className="container w-fit ">
      {/* <SsidForm /> */}
      <div className="flex flex-row justify-between">
        {/* <ModeToggle /> */}
      </div>

      <ClientForm />
      <Suspense fallback={SkeletonTable()}>
        <DataTableComp />
      </Suspense>
    </div>
  )
}