import { useEffect, useState } from 'react';
import { loginButtonClass, loginContainerClass } from '../../assets/Styles';
import { useNavigate } from 'react-router-dom';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../../Components/shadcn/ui/form';

import { Input } from '../../Components/shadcn/ui/input';
import { z, ZodType } from 'zod';
import { Button } from '../../Components/shadcn/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// old register page
export default function Register() {
	const [formType, setFormType] = useState<'Donor' | 'Organization Rep'>(
		'Donor'
	);

	const fileSchema: ZodType<File, any> = z.instanceof(File);

	const navigate = useNavigate();

	useEffect(() => {
		const id = localStorage.getItem('user');
		const type = localStorage.getItem('type');

		if (id && type) {
			navigate(`/${type}`);
		}
	}, [navigate]);

	const formSchemaDonor = z.object({});
	const formSchemaOrganization = z.object({});

	const formDonor = useForm<z.infer<typeof formSchemaDonor>>({
		resolver: zodResolver(formSchemaDonor),
		defaultValues: {},
	});
	const formOrganization = useForm<z.infer<typeof formSchemaOrganization>>({
		resolver: zodResolver(formSchemaOrganization),
		defaultValues: {},
	});

	function onSubmitDonor(values: z.infer<typeof formSchemaDonor>) {}
	function onSubmitOrganization(
		values: z.infer<typeof formSchemaOrganization>
	) {}

	return (
		<div className="absolute flex h-full w-full flex-col items-center justify-center bg-gray-900 ">
			<div className="flex flex-col items-center justify-center gap-5">
				{formType === 'Donor' ? (
					<Form {...formDonor}>
						<form
							onSubmit={formDonor.handleSubmit(onSubmitDonor)}
							className=" flex flex-row items-center justify-center gap-4"
						>
							<div
								className={`${loginContainerClass} flex flex-col items-center justify-center gap-4 text-white md:w-96`}
							></div>
						</form>
					</Form>
				) : (
					<Form {...formOrganization}>
						<form
							onSubmit={formOrganization.handleSubmit(onSubmitOrganization)}
							className=" flex flex-row items-center justify-center gap-4"
						>
							<div
								className={`${loginContainerClass} flex flex-col items-center justify-center gap-4 text-white md:w-96`}
							></div>
							<div
								className={`${loginContainerClass} flex flex-col items-center justify-center gap-4 text-white md:w-96`}
							></div>
						</form>
					</Form>
				)}

				<Button type="submit" onClick={() => {}} className="bg-gray-700 w-40 ">
					Register
				</Button>
			</div>
		</div>
	);
}
