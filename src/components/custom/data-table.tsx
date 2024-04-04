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
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const ExpandedContent: React.FC<any> = (details) => {
  console.log("hi")
  console.log(details);
  console.log(`client ${details.details.id}`)
  const excludeFields = ['status', 'clientIP', 'id', 'clientPort' , 'clientName', 'clientLab', 'ssidname' , 'bssid'];
  
  return (
    <>
      <TableRow>
        <TableCell style={{alignItems:"center"}} colSpan={8}>
          <div style={{display:'grid', gridTemplateColumns:'auto auto auto auto auto ', padding:'10px',rowGap:'20px'}}>
            {Object.entries(details.details).map(([key, value]) => (
              // Check if the field is not in the exclude list
              excludeFields.includes(key) ? null : (
              
              <div style={{width:'80px' , height: '50px'}} key={key}>
                <div style={{}}><strong>{key}: </strong></div>
                <div>
                {!value ? '' : (value as string).toString()}
                </div>
              </div>
              )))}
        </div>
        </TableCell>
      </TableRow>
    </>

  );
};

export default ExpandedContent;

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
            value={(table.getColumn("clientName")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
                table.getColumn("clientName")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
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
                          <CollapsibleTrigger asChild>
                            {/* <>
                            <Button variant="ghost" size="sm">
                              <CaretSortIcon className="h-4 w-4" />
                              <span className="sr-only">Toggle</span>
                            </Button> */}
                            <TableRow data-state={row.getIsSelected() && "selected"} className="!appearance-none">
                              {row.getVisibleCells().map((cell) => (
                                <TableCell key={cell.id}>
                                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                  
                                </TableCell>
                              ))}
                            </TableRow>
                            {/* </> */}
                            </CollapsibleTrigger>
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
