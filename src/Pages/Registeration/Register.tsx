import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRightIcon, ChevronLeftIcon } from '@radix-ui/react-icons';
import { Button } from '../../Components/shadcn/ui/button';
import Stage1 from './Stage1';
import { Card } from '../../Components/shadcn/ui/card';
import { Form } from '../../Components/shadcn/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import DonorForm from './DonorForm';
import OrganisationForm from './OrganisationForm';

export default function Register() {
	const [formType, setFormType] = useState<'donor' | 'organisation'>('donor');
	const navigate = useNavigate();
	const [stage, setStage] = useState<1 | 2>(1);

	const formBody = {
		1: <Stage1 setFormType={setFormType} />,
		2: formType === 'donor' ? <DonorForm /> : <OrganisationForm />,
	};

	const schema = {
		1: z
			.object({
				firstName: z
					.string({
						message: 'Please enter a valid first name',
					})
					.min(2, {
						message: 'First Name must be at least 2 characters.',
					}),
				lastName: z
					.string({
						message: 'Please enter a valid last name',
					})
					.min(2, {
						message: 'Last Name must be at least 2 characters.',
					}),
				userName: z
					.string({
						message: 'Please enter a valid email address.',
					})
					.email({
						message: 'Please enter a valid email address.',
					}),
				contactNumber: z
					.string({
						message: 'Please enter a valid contact number.',
					})
					.min(10, {
						message: 'Contact Number must be at least 10 characters.',
					}),
				gender: z.string({
					message: 'Please select a gender',
				}),
				type: z.string({
					message: 'Please select a type',
				}),
				password: z
					.string({
						message: 'Please enter a valid password',
					})
					.min(5, {
						message: 'Password must be at least 8 characters',
					}),
				confirmPassword: z.string({
					message: 'Please confirm your password',
				}),
			})
			.refine((data) => data.password === data.confirmPassword, {
				message: 'Password and confirmation password must match',
				path: ['confirmPassword'],
			}),
		2:
			formType === 'donor'
				? z.object({
						address: z
							.string({
								message: 'Please enter a valid address',
							})
							.min(5, {
								message: 'Address must be at least 5 characters.',
							}),
						area: z
							.string({
								message: 'Please enter a valid area',
							})
							.min(2, {
								message: 'Area must be at least 2 characters.',
							}),
						city: z
							.string({
								message: 'Please enter a valid city',
							})
							.min(2, {
								message: 'City must be at least 2 characters',
							}),
						donor_type: z
							.string({
								message: 'Please select a donor type',
							})
							.optional(),
						subjects: z
							.string({
								message: 'Please enter a valid subject',
							})
							.optional(),
						classes: z
							.string({
								message: 'Please enter a valid class',
							})
							.optional(),
						credentials: z
							.instanceof(File, {
								message: 'Please upload a valid credentials',
							})
							.optional(),
						proof: z
							.instanceof(File, {
								message: 'Please upload a valid proof',
							})
							.refine((_value: any) => null, {
								message: 'Proof is required',
							}),
						teach: z
							.number({
								message: 'Please enter a valid number',
							})
							.refine((value) => value > 0, {
								message: 'Must be greater than 0',
							}),
						cases: z
							.number({
								message: 'Please enter a valid number',
							})
							.refine((value) => value > 0, {
								message: 'Must be greater than 0',
							}),
					})
				: z.object({
						address: z
							.string({
								message: 'Please enter a valid address',
							})
							.min(5, {
								message: 'Address must be at least 5 characters.',
							}),
						area: z
							.string({
								message: 'Please enter a valid area',
							})
							.min(2, {
								message: 'Area must be at least 2 characters.',
							}),
						city: z
							.string({
								message: 'Please enter a valid city',
							})
							.min(2, {
								message: 'City must be at least 2 characters',
							}),
						organizationName: z
							.string({
								message: 'Please enter a valid organization name',
							})
							.min(2, {
								message: 'Organization Name must be at least 2 characters.',
							}),
						organizationType: z
							.string({
								message: 'Please enter a valid organization type',
							})
							.min(2, {
								message: 'Organisation Type must be at least 2 characters.',
							}),
					}),
	};

	const form = useForm({
		shouldUnregister: false,
		resolver: zodResolver(schema[stage]),
		mode: 'onChange',
		defaultValues: {
			firstName: '',
			lastName: '',
			userName: '',
			contactNumber: '',
			donor_type: '',
		},
	});

	const { handleSubmit, trigger } = form;

	const onSubmit = async () => {
		const isStepValid = await trigger();
		if (isStepValid) {
			if (stage == 1) {
				setStage((prev) => (prev + 1) as 1 | 2);
			} else {
				formType === 'donor' ? navigate('/donor') : navigate('/organisation');
			}
		}
	};

	return (
		<div className="absolute flex h-full w-full flex-col items-center justify-center bg-gray-900">
			<Card className="border border-gray-700 bg-gray-800 px-12 py-6 flex flex-col rounded-2xl h-[85vh] w-[75vh] text-white">
				<Form {...form}>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col items-center justify-between h-full gap-2"
					>
						<div className="flex flex-col items-center gap-3">
							<div className="text-3xl font-bold">Register</div>
							<div className="flex w-full text-white items-center justify-center gap-1 text-lg">
								<div className="">Already Have an Account?</div>
								<a
									className=" text-primary-500 cursor-pointer font-medium text-white hover:underline"
									onClick={() => navigate('/')}
								>
									Sign in
								</a>
							</div>
						</div>
						<div className="flex flex-col items-center justify-center">
							{formBody[stage]}
						</div>
						<div className="flex gap-7">
							<Button
								disabled={stage === 1}
								variant="outline"
								size="icon"
								onClick={() => setStage((prev) => (prev - 1) as 1 | 2)}
								className="text-black"
							>
								<ChevronLeftIcon className="h-4 w-4" />
							</Button>
							<Button
								type="submit"
								disabled={stage !== 2}
								className="bg-gray-700 h-10 w-40 "
							>
								Register
							</Button>
							<Button
								disabled={stage === 2}
								variant="outline"
								size="icon"
								type="submit"
								className="text-black"
							>
								<ChevronRightIcon className="h-4 w-4" />
							</Button>
						</div>
					</form>
				</Form>
			</Card>
		</div>
	);
}
