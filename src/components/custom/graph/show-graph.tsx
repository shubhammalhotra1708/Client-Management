"use client"
import { Button } from "@/components/ui/button"
import { SiSpeedtest } from "react-icons/si";
import { TClient } from "@/types/types"
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export const ShowGraph = ({ client, status }: { client: TClient, status: boolean }) => {
  const clientID = client.id
  const clientName = client.hostname
  return (
    <div>
      <Link href={`/speedtest/${clientID}`} >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost" disabled={status}>
                <SiSpeedtest size={16} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Speedtest Results</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
    </div >
  )
}