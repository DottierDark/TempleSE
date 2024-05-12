import { useState } from 'react';
import { donor } from '../../../assets/dummyData';
import Filter from '../../../Components/Filter';
import { DataTable } from '../../../Components/shadcn/ui/data-table';
import { Donor } from '../../../types';
import { donorOptions } from '../../../assets/filterOptions';
import { donorColumns } from './ColumnDef/Donor';

export default function Donors() {
	const items: any[] = donor.filter((org) => org.status === 'pending');
	const filterOptions: any[] = donorOptions;
	const [data, setData] = useState<Donor[]>(items);

	return (
		<div className="flex h-full w-full">
			<Filter
				setData={setData}
				dummyData={items}
				columnFilters={filterOptions}
				searchColumn={''}
				hidesearchbar={true}
			/>
			<DataTable columns={donorColumns} data={data} />
		</div>
	);
}
