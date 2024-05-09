import ViewList from '../../../Components/ViewList';
import { TToyItem } from '../../../types';

export default function Toys() {
	function Cardbody(item: TToyItem) {
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
					<div className="text-xl text-medium"></div>
					<div className="text-lg">{item.name}</div>
				</div>
				<div className="flex w-full justify-between">
					<div className="text-xl text-medium">Age group</div>
					<div className="text-lg">{item.ageGroup}</div>
				</div>
				<div className="flex w-full justify-between">
					<div className="text-xl text-medium">Quantity</div>
					<div className="text-lg">{item.quantity}</div>
				</div>
			</>
		);
	}
	return <ViewList category="Toys" Cardbody={Cardbody} />;
}
