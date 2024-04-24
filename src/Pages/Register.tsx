import { useEffect, useState } from "react";
import { loginButtonClass, loginContainerClass } from "../assets/Styles";
import { useNavigate } from "react-router-dom";

export default function signup() {	;
	const [formType, setFormType] = useState<"signup">("signup");
	
	const navigate = useNavigate();

	useEffect(() => {
		const id = localStorage.getItem("user");
		const type = localStorage.getItem("type");

		if (id && type) {
			navigate(`/${type}`);
		}
	}, [navigate]);



	return (
			
		<div className="flex h-full w-full flex-col items-center justify-center bg-gray-900 ">
			<div
				className={`${loginContainerClass}, ${
					formType === "signup"
						? "h-[85vh] duration-280 ease-in-out"
						: "h-[85vh] duration-280 ease-in-out"
				}`}
			>
				<div className="flex flex-col items-center gap-5">
					<h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
						{formType === "signup" ? "signup" : "Signup"}
					</h1>
					<p
						className=" cursor-pointer font-medium text-primary-500 hover:underline"
						onClick={() =>
							setFormType(
								formType === "signup" ? "signup" : "signup",
							)
						}
					>
						{formType === "signup"
							? "Don't have an account?"
							: "Already have an account?"}{" "}
						<span
							className="cursor-pointer text-blue-500"
							onClick={() =>
								setFormType(
									formType === "signup" ? "signup" : "signup",
								)
							}
						>
							{formType === "signup" ? "Signup" : "signup"}
						</span>
					</p>
					<button>	
						{formType === "signup" (
							<div className="flex flex-col gap-4 w-full">
								<input
									type="text"
									placeholder="Name"
									className="block w-full rounded-lg border  border-gray-600  bg-gray-700 p-2.5 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
								/>
								<input
									type="text"
									placeholder="Email"
									className="block w-full rounded-lg border  border-gray-600  bg-gray-700 p-2.5 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
								/>
								<input
									type="password"
									placeholder="Password"
									className="block w-full rounded-lg border  border-gray-600  bg-gray-700 p-2.5 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
								/>
							</div>
						)}
						<br></br>
						<button className={loginButtonClass} >
                            {formType === "signup" ? "signup" : "Signup"}
                        </button>
					</button>
					
				</div>
			</div>
		</div>
	);
}
