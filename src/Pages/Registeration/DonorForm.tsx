import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../../Components/shadcn/ui/form';
import { Input } from '../../Components/shadcn/ui/input';
import { useFormContext } from 'react-hook-form';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../../Components/shadcn/ui/select';

export default function DonorForm() {
	const { control, watch } = useFormContext();

	const selectedDonorType = watch('donor_type');

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

	const donorFormMap = {
		regular: <div className="h-[200px]" />,
		teacher: (
			<div className="flex gap-5 h-[200px]">
				<FormField
					control={control}
					name="subjects"
					render={({ field }) => (
						<FormItem className="flex flex-col h-[100px] w-72">
							<FormLabel>Subjects</FormLabel>
							<FormControl>
								<Input placeholder="Subjects" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name="teach"
					render={({ field }) => (
						<FormItem className="flex flex-col h-[100px] w-72">
							<FormLabel>How many classes can you teach?</FormLabel>
							<FormControl>
								<Input placeholder="5" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={control}
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
		),
		doctor: (
			<div className="flex gap-5 h-[200px]">
				<FormField
					control={control}
					name="classes"
					render={({ field }) => (
						<FormItem className="flex flex-col h-[100px] w-72">
							<FormLabel>Classes</FormLabel>
							<FormControl>
								<Input placeholder="Classe" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name="cases"
					render={({ field }) => (
						<FormItem className="flex flex-col h-[100px] w-72">
							<FormLabel>How many cases can you take?</FormLabel>
							<FormControl>
								<Input placeholder="6" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		),
	};

	return (
		<>
			<FormField
				control={control}
				name="address"
				render={({ field }) => (
					<FormItem className="flex flex-col h-[100px] w-full">
						<FormLabel>Address</FormLabel>
						<FormControl>
							<Input placeholder="123 Main St." {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<div className="flex gap-5">
				<FormField
					control={control}
					name="area"
					render={({ field }) => (
						<FormItem className="flex flex-col h-[100px] w-72">
							<FormLabel>Area</FormLabel>
							<FormControl>
								<Input placeholder="Area" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name="city"
					render={({ field }) => (
						<FormItem className="flex flex-col h-[100px] w-72">
							<FormLabel>City</FormLabel>
							<FormControl>
								<Input placeholder="City" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
			<FormField
				control={control}
				name="donor_type"
				render={({ field }) => (
					<FormItem className="flex flex-col h-[100px]">
						<FormLabel>Type of donation</FormLabel>
						<Select onValueChange={field.onChange} defaultValue={field.value}>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder="Select the type of donation you can offer" />
								</SelectTrigger>
							</FormControl>
							<SelectContent>
								<SelectItem value="regular">Regular</SelectItem>
								<SelectItem value="teacher">Teacher</SelectItem>
								<SelectItem value="doctor">Doctor</SelectItem>
							</SelectContent>
						</Select>
						<FormMessage />
					</FormItem>
				)}
			/>
			{
				donorFormMap[
					(selectedDonorType ?? 'regular') as keyof typeof donorFormMap
				]
			}
		</>
	);
}
