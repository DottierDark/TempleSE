import ViewList from '../../../Components/ViewList';

export default function schoolSupplies() {
	function Cardbody(item: any) {
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
					<div className="text-xl text-medium">Type: </div>
					<div className="text-lg">{item.type}</div>
				</div>
				<div className="flex w-full justify-between">
					<div className="text-xl text-medium">Use: </div>
					<div className="text-lg">{item.use}</div>
				</div>
			</>
		);
	}
	return <ViewList category="School Supplies" Cardbody={Cardbody} />;
}
