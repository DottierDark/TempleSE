import { useEffect, useState } from 'react';
import { loginButtonClass, loginContainerClass } from '../../assets/Styles';
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
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function RegisterFormPage3() {
	const [formType, setFormType] = useState<'Donor' | 'Organization Rep'>(
		'Donor'
	);
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
		address: z.string().min(5, {
			message: 'Address must be at least 5 characters.',
		}),
		area: z.string().min(2, {
			message: 'Area must be at least 2 characters.',
		}),
		city: z.string().min(2, {
			message: 'City must be at least 2 characters.',
		}),
	});
	const formSchemaOrganization = z.object({
		cases: z.string().optional(),
		proof: fileSchema.refine((_value) => null, {
			message: 'Proof is required',
		}),
		partproof: fileSchema.refine((_value) => null, {
			message: 'Proof is required',
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
									name="address"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Address</FormLabel>
											<FormControl>
												<Input placeholder="123 Main St." {...field} />
											</FormControl>
											<FormMessage>
												{formDonor.formState.errors.address?.message}
											</FormMessage>
										</FormItem>
									)}
								/>
								<FormField
									control={formDonor.control}
									name="area"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Area</FormLabel>
											<FormControl>
												<Input placeholder="Area" {...field} />
											</FormControl>
											<FormMessage>
												{formDonor.formState.errors.area?.message}
											</FormMessage>
										</FormItem>
									)}
								/>
								<FormField
									control={formDonor.control}
									name="city"
									render={({ field }) => (
										<FormItem>
											<FormLabel>City</FormLabel>
											<FormControl>
												<Input placeholder="City" {...field} />
											</FormControl>
											<FormMessage>
												{formDonor.formState.errors.city?.message}
											</FormMessage>
										</FormItem>
									)}
								/>
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
								{
									<FormField
										control={formOrganization.control}
										name="partproof"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Proof Being Part of Organization</FormLabel>
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
													{formOrganization.formState.errors.proof?.message}
												</FormMessage>
											</FormItem>
										)}
									/>
								}
							</div>
						</form>
					</Form>
				)}
			</div>
		</div>
	);
}
