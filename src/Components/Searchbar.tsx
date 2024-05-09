import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "./shadcn/ui/input";

interface SearchbarProps {
	data: any[]; // Replace 'any' with the type of your dummy data
	setData: (data: any[]) => void; // Replace 'any' with the type of your dummy data
	searchColumn: string;
}

export default function Searchbar({
	data,
	setData,
	searchColumn,
}: SearchbarProps) {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = () => {
		const filteredData = data.filter((item) =>
			item[searchColumn].toLowerCase().includes(searchTerm.toLowerCase()),
		);
		setData(filteredData);
	};

	return (
		<div className=" flex w-full items-center justify-center rounded-md bg-white">
			<Input
				type="text"
				className="outline:none text-font-arial w-full"
				placeholder="Search for a"
				value={searchTerm}
				onChange={(e) => {
					setSearchTerm(e.target.value);
					if (e.target.value === "") {
						setData(data);
					} else {
						handleSearch();
					}
				}}
			/>
		</div>
	);
}
