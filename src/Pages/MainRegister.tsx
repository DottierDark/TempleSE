import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterFormPage1 from './RegisterFormPage1';
import RegisterFormPage2 from './RegisterFormPage2';
import RegisterFormPage3 from './RegisterFormPage3';
import { ChevronRightIcon, ChevronLeftIcon } from '@radix-ui/react-icons';
import { Button } from '../Components/shadcn/ui/button';

export default function MainRegister() {
	const [formType, setFormType] = useState<'Donor' | 'Organization Rep'>(
		'Donor'
	);
	const navigate = useNavigate();
	const [stage, setStage] = useState<1 | 2 | 3>(1);
	useEffect(() => {
		const id = localStorage.getItem('user');
		const type = localStorage.getItem('type');

		if (id && type) {
			navigate(`/${type}`);
		}
	}, [navigate]);
	return (
		<div className="absolute flex h-full w-full flex-col items-center justify-center bg-gray-900">
			<div className="flex flex-col items-center justify-center p-9">
				<div className="grid grid-cols-2 items-center justify-center gap-5">
					<button
						onClick={() => setFormType('Donor')}
						className={` ${
							formType === 'Donor' ? 'bg-blue-500' : 'bg-gray-700'
						}`}
					>
						Donor
					</button>
					<button
						onClick={() => setFormType('Organization Rep')}
						className={` ${
							formType === 'Organization Rep' ? 'bg-blue-500' : 'bg-gray-700'
						}`}
					>
						Organization
					</button>
				</div>
				<p
					className=" text-primary-500 cursor-pointer font-medium text-white hover:underline"
					onClick={() => navigate('/')}
				>
					Already Have an Account? Login
				</p>
				<h1 className="text-center text-2xl font-bold text-white">
					{formType} Register
				</h1>
			</div>
			{/* Button logic depends on stage */}
			{stage === 1 ? (
				<div>
					<RegisterFormPage1 />
					<div className="flex justify-center gap-3 ">
						<Button variant="outline" size="icon" disabled>
							<ChevronLeftIcon className="h-4 w-4 " />
						</Button>

						<Button
							disabled
							type="submit"
							onClick={() => {}}
							className="bg-gray-700 h-10 w-40 "
						>
							Register
						</Button>

						<Button variant="outline" size="icon" onClick={() => setStage(2)}>
							<ChevronRightIcon className="h-4 w-4" />
						</Button>
					</div>
				</div>
			) : stage === 2 ? (
				<div>
					<RegisterFormPage2 />

					<div className="flex justify-center gap-3 ">
						<Button variant="outline" size="icon" onClick={() => setStage(1)}>
							<ChevronLeftIcon className="h-4 w-4 " />
						</Button>

						<Button
							disabled
							type="submit"
							onClick={() => {}}
							className="bg-gray-700 h-10 w-40 "
						>
							Register
						</Button>

						<Button variant="outline" size="icon" onClick={() => setStage(3)}>
							<ChevronRightIcon className="h-4 w-4" />
						</Button>
					</div>
				</div>
			) : (
				<div>
					<RegisterFormPage3 />
					<div className="flex justify-center gap-3 ">
						<Button variant="outline" size="icon" onClick={() => setStage(2)}>
							<ChevronLeftIcon className="h-4 w-4 " />
						</Button>

						<Button
							type="submit"
							onClick={() => {}}
							className="bg-gray-700 h-10 w-40 "
						>
							Register
						</Button>

						<Button disabled variant="outline" size="icon">
							<ChevronRightIcon className="h-4 w-4" />
						</Button>
					</div>
				</div>
			)}
		</div>
	);
}