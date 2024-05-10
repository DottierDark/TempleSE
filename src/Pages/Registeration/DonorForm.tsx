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

	const donorFormMap = {
		regular: <div className="h-[200px]" />,
		teacher: (
			<div className="flex gap-5">
				<FormField
					control={control}
					name="subjects"
					render={({ field }) => (
						<FormItem className="flex flex-col h-[100px]">
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
						<FormItem className="flex flex-col h-[100px]">
							<FormLabel>How many classes can you teach?</FormLabel>
							<FormControl>
								<Input placeholder="5" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		),
		doctor: (
			<div className="flex gap-5">
				<FormField
					control={control}
					name="classes"
					render={({ field }) => (
						<FormItem className="flex flex-col h-[100px]">
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
						<FormItem className="flex flex-col h-[100px]">
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
						<FormItem className="flex flex-col h-[100px]">
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
						<FormItem className="flex flex-col h-[100px]">
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
