import ViewList from '../../../Components/ViewList';
import { TTeachingPost } from '../../../types';

export default function teachingPosts() {
	function Cardbody(item: TTeachingPost) {
		return (
			<>
				<div className="w-64 h-40">
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
						<div className="text-lg text-medium">Subject:</div>
						<div className="text-md">{item.subject}</div>
					</div>
					<div className="flex justify-between items-center">
						<div className="text-lg text-medium">Area:</div>
						<div className="text-md">{item.area}</div>
					</div>
					<div className="flex justify-between items-center">
						<div className="text-lg text-medium">Governorate:</div>
						<div className="text-md">{item.gov}</div>
					</div>
				</div>
			</>
		);
	}
	return <ViewList category="TeachingPosts" Cardbody={Cardbody} />;
}
