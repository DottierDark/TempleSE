import { useState } from 'react';
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationNext,
	PaginationPrevious,
} from '../../../Components/shadcn/ui/pagination';
import { Card } from '../../../Components/shadcn/ui/card';
import Filter from '../../../Components/Filter';
import { RegisteredOrganizationsOptions } from '../../../assets/filterOptions';
import { organizations } from '../../../assets/dummyData';
import { Organization } from '../../../types';
import { useNavigate } from 'react-router-dom';
import ViewList from '../../../Components/ViewList';

export default function Orgs() {
	function Cardbody(item: Organization) {
		return (
			<>
				<div className="w-64 h-40">
					<img
						src={item.img}
						className="w-64 h-40 border-[#171A21] border border-solid rounded-lg object-contain bg-white "
					/>
				</div>
				<div className="flex flex-col py-2 justify-around w-full px-3">
					<div className="flex justify-between items-center">
						<div className="text-lg text-bold">Name:</div>
						<div className="text-md">{item.name}</div>
					</div>
					<div className="flex justify-between items-center">
						<div className="text-lg text-medium">Organization Type:</div>
						<div className="text-md">{item.type}</div>
					</div>
					<div className="flex justify-between items-center">
						<div className="text-lg text-medium">Area:</div>
						<div className="text-md">{item.area}</div>
					</div>
					<div className="flex justify-between items-center">
						<div className="text-lg text-medium">Governorate:</div>
						<div className="text-md">{item.gov}</div>
					</div>
				</div>
			</>
		);
	}

	return <ViewList category="Organizations" Cardbody={Cardbody} />;
}
