import { useNavigate } from 'react-router-dom';
import RequestsDonor from '../../assets/Images/Admin/DonorsRequestsLists.jpeg';
import RequestsOrg from '../../assets/Images/Admin/OrganizationsRequestsLists.jpeg';
import RegisteredOrg from '../../assets/Images/Admin/RegistredOrganizations.jpeg';
import { Card } from '../../Components/shadcn/ui/card';

export default function AdminHome() {
	const navigate = useNavigate();

	const handleClick = (category: string) => {
		navigate(`/admin/${category}`);
	};

	const imgsrc = {
		DonorRequestsList: RequestsDonor,
		OrganizationRequestsList: RequestsOrg,
		RegistredOrganizations: RegisteredOrg,
	};

	return (
		<div className="flex h-full w-full items-center justify-center p-5 gap-6 mt-44 ">
			<Card
				className="flex h-[35vh] w-[35vh] cursor-pointer flex-col items-center justify-center  hover:shadow-2xl"
				onClick={() => {
					handleClick('RegisteredOrganizations');
				}}
			>
				<img
					src={imgsrc.RegistredOrganizations}
					alt="RegistredOrganizations"
					className="h-[70%] w-[70%] object-contain"
				/>
				<h1 className="text-2xl font-bold whitespace-nowrap">Registered Organizations</h1>
			</Card>
			<Card
				className="flex h-[35vh] w-[35vh] cursor-pointer flex-col items-center justify-center  hover:shadow-2xl"
				onClick={() => {
					handleClick('OrganizationsRequests');
				}}
			>
				<img
					src={imgsrc.OrganizationRequestsList}
					alt="OrganizationRequestsList"
					className="h-[70%] w-[70%] object-contain"
				/>
				<h1 className="text-2xl font-bold">Organizations Requests</h1>
			</Card>
			<Card
				className="flex h-[35vh] w-[35vh] cursor-pointer flex-col items-center justify-center  hover:shadow-2xl"
				onClick={() => {
					handleClick('DonorRequests');
				}}
			>
				<img
					src={imgsrc.DonorRequestsList}
					alt="DonorRequestsLists"
					className="h-[70%] w-[70%] object-contain"
				/>
				<h1 className="text-2xl font-bold">Donor Requests</h1>
			</Card>
			<Card
				className="flex h-[35vh] w-[35vh] cursor-pointer flex-col items-center justify-center  hover:shadow-2xl"
				onClick={() => {
					handleClick('donors');
				}}
			>
				<img
					src={imgsrc.DonorRequestsList}
					alt="DonorRequestsLists"
					className="h-[70%] w-[70%] object-contain"
				/>
				<h1 className="text-2xl font-bold">Donor Requests</h1>
			</Card>
		</div>
	);
}
