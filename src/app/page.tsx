import { columns } from "@/components/custom/table/columns"
import { DataTable } from "@/components/custom/table/data-table"
import {ModeToggle} from "@/components/theme/dark-mode"
import { getClientData } from "@/actions/getClientData"
import { ClientForm } from "@/components/custom/form/client-form"
import { SsidForm } from "@/components/custom/form/ssid-form"


export default async function DemoPage() {
  const data = await getClientData();
  // console.log ( `data at page is ${data }`); 

  return (
    <div className="container mx-auto py-10">
      {/* <SsidForm /> */}
      <ModeToggle />
      <ClientForm />
      <DataTable columns={columns} data={data} />
      {/* <Example clientData={data} /> */}
    </div>
  )
}
