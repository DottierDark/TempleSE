import { Donor } from '../../../../types';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '../../../../Components/shadcn/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '../../../../Components/shadcn/ui/dropdown-menu';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';

export const columns: ColumnDef<Donor>[] = [
	{
		accessorKey: 'firstname',
		header: 'First Name',
		cell: ({ row }) => (
			<div className="capitalize">{row.getValue('firstname')}</div>
		),
	},
	{
		accessorKey: 'secondname',
		header: 'Second Name',
		cell: ({ row }) => (
			<div className="capitalize">{row.getValue('secondname')}</div>
		),
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
		accessorKey: 'actions',
		header: '',
		cell: ({ row }) => <div>{<Button>Accept Request</Button>}</div>,
	},
	{
		accessorKey: 'actions',
		header: '',
		cell: ({ row }) => <div>{<Button>Reject Request</Button>}</div>,
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
						<DropdownMenuLabel>More Actions</DropdownMenuLabel>
						<DropdownMenuItem
						//onClick={() =>
						>
							Download Submited Documents
						</DropdownMenuItem>

						<DropdownMenuSeparator />
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
