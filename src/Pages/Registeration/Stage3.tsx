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
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Stage3 ({
	setFormType,
}: {
	setFormType: (type: 'donor' | 'organisation') => void;
}) {
	const { control, watch } = useFormContext();

	const selectedType = watch('type');

	useEffect(() => {
		setFormType(selectedType);
	}, [selectedType]);
	const navigate = useNavigate();
	return (
		<>
			<div className="flex gap-5">
				<FormField
					control={control}
					name="firstName"
					render={({ field }) => (
						<FormItem className="flex flex-col h-[100px] w-72">
							<FormLabel>First Name</FormLabel>
							<FormControl>
								<Input placeholder="ahmed" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		</>
	);
}
