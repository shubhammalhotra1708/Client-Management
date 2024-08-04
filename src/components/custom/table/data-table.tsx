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
import { DataTablePagination } from "@/components/ui/datatable-pagination"
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
import { Cross2Icon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
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
    getExpandedRowModel: getExpandedRowModel(),
    // getSubRows: (data)=> data.subRows,
    // getSubRows: row => row.subRows,
    //default no. of rows on page
    initialState: {
      pagination: {
        pageSize: 100,
      },
    },
    state: {
      sorting,
      columnFilters,
      rowSelection,
      expanded,
    },
  })
  const isFiltered = table.getState().columnFilters.length > 0
  // console.log( table.getRowModel().rows[0])
  // const rw=table.getRowModel().rows[0].original
  // const [subRow,setSubRow] = React.useState([])
  return (
    <div>
      {/* filtering  */}
      <div className="flex flex-row mt-6 pb-4">
        <div className="flex items-center mr-4">
          <Input
            placeholder="Search Lab Name..."
            value={(table.getColumn("client_lab")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("client_lab")?.setFilterValue(event.target.value)
            }
            className="max-w-xs"
          />
        </div>
        <div className="flex items-center mr-4">
          <Input
            placeholder="Search Hostname..."
            value={(table.getColumn("hostname")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("hostname")?.setFilterValue(event.target.value)
            }
            className="max-w-xs"
          />
        </div>
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="max-w-xs"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
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
