import ViewList from '../../../Components/ViewList';
import { TOrgPost } from '../../../types';

export default function Fulfilled() {
	function Cardbody(item: TOrgPost) {
		return (
			<>
				<div className="w-64 h-40">
					<img
						src={item.post.img}
						className="w-64 h-40 border-[#171A21] border border-solid rounded-lg object-contain bg-white "
					/>
				</div>
				<div className="flex flex-col py-2 justify-around w-full px-3">
					<div className="flex justify-between items-center">
						<div className="text-lg text-bold">Id:</div>
						<div className="text-md">{item.post.id}</div>
					</div>
					<div className="flex justify-between items-center">
						<div className="text-lg text-bold">Name:</div>
						<div className="text-md">{item.post.name}</div>
					</div>
					<div className="flex justify-between items-center">
						<div className="text-lg text-medium">Category:</div>
						<div className="text-md">{item.category}</div>
					</div>
				</div>
			</>
		);
	}
	return <ViewList category="Unfulfilled" Cardbody={Cardbody} />;
}
