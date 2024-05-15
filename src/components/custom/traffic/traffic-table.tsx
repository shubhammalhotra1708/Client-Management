"use client"

import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getExpandedRowModel,
  useReactTable,
  ExpandedState,
} from "@tanstack/react-table"
import { DataTablePagination } from "@/components/ui/datatable-pagination"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import * as React from "react"


import {
  Collapsible,
  CollapsibleContent,
} from "@/components/ui/collapsible"

interface ReactTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
}


export const TrafficTable = <T extends object>({
  data,
  columns
}: ReactTableProps<T>) => {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [rowSelection, setRowSelection] = React.useState({})
  const [expanded, setExpanded] = React.useState<ExpandedState>({})
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onExpandedChange: setExpanded,
    getExpandedRowModel: getExpandedRowModel(),
    state: {
      sorting,
      rowSelection,
      expanded,
    },
  })
  return (
    <div>

      {/* render data table */}
      <div className="rounded-md border">

        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                // expandable rows
                <Collapsible key={row.id} asChild>
                  <>
                    <TableRow data-state={row.getIsSelected() && "selected"} className="!appearance-none">
                      {row.getVisibleCells().map((cell) => (
                        <TableCell className="text-balance" key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}

                        </TableCell>
                      ))}
                    </TableRow>
                    <CollapsibleContent asChild>
                      {/* <ExpandedContent details={row.original} /> */}
                    </CollapsibleContent>
                  </>
                </Collapsible>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* selected rows and pagination */}
      <DataTablePagination table={table} />
    </div>


  )
}
