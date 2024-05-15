"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "@/components/ui/datatable-column-header"
import * as React from "react"
import { BrowsingData } from "@/types/types"

export const browsingColumns: ColumnDef<BrowsingData>[] = [

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
    accessorKey: "url",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="URL" />
      )
    },
  },
  {
    accessorKey: "browser",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Browser" />
      )
    },
  },
  {
    accessorKey: "browsermode",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Browser Mode" />
      )
    },
  },
  {
    accessorKey: "traffic_schedule",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Schedule" />
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