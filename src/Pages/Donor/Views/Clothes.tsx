import ViewList from '../../../Components/ViewList';

export default function Clothes() {
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
					<div
						className="text-xl text-medium
					"
					>
						Size:{' '}
					</div>
					<div className="text-lg">{item.size}</div>
				</div>
				<div className="flex w-full justify-between">
					<div className="text-xl text-medium">Type: </div>
					<div className="text-lg">{item.itemType}</div>
				</div>
			</>
		);
	}
	return <ViewList category="Clothes" Cardbody={Cardbody} />;
}
