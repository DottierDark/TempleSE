import ViewList from '../../../Components/ViewList';
import { TSchoolSuppliesItem } from '../../../types';

export default function SchoolSupplies() {
	function Cardbody(item: TSchoolSuppliesItem) {
		return (
			<>
				<div className="flex w-full justify-between">
					<div className="text-xl text-medium">Name</div>
					<div className="text-lg">{item.name}</div>
				</div>
				<div className="flex w-full justify-between">
					<img src={item.img}></img>
				</div>
				<div className="flex w-full justify-between">
					<div className="text-xl text-medium">Quantity: </div>
					<div className="text-lg">{item.quantity}</div>
				</div>
				<div className="flex w-full justify-between">
					<div className="text-xl text-medium">Type: </div>
					<div className="text-lg">{item.itemType}</div>
				</div>
			</>
		);
	}
	return <ViewList category="School Supplies" Cardbody={Cardbody} />;
}
