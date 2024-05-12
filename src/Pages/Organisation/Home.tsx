import { useNavigate } from 'react-router-dom';
import { Card } from '../../Components/shadcn/ui/card';
import fullfilled from '../../assets/Images/Admin/fullfiled.jpeg';
import unfullfilled from '../../assets/Images/Admin/unfullfilled.png';
import notifications from '../../assets/Images/Admin/notifications.jpeg';
//import fullfilled from '../../assets/Images/Organisation/Home';
//import all from '../../assets/Images/Organisation/Home';
export default function OrganisationHome() {
	const navigate = useNavigate();
	const handleClick = (key: string) => {
		navigate(`/organisation/${key}`);
	};
	return (
		<div className="flex h-full w-full items-center justify-center">
			<div className="grid h-[50%] w-[50%] grid-cols-3 grid-rows-2 items-center justify-center gap-20 pt-20">
				<Card
					key="Fulfilled"
					onClick={() => handleClick('fulfilled-posts')}
					className="flex h-[35vh] w-[35vh] cursor-pointer flex-col flex-col items-center justify-center  hover:shadow-2xl"
				>
					<img
						className="h-[70%] w-[70%] object-contain"
						src={fullfilled}
						alt={'Fulfilled Posts'}
					/>
					<h1 className="text-2xl font-bold">FulFilled Posts</h1>
				</Card>

				<Card
					key="unfulfilled"
					onClick={() => handleClick('unfulfilled-posts')}
					className="flex h-[35vh] w-[35vh] cursor-pointer flex-col flex-col items-center justify-center  hover:shadow-2xl"
				>
					<img
						className="h-[70%] w-[70%] object-contain"
						src={unfullfilled}
						alt={'UnFulfilled Posts'}
					/>
					<h1 className="text-2xl font-bold"> UnFulFilled Posts</h1>
				</Card>

				<Card
					key="notifications"
					onClick={() => handleClick('notifications')}
					className="flex h-[35vh] w-[35vh] cursor-pointer flex-col flex-col items-center justify-center  hover:shadow-2xl"
				>
					<img
						className="h-[70%] w-[70%] object-contain"
						src={notifications}
						alt={'Notifications'}
					/>
					<h1 className="text-2xl font-bold">Notifications</h1>
				</Card>
			</div>
		</div>
	);
}
