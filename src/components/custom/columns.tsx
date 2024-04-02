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
import { CaretSortIcon } from "@radix-ui/react-icons"
// import type { TableData } from "@/types/types"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { CollapsibleComp } from "./collapsible-comp"


import { TClient } from "@/types/types"

export const columns : ColumnDef<TClient>[] = [
      // row selection
      {
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
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    //columns definition
  {
    accessorKey: "clientLab",
    header: ({ column }) => {
        return (
            <DataTableColumnHeader column={column} title="Lab Name" />
        )
    },
    cell: ({ row }) => {
      const rowData : TClient = row.original
      console.log("row data in cols")
      console.log(rowData)
      return (
        <div className="flex flex-row items-center ">
          <CollapsibleComp data = {rowData}/>
        </div>
      );
    },
  },
  {
    accessorKey: "clientName",
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
    accessorKey: "clientPort",
    header: ({ column }) => {
        return (
            <DataTableColumnHeader column={column} title="Host Port" />
        )
    },
  },
  {
    accessorKey: "clientUsername",
    header: ({ column }) => {
        return (
            <DataTableColumnHeader column={column} title="Admin Username" />
        )
    },
  },
  {
    accessorKey: "clientPassword",
    header: ({ column }) => {
        return (
            <DataTableColumnHeader column={column} title="Admin Password" />
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