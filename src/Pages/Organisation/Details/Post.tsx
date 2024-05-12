import { useParams } from 'react-router-dom';
import { orgPosts } from '../../../assets/dummyData';
import { TOrgPost } from '../../../types';
import Cloth from '../../Donor/Details/Cloth';
import { Book } from 'lucide-react';
import Blood from '../../Donor/Details/Blood';
import Food from '../../Donor/Details/Food';
import MedicalCase from '../../Donor/Details/MedicalCase';
import MedicalSupply from '../../Donor/Details/MedicalSupply';
import SchoolSupply from '../../Donor/Details/SchoolSupply';
import Toy from '../../Donor/Details/Toy';
import { Label } from '../../../Components/shadcn/ui/label';
import { FormDescription } from '../../../Components/shadcn/ui/form';
import Teacher from '../../Donor/Details/Teacher';

export default function Post() {
	const { id } = useParams<{ id: string }>();
	const post = orgPosts.find((item) => item.id.toString() === id) as TOrgPost;

	const children = (
		<>
			<div className="flex flex-col h-[100px] ">
				<Label>Post category</Label>
				<span className="flex h-9 w-full rounded-md px-3 py-2 text-sm indent-px">
					{post.postCategory}
				</span>
				<FormDescription>Category of the post</FormDescription>
			</div>
			<div className="flex flex-col h-[100px] ">
				<Label>Fulfilled</Label>
				<span className="flex h-9 w-full rounded-md px-3 py-2 text-sm indent-px">
					{post.condition ? 'Yes' : 'No'}
				</span>
				<FormDescription>Fulfilled or not</FormDescription>
			</div>
		</>
	);

	const postMap = {
		clothes: <Cloth children={children} />,
		toys: <Toy children={children} />,
		books: <Book children={children} />,
		food: <Food children={children} />,
		medicalSupplies: <MedicalSupply children={children} />,
		schoolSupplies: <SchoolSupply children={children} />,
		bloodDonation: <Blood children={children} />,
		teachingPosts: <Teacher children={children} />,
		medicalCases: <MedicalCase children={children} />,
	};

	return postMap[post.postCategory as keyof typeof postMap];
}
