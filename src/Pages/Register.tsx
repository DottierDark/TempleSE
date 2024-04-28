import { useEffect, useState } from "react";
import { loginButtonClass, loginContainerClass } from "../assets/Styles";
import { useNavigate } from "react-router-dom";
import { Label } from "../Components/shadcn/ui/label";
import { Input } from "../Components/shadcn/ui/input";

export default function Register() {
	const [formType, setFormType] = useState<"Donor" | "Organization">("Donor");

	const navigate = useNavigate();
	const [selectedDonorType, setSelectedDonorType] = useState(""); // Initialize selectedDonorType state

	const handleDonorTypeChange = (
		event: React.ChangeEvent<HTMLSelectElement>,
	) => {
		setSelectedDonorType(event.target.value); // Update state based on selected value
	};
	useEffect(() => {
		const id = localStorage.getItem("user");
		const type = localStorage.getItem("type");

		if (id && type) {
			navigate(`/${type}`);
		}
	}, [navigate]);

	return (
		<div className="absolute flex h-full w-full flex-col items-center justify-center bg-gray-900 ">
			<div className={loginContainerClass}>
				<div className="flex flex-row items-center justify-center">
					<button
						onClick={() => setFormType("Donor")}
						className={`${loginButtonClass} ${
							formType === "Donor" ? "bg-blue-500" : "bg-gray-700"
						}`}
					>
						Donor
					</button>
					<button
						onClick={() => setFormType("Organization")}
						className={`${loginButtonClass} ${
							formType === "Organization"
								? "bg-blue-500"
								: "bg-gray-700"
						}`}
					>
						Organization
					</button>
				</div>
				{formType === "Donor" ? (
					<div className="flex-col items-center justify-center">
						<h1 className="text-center text-2xl font-bold text-white">
							Donor Register
						</h1>
						<form className="flex flex-col space-y-4">
							<input
								type="text"
								placeholder="First Name"
								className="rounded-lg p-3"
							/>
							<input
								type="text"
								placeholder="Last Name"
								className="rounded-lg p-3"
							/>
							<input
								type="text"
								placeholder="Email"
								className="rounded-lg p-3"
							/>
							<input
								type="password"
								placeholder="Password"
								className="rounded-lg p-3"
							/>
							<select className="rounded-lg p-3">
								<option value="" disabled selected>
									Select Gender
								</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
								<option value="other">Other</option>
							</select>
							<select
								className="rounded-lg p-3"
								id="donorType"
								onChange={handleDonorTypeChange}
							>
								<option value="" disabled selected>
									Donor Type
								</option>
								<option value="regular">Regular</option>
								<option value="teacher">Teacher</option>
								<option value="doctor">Doctor</option>
							</select>
							<input
								type="text"
								placeholder="Contact Number"
								className="rounded-lg p-3"
							/>
							<input
								type="text"
								placeholder="Address"
								className="rounded-lg p-3"
							/>
							<input
								type="text"
								placeholder="Area"
								className="rounded-lg p-3"
							/>
							<input
								type="text"
								placeholder="City"
								className="rounded-lg p-3"
							/>
							<input
								type="text"
								placeholder="Subjects you can teach"
								className={`rounded-lg p-3 ${
									selectedDonorType === "teacher"
										? ""
										: "hidden" // Hide the container if not teacher or doctor
								}`}
							/>
							<input
								type="text"
								placeholder="How many Classes can you"
								className={`rounded-lg p-3 ${
									selectedDonorType === "teacher"
										? ""
										: "hidden" // Hide the container if not teacher or doctor
								}`}
							/>
							<div
								className={`grid w-full max-w-sm items-center gap-1.5 ${
									selectedDonorType === "teacher" ||
									selectedDonorType === "doctor"
										? ""
										: "hidden" // Hide the container if not teacher or doctor
								}`}
							>
								<label htmlFor="file" className="text-white">
									Upload Credentials
								</label>
								<input id="file" type="file" />
							</div>

							<button className="rounded-lg bg-blue-500 p-3 font-bold text-white">
								Register
							</button>
						</form>
					</div>
				) : (
					<div className="items-center justify-center">
						<h1 className="flex-col text-center text-2xl font-bold text-white">
							Organization Representative Register
						</h1>
						<form className="flex flex-col space-y-4">
							<input
								type="text"
								placeholder="First Name"
								className="rounded-lg p-3"
							/>
							<input
								type="text"
								placeholder="Last Name"
								className="rounded-lg p-3"
							/>
							<input
								type="text"
								placeholder="Email"
								className="rounded-lg p-3"
							/>
							<input
								type="password"
								placeholder="Password"
								className="rounded-lg p-3"
							/>
							<select className="rounded-lg p-3">
								<option value="" disabled selected>
									Select Gender
								</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
								<option value="other">Other</option>
							</select>
							<input
								type="text"
								placeholder="Contact Number"
								className="rounded-lg p-3"
							/>
							<input
								type="text"
								placeholder="Organization Name"
								className="rounded-lg p-3"
							/>
							<input
								type="text"
								placeholder="Organization Type"
								className="rounded-lg p-3"
							/>
							<input
								type="text"
								placeholder="Organization Address"
								className="rounded-lg p-3"
							/>
							<input
								type="text"
								placeholder="Area"
								className="rounded-lg p-3"
							/>
							<input
								type="text"
								placeholder="City"
								className="rounded-lg p-3"
							/>
							
							<div className="grid w-full max-w-sm items-center gap-1.5">
								<label htmlFor="file" className="text-white">
									Upload Proof for being Part of Organization
								</label>
								<input id="file" type="file" />
							</div>
							<div className="grid w-full max-w-sm items-center gap-1.5">
								<label htmlFor="file" className="text-white">
									Upload Organizational Credentials
								</label>
								<input id="file" type="file" />
							</div>
							<button className="rounded-lg bg-blue-500 p-3 font-bold text-white">
								Register
							</button>
						</form>
						<p
							className=" text-primary-500 cursor-pointer font-medium text-white hover:underline"
							onClick={() => navigate("/login")}
						></p>
					</div>
				)}
			</div>
		</div>
	);
}
