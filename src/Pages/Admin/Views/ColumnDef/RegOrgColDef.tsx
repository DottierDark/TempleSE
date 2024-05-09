import { Organization } from "../../../../types";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../../../../Components/shadcn/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../../../../Components/shadcn/ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

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
		accessorKey: "contactEmail",
		header: "contactEmail",
		cell: ({ row }) => (
			<div className="lowercase">{row.getValue("contactEmail")}</div>
		),
	},
	{
		accessorKey: "city",
		header: "City",
		cell: ({ row }) => <div>{row.getValue("city")}</div>,
	},
	{
		accessorKey: "state",
		header: "State",
		cell: ({ row }) => <div>{row.getValue("state")}</div>,
	},
	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<DotsHorizontalIcon className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
						//onClick={() =>
						>
							View Organization Location
						</DropdownMenuItem>
						<DropdownMenuItem
						//onClick={() =>
						>
							Delete Organization Account
						</DropdownMenuItem>
						<DropdownMenuSeparator />
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];