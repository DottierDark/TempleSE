import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TopBar from './Components/TopBar';
import Login from './Pages/Login';
import AdminHome from './Pages/Admin/Home';
import { Toaster } from 'react-hot-toast';
import DonorHome from './Pages/Donor/Home';
import OrgHome from './Pages/Organisation/Home';
import Register from './Pages/Register';

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
				<Route path="/donor" element={<DonorHome />} />
				<Route path="/organisation" element={<OrgHome />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
