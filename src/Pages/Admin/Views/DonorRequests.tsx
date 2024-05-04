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

export type Donor = {
  firstname: string;
  secondname: string;
  address:string;
  email: string;
};

const data: Donor[] = [
  {
    firstname: "Amr",
    secondname: "Hossam",
    address: "123 Elm St, Anytown, CA 12345",
    email: "amr@gmail.com",
  },
  {
    firstname: "Nada",
    secondname: "Ayman",
    address: "143 Pine St, Anytown, CA 12345",
    email: "nada@gmail.com",
  },
  {
    firstname: "Salama",
    secondname: "Morsi",
    address: "154 Sec St, Wheretown, CA 12345",
    email: "salama@gmail.com",
  },
  {
    firstname: "Dalia",
    secondname: "Habib",
    address: "167 Cosec St, Howtown, CA 12345",
    email: "dalia@gmail.com",
  },
  {
    firstname: "Tia",
    secondname: "Hatem",
    address: "148 Pint St, Whytown, CA 12345",
    email: "tia@gmail.com",
  },
  {
    firstname: "Hala",
    secondname: "Eissa",
    address: "196 Live St, Whentown, CA 12345",
    email: "hala@gmail.com",
  },
  {
    firstname: "Noor",
    secondname: "Ghoul",
    address: "134 Hello St, Thentown, CA 12345",
    email: "noor@gmail.com",
  },
  {
    firstname: "Jannah",
    secondname: "Ibrahim",
    address: "189 Bye St, Theirtown, CA 12345",
    email: "jannah@gmail.com",
  },
  {
    firstname: "Ahmed",
    secondname: "Saleh",
    address: "33 Why St, Nevertown, CA 12345",
    email: "ahmed@gmail.com",
  },
  {
    firstname: "Ali",
    secondname: "Basha",
    address: "69 Okay St, Yestown, CA 12345",
    email: "ali@gmail.com",
  },
  
];

export const columns: ColumnDef<Donor>[] = [
  {
    accessorKey: "firstname",
    header: "First Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("firstname")}</div>
    ),
  },
  {
    accessorKey: "secondname",
    header: "Second Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("secondname")}</div>
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

export default function DonorRequests() {
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
        <h1 className="text-2xl font-bold ml-4">Requests From Donor</h1>
          
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





