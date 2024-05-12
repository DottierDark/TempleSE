import { useNavigate } from 'react-router-dom';
import RequestsDonor from '../../assets/Images/Admin/Home/DonorsRequestsLists.jpeg';
import RequestsOrg from '../../assets/Images/Admin/Home/OrganizationsRequestsLists.jpeg';
import RegisteredOrg from '../../assets/Images/Admin/Home/RegistredOrganizations.jpeg';

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
		<div className="flex h-full w-full items-center justify-center">
			<div className="flex flex-row items-center justify-center gap-20 mt-40">
				<div
					className="flex flex-col items-center justify-center transition-all hover:scale-[125%] rounded-lg overflow-hidden"
					onClick={() => {
						handleClick('RegisteredOrganizations');
					}}
				>
					<img
						src={imgsrc.RegistredOrganizations}
						alt="RegistredOrganizations"
						style={{ width: '300px', height: '300px' }}
					/>
					<h1 style={{ fontWeight: 'bold', fontSize: '24px', marginTop: '10px' }}>Registered Organizations</h1>
				</div>
				<div
					className="flex flex-col items-center justify-center  transition-all hover:scale-[125%] rounded-lg overflow-hidden"
					onClick={() => {
						handleClick('OrganizationsRequests');
					}}
				>
					<img
						src={imgsrc.OrganizationRequestsList}
						alt="OrganizationRequestsList"
						style={{ width: '300px', height: '300px' }}
					/>
					<h1 style={{ fontWeight: 'bold', fontSize: '24px', marginTop: '10px' }}>Requests from Organizations</h1>
				</div>
				<div
					className="flex flex-col items-center justify-center  transition-all hover:scale-[125%] rounded-lg overflow-hidden"
					onClick={() => {
						handleClick('DonorRequests');
					}}
				>
					<img
						src={imgsrc.DonorRequestsList}
						alt="DonorRequestsLists"
						style={{ width: '300px', height: '300px' }}
					/>
					<h1 style={{ fontWeight: 'bold', fontSize: '24px', marginTop: '10px' }}>Requests from Donor</h1>
				</div>
			</div>
		</div>
	);
}
