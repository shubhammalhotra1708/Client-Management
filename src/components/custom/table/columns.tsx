"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {DataTableColumnHeader} from "@/components/ui/datatable-column-header"
import * as React from "react"
import {EditClient} from "@/components/custom/crud/edit-client"
import { DeleteClient } from "../crud/delete-client"
import {CollapsibleTrigger} from "@/components/ui/collapsible"


import { CaretDownIcon, CaretUpIcon } from "@radix-ui/react-icons"
import { MdOutlineWifi } from "react-icons/md";
import { BsEthernet } from "react-icons/bs";

import { TClient } from "@/types/types"
// const
export const columns : ColumnDef<TClient>[] = [
      
      {
        // row selection and expansion column
        id: "select",
        header: ({ table }) => (
          <>
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
          <button
              {...{
                onClick: table.getToggleAllRowsExpandedHandler(),
              }}
              style={{marginLeft: "16px"}}
            >
              {table.getIsAllRowsExpanded() ? <CaretUpIcon/> : <CaretDownIcon/>}
            </button>{' '}
          </>

        ),
        
        cell: ({ row }) => (
          <div
            style={{
              paddingLeft: `${row.depth * 2}rem`,
            }}
          >
            <div>
              <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
              />
              {/* expand rows  */}
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm">
                  <CaretUpIcon className="h-4 w-4" />
                </Button>
              </CollapsibleTrigger>
              </div>
            </div>
          
        ),
        enableSorting: false,
        enableHiding: false,
    },
    //columns definition
  {
    accessorKey: "clientLab",
    id:"clientLab",
    header: ({ column }) => {
        return (
            <DataTableColumnHeader column={column} title="Lab Name" />
        )
    },
  },
  {
    accessorKey: "clientName",
    id:"clientName",
    header: ({ column }) => {
        return (
            <DataTableColumnHeader column={column} title="Client Name" />
        )
    },
  },
  {
    accessorKey: "clientIP",
    header: ({ column }) => {
        return (
            <DataTableColumnHeader column={column} title="Client IP" />
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
      // const st=row.original.status
      // console.log(`client is ${st}`)
      return (
        <div className="flex flex-row justify-start  items-center">
          {row.original.status ? (
            <>
              <BsEthernet className="ml-1" color="green" size={15}/>
              <MdOutlineWifi className="ml-3"  color="red" size={18} />
            </>
          ) : (
            <>
              <BsEthernet className="ml-1"  color="red" size={15} />
              <MdOutlineWifi className="ml-3"  color="red" size={18} />
            </>

          )}
          <h1>{row.original.status}</h1>
        </div>
      )
    }
  },
  {
    accessorKey: "ssidname",
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
    id: "actions",
    cell: ({ row }) => {
      const client = row.original
      // console.log(`client press ${client.clientName}`)
 
      return (
        <div className="flex flex-row">
              <EditClient client={client} />
              <DeleteClient client={client} />
        </div>
      )
    },
  },
  
]