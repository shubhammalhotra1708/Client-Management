import * as React from "react"
import ProfileCard from "@/components/custom/traffic/profileCard"
import { Button } from "@/components/ui/button"


export default function CardWithForm() {
  const trafficProfileID: number = 1
  return (
    <div>
      <div className="flex items-center justify-center mb-6">
        <Button variant="secondary" size="lg">Add +</Button>
      </div>
      <ProfileCard trafficProfileID={trafficProfileID} />
    </div>

  )
}



