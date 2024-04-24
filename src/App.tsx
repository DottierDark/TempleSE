import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TopBar from "./Components/TopBar";
import Login from "./Pages/Login";
import AdminHome from "./Pages/Admin/Home";
import { Toaster } from "react-hot-toast";
import DonorHome from "./Pages/Donor/Home";
import OrgHome from "./Pages/Org/Home";

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
        		<Route path="/" element={<Login />} /> {/* Login page at root path */}
        		<Route path="/signup" element={<Signup />} /> {/* Signup page at /signup path */}
				<Route path="/Admin" element={<AdminHome />} />
				<Route path="/Donor" element={<DonorHome />} />
				<Route path="/Org" element={<OrgHome />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;



