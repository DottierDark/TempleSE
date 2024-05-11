import { Card } from '../../Components/shadcn/ui/card';
import { useNavigate } from 'react-router-dom';
import Clothes from '../../assets/Images/Donor/Home/Home-Clothes.jpeg';
import Toys from '../../assets/Images/Donor/Home/Home-Toys.jpeg';
import Food from '../../assets/Images/Donor/Home/Home-Foods.jpeg';
import MedicalSupplies from '../../assets/Images/Donor/Home/Home-Medical-Supplies.jpeg';
import SchoolSupplies from '../../assets/Images/Donor/Home/Home-School-Supplies.jpeg';
import Blood from '../../assets/Images/Donor/Home/Home-Blood.jpeg';
import Org from '../../assets/Images/Donor/Home/Home-Organization.jpeg';
import { donationsCategories } from '../../assets/filterOptions';

export default function DonorHome() {
	const navigate = useNavigate();
	const handleClick = (category: string) => {
		navigate(`/donor/${category}`);
	};
	const donorType = JSON.parse(localStorage.getItem('user') || '{}').donorType;

	const imgsrc = (key: string) => {
		switch (key) {
			case 'toys':
				return Toys;
			case 'clothes':
				return Clothes;
			case 'food':
				return Food;
			case 'medical-supplies':
				return MedicalSupplies;
			case 'school-supplies':
				return SchoolSupplies;
			case 'blood-donation':
				return Blood;
			case 'teaching':
				return '';
			case 'medical-Cases':
				return '';
			case 'organizations':
				return Org;
			default:
				return '';
		}
	};
	return (
		<div className="flex h-full w-full items-center justify-center p-10">
			<div className="grid h-full w-full grid-cols-4 items-center justify-center gap-10">
				{donationsCategories.map((category: { name: string; key: string }) =>
					donorType !== 'regular' ? (
						donorType === 'doctor' && category.key === 'medical-Cases' ? (
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
								<h1 className="text-2xl font-bold">{category.name}</h1>
							</Card>
						) : donorType === 'teacher' && category.key === 'teaching' ? (
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
								<h1 className="text-2xl font-bold">{category.name}</h1>
							</Card>
						) : (
							category.key !== 'teaching' &&
							category.key !== 'medical-Cases' && (
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
									<h1 className="text-2xl font-bold">{category.name}</h1>
								</Card>
							)
						)
					) : (
						category.key !== 'teaching' &&
						category.key !== 'medical-Cases' && (
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
								<h1 className="text-2xl font-bold">{category.name}</h1>
							</Card>
						)
					)
				)}
			</div>
		</div>
	);
}
