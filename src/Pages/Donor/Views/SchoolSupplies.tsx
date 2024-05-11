import ViewList from '../../../Components/ViewList';
import { TSchoolSuppliesItem } from '../../../types';

export default function SchoolSupplies() {
	function Cardbody(item: TSchoolSuppliesItem) {
		return (
			<>
				<div className="w-64 h-40">
					<img
						src={item.img}
						className="w-64 h-40 border-[#171A21] border border-solid rounded-lg"
					/>
				</div>
				<div className="flex flex-col py-2 justify-around w-full px-3">
					<div className="flex justify-between items-center">
						<div className="text-lg text-bold">Name:</div>
						<div className="text-md">{item.name}</div>
					</div>
					<div className="flex justify-between items-center">
						<div className="text-lg text-medium">Type:</div>
						<div className="text-md">{item.itemType}</div>
					</div>
				</div>
			</>
		);
	}
	return <ViewList category="School Supplies" Cardbody={Cardbody} />;
}
