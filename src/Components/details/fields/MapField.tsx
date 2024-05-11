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

export default function MapField({
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

	const map = (
		<iframe
			src={`https://www.google.com/maps/embed?pb=${value}`}
			width="600"
			height="450"
			allowFullScreen
			className="border-[#171A21] border border-solid rounded-lg"
			aria-hidden="false"
		/>
	);

	return (
		<FormField
			control={form.control}
			name={name}
			render={({ field }) => (
				<FormItem className="flex flex-col h-[400px]">
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<>
							{addEditMode ? (
								<>
									<FormControl>
										<Input
											placeholder={placeholder}
											{...field}
											type="text"
											className={inputClassName}
										/>
									</FormControl>
								</>
							) : (
								<span className="flex h-9 w-full rounded-md px-3 py-2 text-sm indent-px">
									{value}
								</span>
							)}
							{map}
						</>
					</FormControl>
					<FormDescription>{description}</FormDescription>
					{addEditMode && <FormMessage />}
				</FormItem>
			)}
		/>
	);
}
