import { useFormContext } from 'react-hook-form';
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../../shadcn/ui/form';
import { Input } from '../../shadcn/ui/input';
import { useDetailsContext } from '../useDetailsContext';

export default function ImageField({
	name,
	label,
	placeholder,
	description,
	inputClassName,
	detailsClassName,
}: {
	name: string;
	label: string;
	placeholder: string;
	description: string;
	inputClassName: string;
	detailsClassName: string;
}) {
	const form = useFormContext();
	const { watch } = form;
	const value = watch(name);
	const { addEditMode } = useDetailsContext();

	const image = <img src={value} alt={label} className="w-20 h-9" />;

	return (
		<FormField
			control={form.control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					{addEditMode ? (
						<>
							<FormControl>
								<Input
									placeholder={placeholder}
									{...field}
									type="image"
									className={inputClassName + 'indent-[-1px]'}
								/>
							</FormControl>
						</>
					) : (
						image
					)}
					<FormDescription>{description}</FormDescription>
					{addEditMode && <FormMessage />}
				</FormItem>
			)}
		/>
	);
}
