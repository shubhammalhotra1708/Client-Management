"use client"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { CardFooter, Card } from "@/components/ui/card"
import Link from 'next/link'
import { useState } from "react"

export default function ProfileCard({ trafficProfileID }: { trafficProfileID: number }) {
  const [trafficStatus, setTrafficStatus] = useState(true)

  return (
    <>

      <Card className="w-full max-w-sm ">
        <div className="flex items-center justify-between p-4">
          <div className="grid gap-1">
            <h3 className="text-lg font-medium">Traffic Profile {trafficProfileID}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Monitor and control your network traffic.</p>
          </div>
          <Switch checked={trafficStatus} onCheckedChange={() => setTrafficStatus(!trafficStatus)} id="profileStatus" />

        </div>
        <Separator />
        <div className="grid gap-6 p-4">
          <div>
            <div className="flex items-center justify-between">
              <h4 className="text-base font-medium">Browsing</h4>
              <Switch checked={trafficStatus} onCheckedChange={() => setTrafficStatus(!trafficStatus)} id="browsingStatus" />

            </div>
            <div className="grid gap-2 mt-2">
              <div className="flex items-center justify-between text-sm">
                <span>HTTP Requests</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Bandwidth Usage</span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h4 className="text-base font-medium">File Operations</h4>
              <Switch checked={trafficStatus} onCheckedChange={() => setTrafficStatus(!trafficStatus)} id="fileOpStatus" />

            </div>
            <div className="grid gap-2 mt-2">
              <div className="flex items-center justify-between text-sm">
                <span>Uploads</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Downloads</span>
              </div>
            </div>
          </div>
        </div>
        <CardFooter className="flex items-center justify-center">
          <Link href={`/traffic/${trafficProfileID}`}>
            <Button >Details</Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  )
}