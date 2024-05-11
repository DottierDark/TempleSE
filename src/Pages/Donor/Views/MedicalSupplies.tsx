import ViewList from '../../../Components/ViewList';
import { TMedicalSupply } from '../../../types';

export default function medicalSupplies() {
	function Cardbody(item: TMedicalSupply) {
		return (
			<>
				<div className="w-64 h-40 ">
					<img
						src={item.img}
						className="w-64 h-40 border-[#171A21] border border-solid rounded-lg object-contain bg-white "
					/>
				</div>
				<div className="flex flex-col py-2 justify-around w-full px-3">
					<div className="flex justify-between items-center">
						<div className="text-lg text-bold">Name:</div>
						<div className="text-md">{item.name}</div>
					</div>
					<div className="flex justify-between items-center">
						<div className="text-lg text-medium">Type:</div>
						<div className="text-md">{item.type}</div>
					</div>
					<div className="flex justify-between items-center">
						<div className="text-lg text-medium">Use:</div>
						<div className="text-md">{item.use}</div>
					</div>
				</div>
			</>
		);
	}

	return <ViewList category="Medical Supplies" Cardbody={Cardbody} />;
}
