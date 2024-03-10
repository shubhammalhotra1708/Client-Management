import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import {ModeToggle} from "@/components/theme/dark-mode"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
        id: "728ed52g",
        amount: 200,
        status: "success",
        email: "s@example.com",
    },
    {
        id: "728ed52h",
        amount: 300,
        status: "failed",
        email: "a@example.com",
    },

    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
        <ModeToggle />
      <DataTable columns={columns} data={data} />
    </div>
  )
}
