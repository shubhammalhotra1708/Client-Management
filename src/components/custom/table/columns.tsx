"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "@/components/ui/datatable-column-header"
import * as React from "react"
import { EditClient } from "@/components/custom/client/edit-client"
import { DeleteClient } from "../client/delete-client"
import { CollapsibleTrigger } from "@/components/ui/collapsible"
import { CaretDownIcon } from "@radix-ui/react-icons"
import { MdOutlineWifi } from "react-icons/md";
import { BsEthernet } from "react-icons/bs";
import { ShowGraph } from "../graph/show-graph"
import { TClient } from "@/types/types"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
export const columns: ColumnDef<TClient>[] = [

  {
    // row selection and expansion column
    id: "select",
    header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
    ),

    cell: ({ row }) => (
 
      <div
        className="grid grid-cols-2 items-center justify-center"
      >
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
          {/* expand rows  */}
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon" className="" >
              <CaretDownIcon className="h-18 w-10 mr-1" />
            </Button>
          </CollapsibleTrigger>
      </div>

    ),
    enableSorting: false,
    enableHiding: false,
  },
  //columns definition
  {
    accessorKey: "client_lab",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Lab Name" />
      )
    },
  },
  {
    accessorKey: "hostname",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Hostname" />
      )
    },
  },
  {
    accessorKey: "operating_system",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="OS" />
      )
    },
  },
  {
    accessorKey: "hwaddr",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="MAC" />
      )
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Status" />
      )
    },
    cell: ({ row }) => {
      return (
        <div className="flex flex-row  justify-start  items-center">
          {row.original.ethernet_status ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <BsEthernet className="ml-3" color="green" size={15} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Ethernet Status</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <BsEthernet className="ml-3" color="red" size={15} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Ethernet Status</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          {row.original.wifi_status == "Connected" ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <MdOutlineWifi className="ml-3" color="green" size={18} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>WiFi Status</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <MdOutlineWifi className="ml-3" color="red" size={18} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>WiFi Status</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      )
    }
  },
  {
    accessorKey: "ssid_name",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="SSID" />
      )
    },
  },
  {
    accessorKey: "bssid",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="BSSID" />
      )
    },
  },
  {
    accessorKey: "rssi",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="RSSI" />
      )
    },
  },
  {
    accessorKey: "wifi_ip",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="IPv4" />
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const client = row.original
      const speedtestStatus = row.original.wifi_status == "Connected" ? false : true
      return (
        <div className="flex flex-row">
          
          <ShowGraph client={client} status={speedtestStatus}/>
          {/* <EditClient client={client} /> */}
          <DeleteClient client={client} />
        </div>
      )
    },
  },

]