"use client"

import {
  ColumnDef,
  ColumnFiltersState,
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
import {DataTablePagination} from "@/components/ui/datatable-pagination"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import * as React from "react"


import {
  Collapsible,
  CollapsibleContent,
} from "@/components/ui/collapsible"
import ExpandedContent from "./expanded-content"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [rowSelection, setRowSelection] = React.useState({})
  const [expanded, setExpanded] = React.useState<ExpandedState>({})
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    //expanding rows : 
    onExpandedChange: setExpanded,
    getExpandedRowModel : getExpandedRowModel(),
    // getSubRows: (data)=> data.subRows,
    // getSubRows: row => row.subRows,
    state: {
      sorting,
      columnFilters,
      rowSelection,
      expanded,
    },
  })

  // console.log( table.getRowModel().rows[0])
  // const rw=table.getRowModel().rows[0].original
  // const [subRow,setSubRow] = React.useState([])
  return (
    <div>
        {/* filtering  */}
        <div className="flex items-center pb-4">
            <Input
            placeholder="Filter Clients..."
            value={(table.getColumn("hostname")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
                table.getColumn("hostname")?.setFilterValue(event.target.value)
            }
            className="max-w-xs"
            />
        </div>
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
                            <ExpandedContent details={row.original} />
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
