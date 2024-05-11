import ViewList from '../../../Components/ViewList';
import { TClothesItem } from '../../../types';

export default function Clothes() {
	function Cardbody(item: TClothesItem) {
		return (
			<>
				<div className="w-60 h-40">
					<img
						src={item.img}
						className="w-60 h-40 border-[#171A21] border border-solid rounded-lg object-contain bg-white "
					/>
				</div>
				<div className="flex flex-col py-2 justify-around w-full px-3">
					<div className="flex justify-between items-center">
						<div className="text-lg text-bold">Name:</div>
						<div className="text-md">{item.name}</div>
					</div>
					<div className="flex justify-between items-center">
						<div className="text-lg text-medium">Age group:</div>
						<div className="text-md">{item.ageGroup}</div>
					</div>
					<div className="flex justify-between items-center">
						<div className="text-lg text-medium">Season:</div>
						<div className="text-md">{item.season}</div>
					</div>
					<div className="flex justify-between items-center">
						<div className="text-lg text-medium">Gender:</div>
						<div className="text-md">{item.gender}</div>
					</div>
				</div>
			</>
		);
	}
	return <ViewList category="Clothes" Cardbody={Cardbody} />;
}
