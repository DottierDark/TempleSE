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

export default function DonorStage3() {
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

	const formDonor = useForm<z.infer<typeof formSchemaDonor>>({
		resolver: zodResolver(formSchemaDonor),
		defaultValues: {},
	});

	function onSubmitDonor(values: z.infer<typeof formSchemaDonor>) {}

	return (
		<div className="flex flex-col items-center justify-center p-2 gap-5">
			<Form {...formDonor}>
				<form
					onSubmit={formDonor.handleSubmit(onSubmitDonor)}
					className="flex flex-row items-center justify-center gap-4"
				>
					<div
						className={`${loginContainerClass} rounded flex h-full w-full flex-col items-center justify-center gap-4 p-5 text-white md:w-96`}
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
		</div>
	);
}
