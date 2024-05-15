"use client"
import { Button } from "@/components/ui/button"
import { SiSpeedtest } from "react-icons/si";
import { TClient } from "@/types/types"
import Link from "next/link";
export const ShowGraph = ({ client }: { client: TClient }) => {
  const clientID = client.id
  const clientName = client.hostname
  // console.log(client.)
  return (
    <div>
      <Link href={`/speedtest/${clientID}`} >
        <Button variant="ghost">
          <SiSpeedtest size={16} />
        </Button>
      </Link>
    </div>
  )
}