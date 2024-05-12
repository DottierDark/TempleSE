import { Donor } from '../../../../types';
import { ColumnDef } from '@tanstack/react-table';

export const donorColumns: ColumnDef<Donor>[] = [
	{
		accessorKey: 'firstname',
		header: 'Name',
		cell: ({ row }) => (
			<div className="capitalize">{row.getValue('firstname')}</div>
		),
	},
	{
		accessorKey: 'secondname',
		header: 'Name',
		cell: ({ row }) => (
			<div className="capitalize">{row.getValue('secondname')}</div>
		),
	},
	{
		accessorKey: 'status',
		header: 'Status',
		cell: ({ row }) => (
			<div className="capitalize">{row.getValue('status')}</div>
		),
	},
	{
		accessorKey: 'contactPhone',
		header: 'Contact Phone',
		cell: ({ row }) => (
			<div className="lowercase">{row.getValue('contactPhone')}</div>
		),
	},
	{
		accessorKey: 'email',
		header: 'Email',
		cell: ({ row }) => <div className="lowercase">{row.getValue('email')}</div>,
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
];
