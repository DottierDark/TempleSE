import { Organization } from '../../../../types';
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
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoadScript } from '@react-google-maps/api';




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
		accessorKey: 'contactEmail',
		header: 'contactEmail',
		cell: ({ row }) => (
			<div className="lowercase">{row.getValue('contactEmail')}</div>
		),
	},
	{
		accessorKey: 'area',
		header: 'Area',
		cell: ({ row }) => <div>{row.getValue('area')}</div>,
	},
	{
		accessorKey: 'gov',
		header: 'Gov',
		cell: ({ row }) => <div>{row.getValue('gov')}</div>,
	},
	{
		accessorKey: 'contactPhone',
		header: 'Contact Phone',
		cell: ({ row }) => <div>{row.getValue('contactPhone')}</div>,
	},
	{
		id: 'actions',
		enableHiding: false,
		cell: ({ row }) => {
			const navigate = useNavigate();
			const handleClick = (category: string) => {
				navigate(`/admin/${category}`);
			};
			return (
			   <Button onClick={() => {
				handleClick('RegisteredOrganizationsDetails');
			}}>View More Details</Button>
			)
		},
	},
	
	{
		id: 'actions',
		enableHiding: false,
		cell: ({ row }) => {
			const handleDelete = () => {
				// Change the status of the organization to rejected
				const organization = row.original;
				organization.status = 'rejected';
				// Perform any other necessary actions
			};
			
			  

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
						<DropdownMenuItem onClick={handleDelete}>
							Delete Organization Account
						</DropdownMenuItem>
						
						<DropdownMenuSeparator />
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
