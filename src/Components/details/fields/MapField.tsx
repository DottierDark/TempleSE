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
			style={{ border: 0 }}
			allowFullScreen
			aria-hidden="false"
		/>
	);

	if (addEditMode) {
		return (
			<FormField
				control={form.control}
				name={name}
				render={({ field }) => (
					<FormItem>
						<FormLabel>{label}</FormLabel>
						<FormControl>
							<Input
								placeholder={placeholder}
								{...field}
								type="text"
								className={inputClassName + 'indent-[-1px]'}
							/>
							{map}
						</FormControl>
						<FormDescription>{description}</FormDescription>
						<FormMessage />
					</FormItem>
				)}
			/>
		);
	}

	return (
		<div className={'flex flex-col gap-2' + detailsClassName}>
			<span className="font-bold">{label}:</span>
			<span className="">{value}</span>
			{map}
		</div>
	);
}
