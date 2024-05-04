import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TopBar from "./Components/TopBar";
import Login from "./Pages/Login";
import AdminHome from "./Pages/Admin/Home";
import { Toaster } from "react-hot-toast";
import DonorHome from "./Pages/Donor/Home";
import OrgHome from "./Pages/Organisation/Home";
import Register from "./Pages/Register";
import Toys from "./Pages/Donor/Views/Toys";
import Clothes from "./Pages/Donor/Views/Clothes";
import Food from "./Pages/Donor/Views/Food";
import MedicalSupplies from "./Pages/Donor/Views/MedicalSupplies";
import SchoolSupplies from "./Pages/Donor/Views/SchoolSupplies";
import Blood from "./Pages/Donor/Views/Blood";
import DonorRequests from "./Pages/Admin/Views/DonorRequests";
import RegisteredOrganizations from "./Pages/Admin/Views/RegisteredOrganizations";
import OrganizationRequests from "./Pages/Admin/Views/OrganizationRequests";
import DonorRequestsDetails from "./Pages/Admin/Details/DonorRequestsDetails";
import OrganizationRequestsDetails from "./Pages/Admin/Details/OrganizationRequestsDetails";
import AdminSettingsPage from "./Pages/Admin/Views/AccountSettings";
import AccountSettings from "./Pages/Admin/Views/AccountSettings";
import DonorAccountSettings from "./Pages/Donor/Views/AccountSettings";
//import OrganisationAccountSettings from "./Pages/Organisation/Views/AccountSettings";


function App() {
	return (
		<BrowserRouter>
			<TopBar />
			<Toaster position="top-center" reverseOrder={false} />
			<div
				id="dialog"
				className="custom-scrollbar absolute flex h-screen w-full items-center justify-center empty:hidden"
			/>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/admin" element={<AdminHome />} />
				<Route path="/admin/DonorRequests" element={<DonorRequests />} />
				<Route path="/admin/RegisteredOrganizations" element={<RegisteredOrganizations />} />	
				<Route path="/admin/OrganizationsRequests" element={<OrganizationRequests />} />	
				<Route path="/admin/DonorRequestsDetails" element={<DonorRequestsDetails />} />
				<Route path="/admin/OrganizationRequestsDetails" element={<OrganizationRequestsDetails />} />
			    <Route path="/admin/AccountSettings" element={<AccountSettings />} />
				<Route path="/donor" element={<DonorHome />} />
				<Route path="/donor/toys" element={<Toys />} />
				<Route path="/donor/clothes" element={<Clothes />} />
				<Route path="/donor/food" element={<Food />} />
				<Route path="/donor/AccountSettings" element={<DonorAccountSettings/>} />
				<Route
					path="/donor/medical-supplies"
					element={<MedicalSupplies />}
				/>
				<Route
					path="/donor/school-supplies"
					element={<SchoolSupplies />}
				/>
				<Route path="/donor/blood-donation" element={<Blood />} />
				<Route path="/organisation" element={<OrgHome />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
