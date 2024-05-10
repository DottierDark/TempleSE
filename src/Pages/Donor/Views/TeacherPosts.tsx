import ViewList from '../../../Components/ViewList';
import { TTeachingPost } from '../../../types';

export default function teachingPosts() {
	function Cardbody(item: TTeachingPost) {
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
					<div className="text-xl text-medium">Students: </div>
					<div className="text-lg">{item.students}</div>
				</div>
				<div className="flex w-full justify-between">
					<div className="text-xl text-medium">Subject: </div>
					<div className="text-lg">{item.subject}</div>
				</div>
				<div className="flex w-full justify-between">
					<div className="text-xl text-medium">Address: </div>
					<div className="text-lg">{item.address}</div>
				</div>
			</>
		);
	}
	return <ViewList category="TeachingPosts" Cardbody={Cardbody} />;
}
