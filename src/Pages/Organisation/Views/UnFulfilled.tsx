import ViewList from '../../../Components/ViewList';
import { TOrgPost } from '../../../types';

export default function Fulfilled() {
	function Cardbody(item: TOrgPost) {
		return (
			<>
				<div className="w-60 h-52 flex flex-col items-center justify-center bg-white border-[#171A21] border border-solid  rounded-lg">
					<img src={item.img} className="w-60 h-40 rounded-lg object-contain" />
				</div>
				<div className="flex flex-col py-2 justify-around w-full px-2">
					<div className="flex justify-between items-center  px-2 py-1 rounded-md">
						<div className="text-lg text-bold">Id:</div>
						<div className="text-md">{item.id}</div>
					</div>
					<div className="flex justify-between items-center  px-2 py-1 rounded-md">
						<div className="text-lg text-bold">Name:</div>
						<div className="text-md">{item.name}</div>
					</div>
					<div className="flex justify-between items-center  px-2 py-1 rounded-md">
						<div className="text-lg text-bold">Category:</div>
						<div className="text-md">{item.postCategory}</div>
					</div>
				</div>
			</>
		);
	}
	return <ViewList category="UnFulfilled-Posts" Cardbody={Cardbody} />;
}
