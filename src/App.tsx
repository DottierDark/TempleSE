import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import TopBar from './Components/TopBar';
import Login from './Pages/Login';
import Register from './Pages/Registeration/Register';
import MainRegister from './Pages/Registeration/MainRegister';

{
	/* Home Pages*/
}
import DonorHome from './Pages/Donor/Home';
import OrgHome from './Pages/Organisation/Home';
import AdminHome from './Pages/Admin/Home';

{
	/* Donor Views Pages*/
}
import Toys from './Pages/Donor/Views/Toys';
import Clothes from './Pages/Donor/Views/Clothes';
import Foods from './Pages/Donor/Views/Foods';
import MedicalSupplies from './Pages/Donor/Views/MedicalSupplies';
import SchoolSupplies from './Pages/Donor/Views/SchoolSupplies';
import Bloods from './Pages/Donor/Views/Bloods';
import DonorRequests from './Pages/Admin/Views/DonorRequests';
import Orgs from './Pages/Donor/Views/Orgs';
import TeachingPosts from './Pages/Donor/Views/TeacherPosts';
import MedicalCases from './Pages/Donor/Views/MedicalCases';

import DonorSettings from './Pages/Donor/Views/DonorSettings';

{
	/* Donor Details Pages*/
}
import Blood from './Pages/Donor/Details/Blood';
import Book from './Pages/Donor/Details/Book';
import Cloth from './Pages/Donor/Details/Cloth';
import Food from './Pages/Donor/Details/Food';
import MedicalCase from './Pages/Donor/Details/MedicalCase';
import MedicalSupply from './Pages/Donor/Details/MedicalSupply';
import Org from './Pages/Donor/Details/Org';
import Stationary from './Pages/Donor/Details/Stationary';
import TeachingPost from './Pages/Donor/Details/Teacher';
import Toy from './Pages/Donor/Details/Toy';

{
	/* Organisation Views Pages*/
}
import Fulfilled from './Pages/Organisation/Views/Fulfilled';

{
	/* Admin Views Pages*/
}
import AccountSettings from './Pages/Admin/Views/AdminSettings';
import RegisteredOrganizations from './Pages/Admin/Views/RegisteredOrganizations';
import OrganizationRequests from './Pages/Admin/Views/OrganizationRequests';

{
	/* Admin Details Pages*/
}
import DonorRequestsDetails from './Pages/Admin/Details/DonorRequestsDetails';
import OrganizationRequestsDetails from './Pages/Admin/Details/OrganizationRequestsDetails';
import { Toaster } from './Components/shadcn/ui/toaster';

function App() {
	return (
		<BrowserRouter>
			<TopBar />
			<Toaster />
			<div
				id="dialog"
				className="custom-scrollbar absolute flex h-screen w-full items-center justify-center empty:hidden"
			/>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/mainregister" element={<MainRegister />} />
				{/* Admin Pages*/}
				<Route path="/admin" element={<AdminHome />} />
				<Route path="/admin/DonorRequests" element={<DonorRequests />} />
				<Route
					path="/admin/RegisteredOrganizations"
					element={<RegisteredOrganizations />}
				/>
				<Route
					path="/admin/OrganizationsRequests"
					element={<OrganizationRequests />}
				/>
				<Route
					path="/admin/DonorRequestsDetails"
					element={<DonorRequestsDetails />}
				/>
				<Route
					path="/admin/OrganizationRequestsDetails"
					element={<OrganizationRequestsDetails />}
				/>
				<Route path="/admin/AccountSettings" element={<AccountSettings />} />
				{/* Donor Pages*/}
				<Route path="/donor" element={<DonorHome />} />
				<Route path="/donor/toys" element={<Toys />} />
				<Route path="/donor/toys/:id" element={<Toy />} />
				<Route path="/donor/clothes" element={<Clothes />} />
				<Route path="/donor/clothes/:id" element={<Cloth />} />
				<Route path="/donor/food" element={<Foods />} />
				<Route path="/donor/food/:id" element={<Food />} />
				<Route path="/donor/settings" element={<DonorSettings />} />
				<Route path="/donor/medical-supplies" element={<MedicalSupplies />} />
				<Route path="/donor/medical-supplies/:id" element={<MedicalSupply />} />
				<Route path="/donor/school-supplies" element={<SchoolSupplies />} />
				<Route path="/donor/school-supplies/:id" element={<Stationary />} />
				<Route path="/donor/blood-donation" element={<Bloods />} />
				<Route path="/donor/blood-donation/:id" element={<Blood />} />
				<Route path="/donor/organizations" element={<Orgs />} />
				<Route path="/donor/organizations/:id" element={<Org />} />
				<Route path="/donor/teaching" element={<TeachingPosts />} />
				<Route path="/donor/teaching/:id" element={<TeachingPost />} />
				<Route path="/donor/medical-cases" element={<MedicalCases />} />
				<Route path="/donor/medical-cases/:id" element={<MedicalCase />} />

				{/* Organisation Pages*/}
				<Route path="/organisation" element={<OrgHome />} />
				<Route
					path="/organisation/AccountSettings"
					element={<DonorSettings />}
				/>
				<Route path="/organisation/fulfilled" element={<Fulfilled />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
