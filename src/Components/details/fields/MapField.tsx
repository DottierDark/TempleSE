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
import { useMagicLinkFormContext } from '../useDetailsContext';

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
	const { addEditMode } = useMagicLinkFormContext();

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
								className={inputClassName}
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
		<div className={'flex flex-col w-40' + detailsClassName}>
			<span className="font-bold">{label}:</span>
			<span className="ml-2">{value}</span>
			{map}
		</div>
	);
}
