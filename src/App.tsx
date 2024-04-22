import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TopBar from './Components/TopBar';
import Login from './Pages/Login';
import { Toaster } from 'react-hot-toast';

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
			</Routes>
		</BrowserRouter>
	);
}

export default App;
