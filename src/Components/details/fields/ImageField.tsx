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

	const image = <img src={value} alt={label} className="w-20 h-20" />;

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
								type="image"
								className={inputClassName}
							/>
							{image}
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
			{image}
		</div>
	);
}
