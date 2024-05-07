import { useNavigate } from "react-router-dom";
export default function OrganisationHome() {
	const navigate = useNavigate();
	const handleClick = (key: string) => {
		navigate(`/organisation/${key}`);
	};
	return (
		<div className="flex h-full w-full items-center justify-center">
			<div className="grid h-[60%] w-[60%] grid-cols-3 grid-rows-2 items-center justify-center gap-5"></div>
		</div>
	);
}
