import { columns } from "../../components/custom/columns"
import { DataTable } from "../../components/custom/data-table"
import {ModeToggle} from "@/components/theme/dark-mode"
import { getClientData } from "@/actions/getClientData"
import { ClientForm } from "@/components/custom/client-form"
import { SsidForm } from "@/components/custom/ssid-form"

export default async function DemoPage() {
  const data = await getClientData();
  // console.log ( data); 

  return (
    <div className="container mx-auto py-10">
      <ModeToggle />
      <ClientForm />
      {/* <SsidForm /> */}
      <DataTable columns={columns} data={data} />
    </div>
  )
}
