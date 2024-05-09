import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stage1 from './Stage1';
import { ChevronRightIcon, ChevronLeftIcon } from '@radix-ui/react-icons';
import { Button } from '../../Components/shadcn/ui/button';
import DonorStage2 from './DonorStage2';
import DonorStage3 from './DonorStage3';
import OrganisationStage2 from './OrganisationStage2';

export default function MainRegister() {
	const [formType, setFormType] = useState<'donor' | 'organisation'>('donor');
	const navigate = useNavigate();
	const [stage, setStage] = useState<1 | 2 | 3>(1);
	useEffect(() => {
		const id = localStorage.getItem('user');
		const type = localStorage.getItem('type');

		if (id && type) {
			navigate(`/${type}`);
		}
	}, [navigate]);

	const formBody = {
		1: <Stage1 />,
		2: formType === 'donor' ? <DonorStage2 /> : <OrganisationStage2 />,
		3: formType === 'donor' ? <DonorStage3 /> : <OrganisationStage2 />,
	};

	return (
		<div className="absolute flex h-full w-full flex-col items-center justify-center bg-gray-900">
			<div className="flex flex-col items-center justify-center p-9">
				{stage === 1 ? (
					<>
						<div className="grid grid-cols-2 items-center justify-center gap-5">
							<button
								onClick={() => setFormType('donor')}
								className={` ${
									formType === 'donor' ? 'bg-blue-500' : 'bg-gray-700'
								}`}
							>
								Donor
							</button>
							<button
								onClick={() => setFormType('organisation')}
								className={` ${
									formType === 'organisation' ? 'bg-blue-500' : 'bg-gray-700'
								}`}
							>
								Organisation
							</button>
						</div>
						<div className="flex w-full items-center justify-center gap-1 text-md">
							<div className="">Already Have an Account?</div>
							<a
								className=" text-primary-500 cursor-pointer font-medium text-white hover:underline"
								onClick={() => navigate('/')}
							>
								Register here.
							</a>
						</div>
					</>
				) : (
					<h1 className="text-center text-2xl font-bold text-white">
						{formType} Register
					</h1>
				)}
			</div>

			{formBody[stage]}
			<div className="flex justify-center gap-3">
				<Button
					variant="outline"
					size="icon"
					onClick={() => setStage((prev) => (prev - 1) as 1 | 2 | 3)}
				>
					<ChevronLeftIcon className="h-4 w-4 " />
				</Button>
				<Button
					type="submit"
					onClick={() => {}}
					disabled={stage !== 3}
					className="bg-gray-700 h-10 w-40 "
				>
					Register
				</Button>
				<Button disabled variant="outline" size="icon">
					<ChevronRightIcon className="h-4 w-4" />
				</Button>
			</div>
		</div>
	);
}
