import { Card } from "../../Components/shadcn/ui/card";
import { useNavigate } from "react-router-dom";
import clothes from "../../assets/Images/clothes-donation.jpeg";
import toys from "../../assets/Images/toys-donations.jpeg";
import food from "../../assets/Images/food-donation.jpeg";
import medical from "../../assets/Images/medical-donation.jpeg";
import school from "../../assets/Images/school-donation.jpeg";
import blood from "../../assets/Images/blood-donation.jpeg";
import { donationsCategories } from "../../assets/filterOptions";
export default function OrganisationHome() {
	const navigate = useNavigate();
	const handleClick = (category: string) => {
		navigate(`/donor/${category}`);
	};

	const imgsrc = (key: string) => {
		switch (key) {
			case "toys":
				return toys;
			case "clothes":
				return clothes;
			case "food":
				return food;
			case "medical":
				return medical;
			case "school":
				return school;
			case "blood":
				return blood;
			default:
				return "";
		}
	};
	return (
		<div className="flex h-full w-full items-center justify-center">
			<div className="grid h-[60%] w-[60%] grid-cols-3 grid-rows-2 items-center justify-center gap-5">
				{donationsCategories.map(
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
