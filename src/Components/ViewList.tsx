import { TCategories, TDonationItem } from "../types";
import { Card } from "./shadcn/ui/card";
import {
	bloodCases,
	clothes,
	foods,
	medicalSupplies,
	schoolSupplies,
	toys,
} from "../assets/DummyData";
import { useNavigate } from "react-router-dom";
import { RadioGroup, RadioGroupItem } from "./shadcn/ui/radioGroup";

export default function ViewList(category: any) {
	let items: any[] = [];
	let filterOptions: { name: string; options: string[] }[] = [];
	const uniqueAgeGroups = new Set<string>();
	const uniqueGender = new Set<string>();
	const uniqueCategory = new Set<string>();
	const nav = useNavigate();
	switch (category.category) {
		case "Clothes":
			items = clothes;
			break;
		case "Toys":
			items = toys;
			toys.forEach((item) => {
				uniqueAgeGroups.add(item.ageGroup);
				uniqueGender.add(item.gender);
				uniqueCategory.add(item.category);
			});
			filterOptions = [
				{
					name: "Age Group",
					options: Array.from(uniqueAgeGroups),
				},
				{
					name: "Gneder",
					options: Array.from(uniqueGender),
				},
				{
					name: "Category",
					options: Array.from(uniqueCategory),
				},
			];
			break;
		case "Food":
			items = foods;
			break;
		case "Medical Supplies":
			items = medicalSupplies;
			break;
		case "School Supplies":
			items = schoolSupplies;
			break;
		case "Blood Donation":
			items = bloodCases;
			break;
		default:
			break;
	}
	const handleCardClick = (item: TDonationItem) => {
		nav(`/donor/toys/item`);
	};
	const selectedOptions: { [key: string]: string } = {};
	const handleFilterChange = () => {
		let filteredItems = items;
		filterOptions.forEach((filter) => {
			const { name, options } = filter;
			const selectedOption = selectedOptions[name];
			if (selectedOption) {
				filteredItems = filteredItems.filter(
					(item) => item[name] === selectedOption,
				);
			}
		});
		items = filteredItems;
	};

	return (
		<div className="flex flex-row items-center justify-center">
			<div className="flex h-[100%] w-[50vh] flex-col justify-center">
				{filterOptions.map((filter, index) => (
					<div className="block-inline w-[100%]" key={index}>
						<h1>{filter.name}</h1>
						<RadioGroup
							className="flex w-[100%] flex-col items-center gap-2"
							onChange={() => {
								selectedOptions[filter.name] =
									filter.options[0];
								handleFilterChange();
							}}
						>
							{filter.options.map((option, optionIndex) => (
								<div
									className="flex w-[100%] flex-row items-center gap-2"
									key={optionIndex}
								>
									<RadioGroupItem
										value={option}
									></RadioGroupItem>
									<span>{option}</span>
								</div>
							))}
						</RadioGroup>
					</div>
				))}
			</div>
			<div className="grid grid-cols-3 gap-5">
				{items.map((item) => (
					<Card
						key={item.id}
						className="flex h-[20vh] w-[20vh] flex-col items-center justify-center"
						onClick={() => {
							handleCardClick(item);
						}}
					>
						<h1>{item.name}</h1>
						<p>{item.quantity}</p>
					</Card>
				))}
			</div>
		</div>
	);
}
