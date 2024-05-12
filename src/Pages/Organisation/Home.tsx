import { useNavigate } from 'react-router-dom';
//import fullfilled from '../../assets/Images/Organisation/Home';
//import all from '../../assets/Images/Organisation/Home';
export default function OrganisationHome() {
	const navigate = useNavigate();
	const handleClick = (key: string) => {
		navigate(`/organisation/${key}`);
	};
	return (
		<div className="flex h-full w-full items-center justify-center">
			<div className="grid h-[50%] w-[50%] grid-cols-3 grid-rows-2 items-center justify-center gap-20">
				<div
					className="flex h-full w-full flex-col items-center justify-center transition-all hover:scale-[125%]"
					onClick={() => {
						handleClick('fulfilled');
					}}
				>
					<img
						src={''} //fullfilled}
						alt="fulfilled"
						style={{ width: '100%', height: 'auto' }}
					/>
					<h1>FullFilled Posts</h1>
				</div>
				<div
					className="flex h-full w-full flex-col items-center justify-center  transition-all hover:scale-[125%]"
					onClick={() => {
						handleClick('unfulfilled');
					}}
				>
					<img
						src={''} //all}
						alt="all"
						style={{ width: '100%', height: 'auto' }}
					/>
					<h1>All Posts</h1>
				</div>
				<div
					className="flex h-full w-full flex-col items-center justify-center  transition-all hover:scale-[125%]"
					onClick={() => {
						handleClick('notifications');
					}}
				>
					<img
						src={''} //all}
						alt="all"
						style={{ width: '100%', height: 'auto' }}
					/>
					<h1>Notifications</h1>
				</div>
			</div>
		</div>
	);
}
