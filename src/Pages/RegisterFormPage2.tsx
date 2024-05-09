import { useEffect, useState } from 'react';
import { loginButtonClass, loginContainerClass } from '../assets/Styles';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../Components/shadcn/ui/form';
import { Input } from '../Components/shadcn/ui/input';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function RegisterFormPage2() {
	const [formType, setFormType] = useState<'Donor' | 'Organization Rep'>(
		'Donor'
	);
	const [selectedDonorType, setSelectedDonorType] = useState<
		'Regular' | 'Teacher' | 'Doctor'
	>('Regular');

	const fileSchema: ZodType<File, any> = z.instanceof(File);
	const [uploadedFiles, setUploadedFiles] = useState<
		{ name: any; content: string | ArrayBuffer | null }[]
	>([]);
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;
		if (files) {
			// Check if files is not null
			const reader = new FileReader();
			for (const file of files) {
				reader.readAsText(file); // Adjust for different file types
				reader.onload = (e) => {
					if (e.target !== null) {
						setUploadedFiles((prevFiles) => [
							...prevFiles,
							{ name: file.name, content: e.target!.result },
						]);
					}
				};
			}
		}
	};

	const formSchemaDonor = z.object({
		subjects: z.string().optional(),
		classes: z.string().optional(),
		credentials: fileSchema.optional(),
		proof: fileSchema.refine((_value) => null, {
			message: 'Proof is required',
		}),
		teach: z.number().refine((value) => value > 0, {
			message: 'Must be greater than 0',
		}),
		cases: z.number().refine((value) => value > 0, {
			message: 'Must be greater than 0',
		}),
		type: z.string().optional(),
	});
	const formSchemaOrganization = z.object({
		address: z.string().min(5, {
			message: 'Address must be at least 5 characters.',
		}),
		area: z.string().min(2, {
			message: 'Area must be at least 2 characters.',
		}),
		city: z.string().min(2, {
			message: 'City must be at least 2 characters',
		}),
		organizationName: z.string().min(2, {
			message: 'Organization Name must be at least 2 characters.',
		}),
		organizationType: z.string().min(2, {
			message: 'Organization Type must be at least 2 characters.',
		}),
	});
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
							className="flex flex-row items-center justify-center gap-4"
						>
							<div
								className={`${loginContainerClass} flex h-full w-full flex-col items-center justify-center gap-4 text-white md:w-96`}
							>
								<FormField
									control={formDonor.control}
									name="type"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Type</FormLabel>
											<FormControl>
												<select
													{...field}
													className="rounded-lg bg-gray-700 p-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
													onChange={(e) => {
														setSelectedDonorType(
															e.target.value as 'Regular' | 'Teacher' | 'Doctor'
														);
													}}
												>
													<option value="Regular">Regular</option>
													<option value="Teacher">Teacher</option>
													<option value="Doctor">Doctor</option>
												</select>
											</FormControl>
										</FormItem>
									)}
								/>
								{selectedDonorType !== 'Regular' ? (
									<div
										className={`${loginContainerClass} flex flex-col items-center justify-center gap-4 text-white md:w-96`}
									>
										{selectedDonorType === 'Teacher' ? (
											<div>
												<FormField
													control={formDonor.control}
													name="subjects"
													render={({ field }) => (
														<FormItem>
															<FormLabel>Subjects</FormLabel>
															<FormControl>
																<Input placeholder="Subjects" {...field} />
															</FormControl>
															<FormMessage>
																{formDonor.formState.errors.subjects?.message}
															</FormMessage>
														</FormItem>
													)}
												/>
												<FormField
													control={formDonor.control}
													name="teach"
													render={({ field }) => (
														<FormItem>
															<FormLabel>
																How many classes can you teach?
															</FormLabel>
															<FormControl>
																<Input placeholder="5" {...field} />
															</FormControl>
															<FormMessage>
																{formDonor.formState.errors.subjects?.message}
															</FormMessage>
														</FormItem>
													)}
												/>
											</div>
										) : (
											<div>
												<FormField
													control={formDonor.control}
													name="classes"
													render={({ field }) => (
														<FormItem>
															<FormLabel>Classes</FormLabel>
															<FormControl>
																<Input placeholder="Classe" {...field} />
															</FormControl>
															<FormMessage>
																{formDonor.formState.errors.classes?.message}
															</FormMessage>
														</FormItem>
													)}
												/>
												<FormField
													control={formDonor.control}
													name="cases"
													render={({ field }) => (
														<FormItem>
															<FormLabel>
																How many cases can you take?
															</FormLabel>
															<FormControl>
																<Input placeholder="6" {...field} />
															</FormControl>
															<FormMessage>
																{formDonor.formState.errors.classes?.message}
															</FormMessage>
														</FormItem>
													)}
												/>
											</div>
										)}
										<div className="justify-center">
											<FormField
												control={formDonor.control}
												name="proof"
												render={({ field }) => (
													<FormItem>
														<FormLabel>Proof of Work</FormLabel>
														<FormControl>
															<div>
																<Input
																	className="flex rounded-full border space-x-2"
																	id="file"
																	type="file"
																	onChange={handleFileChange}
																	ref={null}
																	multiple={true}
																/>
																<ul className="flex gap-2 text-center">
																	{uploadedFiles.map((file) => {
																		console.log('file:', file);
																		if (!file.name) {
																			return null;
																		}
																		return <li key={file.name}>{file.name}</li>;
																	})}
																</ul>
															</div>
														</FormControl>
														<FormMessage>
															{formDonor.formState.errors.proof?.message}
														</FormMessage>
													</FormItem>
												)}
											/>
										</div>
									</div>
								) : (
									''
								)}
							</div>
						</form>
					</Form>
				) : (
					<Form {...formOrganization}>
						<form
							onSubmit={formOrganization.handleSubmit(onSubmitOrganization)}
							className="flex flex-row items-center justify-center gap-4"
						>
							<div
								className={`${loginContainerClass} flex h-full w-full flex-col items-center justify-center gap-4 text-white md:w-96`}
							>
								<FormField
									control={formOrganization.control}
									name="organizationName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Organization Name</FormLabel>
											<FormControl>
												<Input placeholder="resala" {...field} />
											</FormControl>
											<FormMessage>
												{
													formOrganization.formState.errors.organizationName
														?.message
												}
											</FormMessage>
										</FormItem>
									)}
								/>
								<FormField
									control={formOrganization.control}
									name="organizationType"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Organization Type</FormLabel>
											<FormControl>
												<select
													{...field}
													className="rounded-lg bg-gray-700 p-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
												>
													<option value="school">School</option>
													<option value="hospital">Hospital</option>
													<option value="church">Church</option>
													<option value="mosque">Mosque</option>
													<option value="nonprofit">Non-Profit</option>
												</select>
											</FormControl>
										</FormItem>
									)}
								/>
								<FormField
									control={formOrganization.control}
									name="address"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Organization Address</FormLabel>
											<FormControl>
												<Input placeholder="123 Main St." {...field} />
											</FormControl>
											<FormMessage>
												{formOrganization.formState.errors.address?.message}
											</FormMessage>
										</FormItem>
									)}
								/>
								<FormField
									control={formOrganization.control}
									name="area"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Area</FormLabel>
											<FormControl>
												<Input placeholder="Area" {...field} />
											</FormControl>
											<FormMessage>
												{formOrganization.formState.errors.area?.message}
											</FormMessage>
										</FormItem>
									)}
								/>
								<FormField
									control={formOrganization.control}
									name="city"
									render={({ field }) => (
										<FormItem>
											<FormLabel>City</FormLabel>
											<FormControl>
												<Input placeholder="City" {...field} />
											</FormControl>
											<FormMessage>
												{formOrganization.formState.errors.city?.message}
											</FormMessage>
										</FormItem>
									)}
								/>
							</div>
						</form>
					</Form>
				)}
			</div>
		</div>
	);
}
