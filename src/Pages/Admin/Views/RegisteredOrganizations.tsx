import * as React from 'react';

import { useState } from 'react';

import {
	CaretSortIcon,
	ChevronDownIcon,
	DotsHorizontalIcon,
} from '@radix-ui/react-icons';

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
} from '@tanstack/react-table';

import { Button } from '../../../Components/shadcn/ui/button';

import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '../../../Components/shadcn/ui/dropdown-menu';

import { Input } from '../../../Components/shadcn/ui/input';

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '../../../Components/shadcn/ui/table';

import Filter from '../../../Components/Filter';

export const RegisteredOrganizationsOptions = [
	{
		id: 'type',
		label: 'Type',
		type: 'options',
		options: [
			{
				value: 'All',
				label: 'All',
			},
			{
				value: 'Non-profit',
				label: 'Non-profit',
			},
			{
				value: 'Profit',
				label: 'Profit',
			},
		],
	},
	{
		id: 'address',
		label: 'Address',
		type: 'options',
		options: [
			{
				value: '123 Main St, Anytown, CA 12345',
				label: '123 Main St, Anytown, CA 12345',
			},
			{
				value: '789 Oak St, Anytown, CA 12345',
				label: '789 Oak St, Anytown, CA 12345',
			},
			{
				value: '789 Rad St, Anytown, CA 12345',
				label: '789 Rad St, Anytown, CA 12345',
			},
			{
				value: '144 Sun St, Anytown, CA 12345',
				label: '144 Sun St, Anytown, CA 12345',
			},
			{
				value: '189 Moon St, Anytown, CA 12345',
				label: '189 Moon St, Anytown, CA 12345',
			},
			{
				value: '199 Mars St, Anytown, OS 12345',
				label: '199 Mars St, Anytown, OS 12345',
			},
			{
				value: '212 Jup St, Anytown, OS 12345',
				label: '212 Jup St, Anytown, OS 12345',
			},
			{
				value: '393 Apr St, Anytown, OS 12345',
				label: '393 Apr St, Anytown, OS 12345',
			},
			{
				value: '456 Jun St, Anytown, OS 12345',
				label: '456 Jun St, Anytown, OS 12345',
			},
			{
				value: '222 Mars St, Anytown, OS 12345',
				label: '222 Mars St, Anytown, OS 12345',
			},
		],
	},
];

let items: any[] = [];
let filterOptions: any[] = [];

items = [
	{
		name: 'Hope Shelter',
		type: 'Non-profit',
		address: '123 Main St, Anytown, CA 12345',
		email: 'hope@shelter.com',
	},
	{
		name: 'Salvation Army',
		type: 'Profit',
		address: '789 Oak St, Anytown, CA 12345',
		email: 'sal@gmail.com',
	},
	{
		name: 'Future Shelter',
		type: 'Profit',
		address: '789 Rad St, Anytown, CA 12345',
		email: 'fut@gmail.com',
	},
	{
		name: 'World Shelter',
		type: 'Non-profit',
		address: '144 Sun St, Anytown, CA 12345',
		email: 'wa@gmail.com',
	},
	{
		name: 'Quick Shelter',
		type: 'Non-profit',
		address: '189 Moon St, Anytown, CA 12345',
		email: 'q@gmail.com',
	},
	{
		name: 'Dope Shelter',
		type: 'Non-profit',
		address: '199 Mars St, Anytown, OS 12345',
		email: 'd@gmail.com',
	},
	{
		name: 'Other Shelter',
		type: 'Non-profit',
		address: '212 Jup St, Anytown, OS 12345',
		email: 'o@gmail.com',
	},
	{
		name: 'Another Shelter',
		type: 'Non-profit',
		address: '393 Apr St, Anytown, OS 12345',
		email: 'an@gmail.com',
	},
	{
		name: 'Cool Shelter',
		type: 'Non-profit',
		address: '456 Jun St, Anytown, OS 12345',
		email: 'c@gmail.com',
	},
	{
		name: 'Best Shelter',
		type: 'Non-profit',
		address: '222 Mars St, Anytown, OS 12345',
		email: 'b@gmail.com',
	},
];

filterOptions = RegisteredOrganizationsOptions;

export type Organization = {
	name: string;
	type: string;
	address: string;
	email: string;
};

const data: Organization[] = [
	{
		name: 'Hope Shelter',
		type: 'Non-profit',
		address: '123 Main St, Anytown, CA 12345',
		email: 'hope@shelter.com',
	},
	{
		name: 'Salvation Army',
		type: 'Profit',
		address: '789 Oak St, Anytown, CA 12345',
		email: 'sal@gmail.com',
	},
	{
		name: 'Future Shelter',
		type: 'Profit',
		address: '789 Rad St, Anytown, CA 12345',
		email: 'fut@gmail.com',
	},
	{
		name: 'World Shelter',
		type: 'Non-profit',
		address: '144 Sun St, Anytown, CA 12345',
		email: 'wa@gmail.com',
	},
	{
		name: 'Quick Shelter',
		type: 'Non-profit',
		address: '189 Moon St, Anytown, CA 12345',
		email: 'q@gmail.com',
	},
	{
		name: 'Dope Shelter',
		type: 'Non-profit',
		address: '199 Mars St, Anytown, CA 12345',
		email: 'd@gmail.com',
	},
	{
		name: 'Other Shelter',
		type: 'Non-profit',
		address: '212 Jup St, Anytown, CA 12345',
		email: 'o@gmail.com',
	},
	{
		name: 'Another Shelter',
		type: 'Non-profit',
		address: '393 Apr St, Anytown, CA 12345',
		email: 'an@gmail.com',
	},
	{
		name: 'Cool Shelter',
		type: 'Non-profit',
		address: '456 Jun St, Anytown, CA 12345',
		email: 'c@gmail.com',
	},
	{
		name: 'Best Shelter',
		type: 'Non-profit',
		address: '222 Mars St, Anytown, CA 12345',
		email: 'b@gmail.com',
	},
];

export const columns: ColumnDef<Organization>[] = [
	{
		accessorKey: 'name',
		header: 'Name',
		cell: ({ row }) => <div className="capitalize">{row.getValue('name')}</div>,
	},
	{
		accessorKey: 'type',
		header: 'Type',
		cell: ({ row }) => <div className="capitalize">{row.getValue('type')}</div>,
	},
	{
		accessorKey: 'email',
		header: 'Email',
		cell: ({ row }) => <div className="lowercase">{row.getValue('email')}</div>,
	},
	{
		accessorKey: 'address',
		header: 'Address',
		cell: ({ row }) => <div>{row.getValue('address')}</div>,
	},
	{
		id: 'actions',
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

export default function RegisteredOrganizations() {
	const [data, setData] = useState<any[]>([]);
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
		<div className="w-full h-full flex">
			<Filter
				setData={setData}
				dummyData={items}
				columnFilters={filterOptions}
			/>

			<div className="rounded-md border flex flex-col w-full p-2">
				<div className="flex items-center py-4">
					<Input
						placeholder="Search Organizations..."
						value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
						onChange={(event) =>
							table.getColumn('name')?.setFilterValue(event.target.value)
						}
						className="max-w-sm"
					/>{' '}
				</div>
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
									data-state={row.getIsSelected() && 'selected'}
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
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
				<div className="flex items-center justify-end space-x-2 py-4">
					<div className="flex-1 text-sm text-muted-foreground">
						{table.getFilteredRowModel().rows.length} row(s) found.
					</div>
					<div className="space-x-2">
						<Button
							variant="outline"
							size="sm"
							onClick={() => table.previousPage()}
							disabled={!table.getCanPreviousPage()}
						>
							Previous
						</Button>
						<Button
							variant="outline"
							size="sm"
							onClick={() => table.nextPage()}
							disabled={!table.getCanNextPage()}
						>
							Next
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
