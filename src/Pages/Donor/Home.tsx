import { Card } from "../../Components/shadcn/ui/card";
import { useNavigate } from "react-router-dom";
import clothes from "../../assets/Images/clothes-donation.jpeg";
import toys from "../../assets/Images/toys-donations.jpeg";
import food from "../../assets/Images/food-donation.jpeg";
import medical from "../../assets/Images/medical-donation.jpeg";
import school from "../../assets/Images/school-donation.jpeg";
import blood from "../../assets/Images/blood-donation.jpeg";

export default function DonorHome() {
	const navigate = useNavigate();

	const imgsrc = {
		clothes: clothes,
		toys: toys,
		food: food,
		medical: medical,
		school: school,
		blood: blood,
	};
	return (
		<div className="flex h-full w-full items-center justify-center">
			<Card className="grid h-[50%] w-[50%] grid-cols-3 grid-rows-2 items-center justify-center gap-5">
				<Card className="flex h-full w-full flex-col items-center justify-center transition-all hover:scale-[125%]">
					<h1>Clothes</h1>
					<img src={imgsrc.clothes} alt="clothes" />
				</Card>
				<Card
					className="flex h-full w-full flex-col items-center justify-center  transition-all hover:scale-[125%]"
					onClick={() => {
						console.log("Toys");
					}}
				>
					<h1>Toys</h1>
					<img src={imgsrc.toys} alt="toys" />
				</Card>
				<Card className="flex h-full w-full flex-col items-center justify-center  transition-all hover:scale-[125%]">
					<h1>Food</h1>
					<img src={imgsrc.food} alt="food" />
				</Card>
				<Card className="flex h-full w-full flex-col items-center justify-center  transition-all hover:scale-[125%]">
					<h1>Medical Supplies</h1>
					<img src={imgsrc.medical} alt="medical" />
				</Card>
				<Card className="flex h-full w-full flex-col items-center justify-center  transition-all hover:scale-[125%]">
					<h1>School supplies</h1>
					<img src={imgsrc.school} alt="school" />
				</Card>
				<Card className="flex h-full w-full flex-col items-center justify-center  transition-all hover:scale-[125%]">
					<h1>Blood Donations</h1>{" "}
					<img src={imgsrc.blood} alt="blood" />
				</Card>
			</Card>
		</div>
	);
}
