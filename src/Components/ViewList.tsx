import { Card } from "./shadcn/ui/card";
import {
	bloodCases,
	clothes,
	foods,
	medicalSupplies,
	schoolSupplies,
	toys,
} from "../assets/dummyData";
import {
	bloodFilterOptions,
	clothesFilterOptions,
	foodsFilterOptions,
	medicalSuppliesFilterOptions,
	schoolSuppliesFilterOptions,
	toysFilterOptions,
} from "../assets/filterOptions";
import { useNavigate } from "react-router-dom";
import Filter from "./Filter";
import { useState, useEffect } from "react";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationNext,
	PaginationPrevious,
} from "./shadcn/ui/pagination";
import { set } from "react-hook-form";

export default function ViewList(category: any) {
	const pageSize = 3; // Number of items per page
	const [data, setData] = useState<any[]>([]);
	const [startIndex, setStartIndex] = useState(0);
	const [endIndex, setEndIndex] = useState(pageSize);

	const nav = useNavigate();
	const handleCardClick = (item: any) => {
		nav(`/donor/toys/item`);
	};

	let items: any[] = [];
	let filterOptions: any[] = [];

	switch (category.category) {
		case "Clothes":
			items = clothes;
			filterOptions = clothesFilterOptions;
			break;
		case "Toys":
			items = toys;
			filterOptions = toysFilterOptions;
			break;
		case "Food":
			items = foods;
			filterOptions = foodsFilterOptions;
			break;
		case "Medical Supplies":
			items = medicalSupplies;
			filterOptions = medicalSuppliesFilterOptions;
			break;
		case "School Supplies":
			items = schoolSupplies;
			filterOptions = schoolSuppliesFilterOptions;
			break;
		case "Blood Donation":
			items = bloodCases;
			filterOptions = bloodFilterOptions;
			break;
		default:
			break;
	}

	const handlePreviousPage = () => {
		if (startIndex - pageSize >= 0) {
			setStartIndex((prevIndex) => prevIndex - pageSize);
			setEndIndex((prevIndex) => prevIndex - pageSize);
		}
	};

	const handleNextPage = () => {
		if (endIndex + pageSize <= items.length) {
			setStartIndex((prevIndex) => prevIndex + pageSize);
			setEndIndex((prevIndex) => prevIndex + pageSize);
		}
	};
	useEffect(() => {
		setData(items.slice(startIndex, endIndex));
	}, [startIndex, endIndex]);

	return (
		<div className="flex h-full w-full gap-20">
			<div className="sticky h-[90vh] w-[25vh] bg-gray-800">
				<Filter
					setData={setData}
					dummyData={items}
					columnFilters={filterOptions}
				/>
			</div>
			<div className="flex flex-col">
				<div className="grid h-[90vh] grid-cols-3 items-center justify-center gap-5">
					{data.map((item) => (
						<Card
							key={item.id}
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
				<footer>
					<Pagination>
						<PaginationContent>
							<PaginationItem className=" flex self-start">
								<PaginationPrevious
									onClick={handlePreviousPage}
									aria-disabled={startIndex === 0}
									tabIndex={startIndex === 0 ? -1 : undefined}
									className={
										startIndex === 0
											? "pointer-events-none opacity-50"
											: undefined
									}
								/>
							</PaginationItem>
							<PaginationItem className="flex self-end">
								<PaginationNext
									onClick={handleNextPage}
									aria-disabled={endIndex >= items.length}
									tabIndex={
										endIndex >= items.length
											? -1
											: undefined
									}
									className={
										endIndex >= items.length
											? "pointer-events-none opacity-50"
											: undefined
									}
								/>
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				</footer>
			</div>
		</div>
	);
}
