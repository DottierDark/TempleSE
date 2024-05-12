import { useNavigate } from 'react-router-dom';
import RequestsDonor from '../../assets/Images/Admin/Home/DonorsRequestsLists.jpeg';
import RequestsOrg from '../../assets/Images/Admin/Home/OrganizationsRequestsLists.jpeg';
import RegisteredOrg from '../../assets/Images/Admin/Home/RegistredOrganizations.jpeg';
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
		<div className="flex h-full w-full items-center justify-center p-10 gap-20 mt-40 ">
			<Card
				className="flex flex-col h-[45vh] w-[45vh] cursor-pointer flex-col flex-col items-center justify-center  hover:shadow-2xl"
				onClick={() => {
					handleClick('RegisteredOrganizations');
				}}
			>
				<img
					src={imgsrc.RegistredOrganizations}
					alt="RegistredOrganizations"
					className="object-contain w-[300px] h-[300px]"
				/>
				<h1 className="font-bold text-3xl mt-5">Registered Organizations</h1>
			</Card>
			<Card
				className="flex flex-col h-[45vh] w-[45vh] cursor-pointer flex-col flex-col items-center justify-center  hover:shadow-2xl"
				onClick={() => {
					handleClick('OrganizationsRequests');
				}}
			>
				<img
					src={imgsrc.OrganizationRequestsList}
					alt="OrganizationRequestsList"
					className="object-contain w-[300px] h-[300px]"
				/>
				<h1 className="font-bold text-3xl mt-5">Organizations Requests</h1>
			</Card>
			<Card
				className="flex flex-col h-[45vh] w-[45vh] cursor-pointer flex-col flex-col items-center justify-center  hover:shadow-2xl"
				onClick={() => {
					handleClick('DonorRequests');
				}}
			>
				<img
					src={imgsrc.DonorRequestsList}
					alt="DonorRequestsLists"
					className="object-contain w-[300px] h-[300px]"
				/>
				<h1 className="font-bold text-3xl mt-5">Donor Requests</h1>
			</Card>
		</div>
	);
}
