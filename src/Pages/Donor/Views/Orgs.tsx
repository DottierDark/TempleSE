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
				<div className="flex w-full justify-between">
					<div className="text-xl text-medium">Name</div>
					<div className="text-lg">{item.name}</div>
				</div>
				<div className="flex w-full justify-between">
					<div className="text-xl text-medium">Location: </div>
					<div className="text-lg">
						<p>{item.street}</p>
						<p className="text-lg">{item.city}</p>
						<p className="text-lg">{item.state}</p>
					</div>
				</div>
				<div className="flex w-full justify-between">
					<div className="text-xl text-medium">Contact: </div>
					<div className="text-lg">{item.contactEmail}</div>
				</div>
			</>
		);
	}

	return <ViewList category="Organizations" Cardbody={Cardbody} />;
}
