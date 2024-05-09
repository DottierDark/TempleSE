import React from 'react';
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

export default function OrganisationStage3() {

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
	const formSchemaOrganization = z.object({
		cases: z.string().optional(),
		proof: fileSchema.refine((_value) => null, {
			message: 'Proof is required',
		}),
		partproof: fileSchema.refine((_value) => null, {
			message: 'Proof is required',
		}),
	});
	function onSubmitOrganization(
		values: z.infer<typeof formSchemaOrganization>
	) {}
	const formOrganization = useForm<z.infer<typeof formSchemaOrganization>>({
		resolver: zodResolver(formSchemaOrganization),
		defaultValues: {},
	});
	return (
		<div className="flex flex-col items-center justify-center p-2 gap-5">
			<Form {...formOrganization}>
				<form
					onSubmit={formOrganization.handleSubmit(onSubmitOrganization)}
					className="flex flex-row items-center justify-center gap-4"
				>
					<div
						className={`${loginContainerClass} rounded flex h-full w-full flex-col items-center justify-center gap-4 p-5 text-white md:w-96`}
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
		</div>
	);
}
