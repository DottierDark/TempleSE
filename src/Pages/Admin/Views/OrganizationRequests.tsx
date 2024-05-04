import * as React from "react"

import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "../../../Components/shadcn/ui/button"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../Components/shadcn/ui/dropdown-menu"

import { Input } from "../../../Components/shadcn/ui/input"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../Components/shadcn/ui/table"

export type Organization = {
  name: string;
  type: string;
  address:string;
  email: string;
};

const data: Organization[] = [
  {
    name: "Goodwill",
    type: "Non-profit",
    address: "456 Elm St, Anytown, CA 12345",
    email: "GOOd@gmail.com",
  },
  {
    name: "Red Cross",
    type: "Non-profit",
    address: "101 Pine St, Anytown, CA 12345",
    email: "red@gmail.com",
  },
  {
    name: "Oxfam",
    type: "Non-profit",
    address: "110 Sec St, Wheretown, CA 12345",
    email: "r@gmail.com",
  },
  {
    name: "Habitat for Humanity",
    type: "Non-profit",
    address: "111 Cosec St, Howtown, CA 12345",
    email: "h@gmail.com",
  },
  {
    name: "Save the Children",
    type: "Non-profit",
    address: "106 Pint St, Whytown, CA 12345",
    email: "sac@gmail.com",
  },
  {
    name: "Doctors Without Borders",
    type: "Non-profit",
    address: "107 Live St, Whentown, CA 12345",
    email: "d@gmail.com",
  },
  {
    name: "Action Against Hunger",
    type: "Non-profit",
    address: "112 Hello St, Thentown, CA 12345",
    email: "t@gmail.com",
  },
  {
    name: "ShelterBox",
    type: "Non-profit",
    address: "199 Bye St, Theirtown, CA 12345",
    email: "s@gmail.com",
  },
  {
    name: "CARE",
    type: "Non-profit",
    address: "177 Why St, Nevertown, CA 12345",
    email: "c@gmail.com",
  },
  {
    name: "The Trevor Project",
    type: "Non-profit",
    address: "101 Okay St, Yestown, CA 12345",
    email: "tr@gmail.com",
  },
  
];

export const columns: ColumnDef<Organization>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("type")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => <div>{row.getValue("address")}</div>,
  },

  {
    accessorKey: "actions",
    header: "",
    cell: ({ row }) => <div>{<Button>Accept Request</Button>}</div>
  },
  {
    accessorKey: "actions",
    header: "",
    cell: ({ row }) => <div>{<Button>Reject Request</Button>}</div>
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const organization = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>More Actions</DropdownMenuLabel>
            <DropdownMenuItem
              //onClick={() => 
            >
              Download Submited Information
            </DropdownMenuItem>
           
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  
];

export default function OrganizationRequests() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });
 

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
          <h1 className="text-2xl font-bold ml-4">Requests From Organizations</h1>
      </div>
     
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
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">

      
       
      </div>
    
    </div>
  );
}




