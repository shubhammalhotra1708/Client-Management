"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {DataTableColumnHeader} from "@/components/ui/datatable-column-header"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import * as React from "react"
import { CaretDownIcon, CaretSortIcon, CaretUpIcon } from "@radix-ui/react-icons"
// import { IconCaretUp,IconCaretDown } from "@tabler/icons-react"

import { MdOutlineWifi } from "react-icons/md";
import { CgEthernet } from "react-icons/cg";

import { TClient } from "@/types/types"

export const columns : ColumnDef<TClient>[] = [
      // row selection
      {
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
        
        cell: ({ row,getValue }) => (
          
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
            {' '}
              <Button variant="ghost" size="sm">
                <CaretSortIcon className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button> 
              {/* {row.getCanExpand() ? (
                <button
                  {...{
                    onClick: row.getToggleExpandedHandler(),
                    style: { cursor: 'pointer' },
                  }}
                >
                  
                  {row.getIsExpanded() ? '👇' : '👉'}
                </button>
              ) : (
                'button'
              )}{' '} */}
              {/* <h1>{getValue()}</h1> */}
              {getValue<boolean>()}
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
            <CgEthernet className="ml-1" color="green" size={18}/> ethernet status
            <MdOutlineWifi className="ml-3"  color="red" size={18} />
            </>


            // <div className="h-3 w-3 rounded-full bg-green-500 mr-2" >
              // <h1 className="sr-only">Online</h1>
            // </div>
          ) : (
            <>
            <CgEthernet className="ml-1"  color="red" size={18} />
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
 
      return (
        <div className="flex flex-row">
          {/* <CollapsibleComp /> */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(client.id.toString())}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>

      )
    },
  },
  
]