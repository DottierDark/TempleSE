import { Card } from './shadcn/ui/card';
import {
	bloodCases,
	clothes,
	foods,
	medicalSupplies,
	schoolSupplies,
	toys,
} from '../assets/dummyData';
import {
	bloodFilterOptions,
	clothesFilterOptions,
	foodsFilterOptions,
	medicalSuppliesFilterOptions,
	schoolSuppliesFilterOptions,
	toysFilterOptions,
} from '../assets/filterOptions';
import { useNavigate } from 'react-router-dom';
import Filter from './Filter';
import { useState, useEffect } from 'react';
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationNext,
	PaginationPrevious,
} from './shadcn/ui/pagination';
import { set } from 'react-hook-form';

export default function ViewList(category: any) {
	const pageSize = 12; // Number of items per page
	const [data, setData] = useState<any[]>([]);
	const [page, setPage] = useState(0);

	const nav = useNavigate();
	const handleCardClick = (item: any) => {
		nav(`/donor/toys/item`);
	};

	let items: any[] = [];
	let filterOptions: any[] = [];

	switch (category.category) {
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
		default:
			break;
	}

	const onPageChange = (newPage: number) => {
		setPage(newPage);
	};

	return (
		<div className="flex h-full w-full gap-20">
			<Filter
				setData={setData}
				dummyData={items}
				columnFilters={filterOptions}
			/>
			<div className="flex flex-col">
				<div className="grid h-[90vh] grid-cols-4 p-6 gap-5">
					{data
						.slice(page * pageSize, (page + 1) * pageSize)
						.map((item, index) => (
							<Card
								key={`${item.id}-${index}`}
								className="flex h-[25vh] w-[25vh] flex-col items-center justify-center"
								onClick={() => {
									handleCardClick(item);
								}}
							>
								<h1>{item.name}</h1>
								<p>{item.quantity}</p>
								<p>{item.category}</p>
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
