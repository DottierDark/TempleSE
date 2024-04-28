import { Card } from "../../Components/shadcn/ui/card";
import { useNavigate } from "react-router-dom";
import DonorRequestsList from "../../assets/Images/DonorsRequestsLists.jpeg";
import OrganizationRequestsList from "../../assets/Images/OrganizationsRequestsLists.jpeg";
import RegistredOrganizations from "../../assets/Images/RegistredOrganizations.jpeg";


export default function AdminHome() {
	const navigate = useNavigate();
	const handleClick = (category: string) => {
		navigate(`/admin/${category}`);
	};

	const imgsrc = {
		DonorRequestsList: DonorRequestsList,
		OrganizationRequestsList: OrganizationRequestsList,
		RegistredOrganizations: RegistredOrganizations,
	};
	return (
		<div className="flex h-full w-full items-center justify-center">
			<Card className="grid h-[50%] w-[50%] grid-cols-3 grid-rows-2 items-center justify-center gap-5">
				<Card
					className="flex h-full w-full flex-col items-center justify-center transition-all hover:scale-[125%]"
					onClick={() => {
						handleClick("RegisteredOrganizations");
					}}
				>
					<h1>Registered Organizations</h1>
					<img src={imgsrc.RegistredOrganizations} alt="RegistredOrganizations" />
				</Card>
				<Card
					className="flex h-full w-full flex-col items-center justify-center  transition-all hover:scale-[125%]"
					onClick={() => {
						handleClick("OrganizationsRequests");
					}}
				>
					<h1>Organizations Requests</h1>
					<img src={imgsrc.OrganizationRequestsList} alt="OrganizationRequestsList" />
				</Card>
				<Card
					className="flex h-full w-full flex-col items-center justify-center  transition-all hover:scale-[125%]"
					onClick={() => {
						handleClick("DonorRequests");
					}}
				>
					<h1>Donors Requests</h1>
					<img src={imgsrc.DonorRequestsList} alt="DonorRequestsLists" />
				</Card>
				
			</Card>
		</div>
	);
}
