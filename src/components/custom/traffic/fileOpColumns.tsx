"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "@/components/ui/datatable-column-header"
import * as React from "react"
import { EditClient } from "@/components/custom/crud/edit-client"
import { DeleteClient } from "../crud/delete-client"
import { CollapsibleTrigger } from "@/components/ui/collapsible"


import { CaretDownIcon, CaretUpIcon } from "@radix-ui/react-icons"
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
import {FileOpData} from "@/types/types"
export const fileOpColumns: ColumnDef<FileOpData>[] = [

  // {
  //   // row selection and expansion column
  //   id: "select",
  //   header: ({ table }) => (
  //       <Checkbox
  //         checked={
  //           table.getIsAllPageRowsSelected() ||
  //           (table.getIsSomePageRowsSelected() && "indeterminate")
  //         }
  //         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //         aria-label="Select all"
  //       />
  //       // <Button
  //       //   {...{
  //       //     onClick: table.getToggleAllRowsExpandedHandler(),
  //       //   }}
  //       //   variant="ghost"
  //       //   size="sm"
  //       // >
  //       //   {table.getIsAllRowsExpanded() ? <CaretUpIcon /> : <CaretDownIcon />}
  //       // </Button>{' '}
  //   ),

  //   cell: ({ row }) => (
 
  //     <div
  //       className="grid grid-cols-2 items-center justify-center"
  //     >
  //         <Checkbox
  //           checked={row.getIsSelected()}
  //           onCheckedChange={(value) => row.toggleSelected(!!value)}
  //           aria-label="Select row"
  //           // className="-mr-4"
  //         />
  //         {/* expand rows  */}
  //         <CollapsibleTrigger asChild>
  //           <Button variant="ghost" size="icon" className="" >
  //             <CaretDownIcon className="h-18 w-10 mr-1" />
  //           </Button>
  //         </CollapsibleTrigger>
  //     </div>

  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  //columns definition
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Status" />
      )
    },
  },
  {
    accessorKey: "traffictype",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Traffic Type" />
      )
    },
  },
  {
    accessorKey: "host",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Host" />
      )
    },
  },
  {
    accessorKey: "port",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Port" />
      )
    },
  },
  {
    accessorKey: "interval",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Interval" />
      )
    },
  },
  {
    accessorKey:"operation",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Operation" />
      )
    },
  },
  {
    accessorKey:"mode",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Mode" />
      )
    },
  },
  {
    accessorKey:"filesize",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="File Size" />
      )
    },
  },
  {
    accessorKey:"username",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Username" />
      )
    },
  },{
    accessorKey:"password",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Password" />
      )
    },
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => {
  //     const client = row.original
  //     return (
  //       <div className="flex flex-row">
  //         <ShowGraph client={client}/>
  //         <EditClient client={client} />
  //         <DeleteClient client={client} />

  //       </div>
  //     )
  //   },
  // },

]