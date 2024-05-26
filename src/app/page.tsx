import { cookies } from 'next/headers'
import { redirect } from "next/navigation"

export default async function DemoPage() {
  const session = cookies().get("session")?.value;
  if (!session || session === "") {
    redirect("/login")
  }else{
    redirect("/dashboard")
  }
}
