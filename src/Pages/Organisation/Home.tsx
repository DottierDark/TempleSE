import { Card } from "../../Components/shadcn/ui/card";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { TCategories } from "../../types";
import {organisationsCategories} from "../../assets/filterOptions";
import settings from "../../assets/Images/accountsettings.jpeg";

export default function OrganisationHome() {
	const navigate = useNavigate();
	const handleClick = (category: string) => {
		navigate(`/organisation/${category}`);
	};

	const imgsrc = (key: string) => {
		switch (key) {
			case "accountsettings":
				return settings;
			default:
				return "";
		}
	};
	return (
		<div className="flex h-full w-full items-center justify-center">
			<div className="grid h-[60%] w-[60%] grid-cols-3 grid-rows-2 items-center justify-center gap-5">
				{organisationsCategories.map(
					(category: { name: string; key: string }) => (
						<Card
							key={category.key}
							onClick={() => handleClick(category.key)}
							className="flex h-[35vh] w-[35vh] cursor-pointer flex-col flex-col items-center justify-center  hover:shadow-2xl"
						>
							<img
								className="h-[70%] w-[70%] object-contain"
								src={imgsrc(category.key)}
								alt={category.name}
							/>
							<h1 className="text-2xl font-bold">
								{category.name}
							</h1>
						</Card>
					),
				)}
			</div>
		</div>
	);
}
