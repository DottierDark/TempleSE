import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRightIcon, ChevronLeftIcon } from '@radix-ui/react-icons';
import { Button } from '../../Components/shadcn/ui/button';
import Stage1 from './Stage1';
import DonorStage2 from './DonorStage2';
import DonorStage3 from './DonorStage3';
import OrganisationStage2 from './OrganisationStage2';
import OrganisationStage3 from './OrganisationStage3';

export default function MainRegister() {
	const [formType, setFormType] = useState<'Donor' | 'Organisation Representitve'>('Donor');
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
		2: formType === 'Donor' ? <DonorStage2 /> : <OrganisationStage2 />,
		3: formType === 'Donor' ? <DonorStage3 /> : <OrganisationStage3 />,
	};

	return (
		<div className="absolute flex h-full w-full flex-col items-center justify-center bg-gray-900">
			<div className="flex flex-col items-center justify-center gap-5">
				{stage === 1 ? (
					<>
						<div className="inline-grid grid-cols-2 items-center justify-center gap-5">
							<button
								onClick={() => setFormType('Donor')}
								className={` ${
									formType === 'Donor'
										? 'bg-blue-400 rounded-full text-lg p-2'
										: 'bg-gray-500 rounded-full text-lg p-2'
								}`}
							>
								Donor
							</button>

							<button
								onClick={() => setFormType('Organisation Representitve')}
								className={` ${
									formType === 'Organisation Representitve'
										? 'bg-blue-400 rounded-full text-lg p-2'
										: 'bg-gray-500 rounded-full text-lg p-2'
								}`}
							>
								Organisation
							</button>
						</div>
						<div className="flex w-full text-white items-center justify-center gap-1 text-lg">
							<div className="">Already Have an Account?</div>
							<a
								className=" text-primary-500 cursor-pointer font-medium text-white hover:underline"
								onClick={() => navigate('/')}
							>
								Sign in
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

			<div className="flex justify-center gap-3 p-2">
				<Button
					disabled={stage === 1}
					variant="outline"
					size="icon"
					onClick={() => setStage((prev) => (prev - 1) as 1 | 2 | 3)}
				>
					<ChevronLeftIcon className="h-4 w-4" />
				</Button>
				<Button
					type="submit"
					onClick={() => {formType === 'Donor' ? navigate('/donor') : navigate('/organizarion')}}
					disabled={stage !== 3}
					className="bg-gray-700 h-10 w-40 "
				>
					Register
				</Button>
				<Button
					disabled={stage === 3}
					variant="outline"
					size="icon"
					onClick={() => setStage((next) => (next + 1) as 1 | 2 | 3)}
				>
					<ChevronRightIcon className="h-4 w-4" />
				</Button>
			</div>
		</div>
	);
}
