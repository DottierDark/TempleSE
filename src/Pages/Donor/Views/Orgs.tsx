import { useState } from "react";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationNext,
	PaginationPrevious,
} from "../../../Components/shadcn/ui/pagination";
import { Card } from "../../../Components/shadcn/ui/card";
import Filter from "../../../Components/Filter";
import { RegisteredOrganizationsOptions } from "../../../assets/filterOptions";
import { organizations } from "../../../assets/dummyData";
import { Organization } from "../../../types";
import { useNavigate } from "react-router-dom";

export default function Orgs() {
	const pageSize = 12; // Number of items per page
	const [data, setData] = useState<any[]>([]);
	const [page, setPage] = useState(0);
	const nav = useNavigate();
	const items: Organization[] = organizations.filter(
		(org) => org.status === "Approved",
	);
	const filterOptions: any[] = RegisteredOrganizationsOptions;
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
				<div className="grid h-[90vh] grid-cols-4 gap-5">
					{data
						.slice(page * pageSize, (page + 1) * pageSize)
						.map((item, index) => (
							<Card
								key={`${item.id}-${index}`}
								className="flex h-[25vh] w-[25vh] flex-col items-center justify-center"
							>
								<h1 className=""> {item.name}</h1>
								<p className="">{item.type}</p>
								<p className="">{item.city}</p>
								<p className="">{item.state}</p>
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
								className={`select-none ${page === 0 ? "pointer-events- opacity-50" : ""}`}
							/>
						</PaginationItem>
						<PaginationItem className="flex self-end">
							<PaginationNext
								onClick={() => {
									if (
										data.slice((page + 1) * pageSize)
											.length !== 0
									) {
										onPageChange(page + 1);
									}
								}}
								className={`select-none ${data.slice((page + 1) * pageSize).length === 0 ? "pointer-events- opacity-50" : ""}`}
							/>
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</div>
	);
}
