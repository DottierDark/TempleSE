import { Card } from './shadcn/ui/card';
import {
	bloodCases,
	clothes,
	foods,
	medicalCases,
	medicalSupplies,
	organizations,
	schoolSupplies,
	teachingPosts,
	toys,
} from '../assets/dummyData';
import {
	bloodFilterOptions,
	clothesFilterOptions,
	foodsFilterOptions,
	medicalSuppliesFilterOptions,
	schoolSuppliesFilterOptions,
	toysFilterOptions,
	TeachingPostsOptions,
	medicalCasesFilterOptions,
	RegisteredOrganizationsOptions,
} from '../assets/filterOptions';
import { useNavigate } from 'react-router-dom';
import Filter from './Filter';
import { useState } from 'react';
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationNext,
	PaginationPrevious,
} from './shadcn/ui/pagination';

export default function ViewList({
	category,
	Cardbody,
}: {
	category: string;
	Cardbody: (props: any) => JSX.Element;
}) {
	const pageSize = 12; // Number of items per page
	const [data, setData] = useState<any[]>([]);
	const [page, setPage] = useState(0);

	const nav = useNavigate();
	const handleCardClick = (item: any) => {
		nav(`/donor/${window.location.pathname.split('/')[2]}/${item.id}`);
	};

	let items: any[] = [];
	let filterOptions: any[] = [];

	switch (category) {
		case 'Clothes':
			items = clothes;
			filterOptions = clothesFilterOptions;
			break;
		case 'Toys':
			items = toys;
			filterOptions = toysFilterOptions;
			break;
		case 'Food':
			items = foods;
			filterOptions = foodsFilterOptions;
			break;
		case 'Medical Supplies':
			items = medicalSupplies;
			filterOptions = medicalSuppliesFilterOptions;
			break;
		case 'School Supplies':
			items = schoolSupplies;
			filterOptions = schoolSuppliesFilterOptions;
			break;
		case 'Blood Donation':
			items = bloodCases;
			filterOptions = bloodFilterOptions;
			break;
		case 'Medical Cases':
			items = medicalCases;
			filterOptions = medicalCasesFilterOptions;
			break;
		case 'TeachingPosts':
			items = teachingPosts;
			filterOptions = TeachingPostsOptions;
			break;
		case 'Organizations':
			items = organizations.filter((org) => org.status === 'approved');
			filterOptions = RegisteredOrganizationsOptions;
			break;
		default:
			items = [
				...bloodCases,
				...clothes,
				...foods,
				...medicalSupplies,
				...schoolSupplies,
				...toys,
			];
			filterOptions = [
				...bloodFilterOptions,
				...clothesFilterOptions,
				...foodsFilterOptions,
				...medicalSuppliesFilterOptions,
				...schoolSuppliesFilterOptions,
				...toysFilterOptions,
			];
			break;
	}

	const onPageChange = (newPage: number) => {
		setPage(newPage);
	};

	return (
		<div className="flex h-full w-full">
			<Filter
				setData={setData}
				dummyData={items}
				columnFilters={filterOptions}
				searchColumn="name"
			/>
			<div className="flex flex-col">
				<div className="grid grid-cols-3 gap-5 p-4 grid-flow-row">
					{data
						.slice(page * pageSize, (page + 1) * pageSize)
						.map((item, index) => (
							<Card
								key={`${item.id}-${index}`}
								className="flex flex-row h-40 w-[20.5rem] text-nowrap cursor-pointer bg-[#92BCEA]"
								onClick={() => {
									handleCardClick(item);
								}}
							>
								<Cardbody {...item} />
							</Card>
						))}
				</div>
				<Pagination>
					<PaginationContent>
						<PaginationItem className="flex self-start">
							<PaginationPrevious
								onClick={() => {
									if (page > 0) {
										onPageChange(page - 1);
									}
								}}
								aria-disabled={page === 0}
								className={`select-none ${page === 0 ? 'pointer-events- opacity-50' : ''}`}
							/>
						</PaginationItem>
						<PaginationItem className="flex self-end">
							<PaginationNext
								onClick={() => {
									if (data.slice((page + 1) * pageSize).length !== 0) {
										onPageChange(page + 1);
									}
								}}
								className={`select-none ${data.slice((page + 1) * pageSize).length === 0 ? 'pointer-events- opacity-50' : ''}`}
							/>
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</div>
	);
}
