import { useEffect, useState } from "react";
import { loginButtonClass, loginContainerClass } from "../assets/Styles";
import { useNavigate } from "react-router-dom";

export default function Register() {
	const [formType, setFormType] = useState<"Donor" | "Org">("Donor");

	const navigate = useNavigate();

	useEffect(() => {
		const id = localStorage.getItem("user");
		const type = localStorage.getItem("type");

		if (id && type) {
			navigate(`/${type}`);
		}
	}, [navigate]);

	return (
		<div className="flex h-full w-full flex-col items-center justify-center bg-gray-900 "></div>
	);
}
