import { columns } from "./columns"
import { DataTable } from "./data-table"
import {ModeToggle} from "@/components/theme/dark-mode"
import { getClientData } from "@/actions/getClientData"
import { ClientForm } from "@/components/ui/client-form"

export default async function DemoPage() {
  // const data = await getData()
  const data = await getClientData();
  console.log(data);

  return (
    <div className="container mx-auto py-10">
      <ModeToggle />
      <ClientForm />
      <DataTable columns={columns} data={data} />
    </div>
  )
}
