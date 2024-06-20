"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "@/components/ui/datatable-column-header"
import * as React from "react"
import {FileOpData} from "@/types/types"
export const fileOpColumns: ColumnDef<FileOpData>[] = [
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
]