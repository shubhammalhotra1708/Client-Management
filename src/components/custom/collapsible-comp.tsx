"use client"

import * as React from "react"
import { CaretDownIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { TClient } from "@/types/types"
// import type { TableData } from "@/types/types"
type DataWrapper = {data : TClient}

export function CollapsibleComp(data: DataWrapper) {
  const [isOpen, setIsOpen] = React.useState(false)
  console.log("data is ")
  console.log(data)
  const rowData = data.data
  const excludedFields: (keyof TClient)[] = ['id', 'clientName', 'clientIP', 'clientPort', 'clientUsername', 'clientPassword', 'clientLab', 'status', 'ssidname', 'bssid', 'channel' , 'channelband',  'security', 'hwaddr'   ];

    const filteredData = Object.entries(rowData)
        .filter(([key]) => !excludedFields.includes(key as keyof TClient))
        .map(([key, value]) => <h1 key={key}>{key}: {value}</h1>);

    // const excludeFields = ['clientName', 'clientIP', 'clientUsername', 'clientLab', 'ssidname', 'bssid', 'status'];

    // // Filter out excluded fields
    // const filteredData = Object.entries(data)
    //   .filter(([key, value]) => !excludeFields.includes(key))
    //   .reduce((obj, [key, value]) => {
    //     obj[key] = value;
    //     return obj;
    //   }, {});

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="space-y-2"
    >
      <div className=" flex items-center ">
        <h4 className="text-sm font-semibold">
          {data.data.clientLab}
        </h4>
        {/* <h1>{data.clientLab}</h1> */}
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <CaretDownIcon className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      {/* show open by default */}
      {/* <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
        @radix-ui/primitives
      </div> */}
      <CollapsibleContent asChild className="space-y-2">
        {/* <tr >
          <td colSpan={5}>
            {filteredData}
          </td>
        </tr> */}
        <div className=" flex-col ">
            {filteredData}
        </div>
        {/* <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          @stitches/react
        </div> */}
      </CollapsibleContent>
    </Collapsible>
  )
}
