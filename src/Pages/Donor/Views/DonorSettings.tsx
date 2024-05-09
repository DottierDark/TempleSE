import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '../../../Components/shadcn/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../../../Components/shadcn/ui/form';
import { Input } from '../../../Components/shadcn/ui/input';
import { DetailsContextProvider } from '../../../Components/details/useDetailsContext';
import Details from '../../../Components/details/Details';
import TextField from '../../../Components/details/fields/TextField';

const formSchema = z.object({
	first_name: z.string().min(2, {
		message: 'First name must be at least 3 characters.',
	}),
	last_name: z.string().min(2, {
		message: 'Last name must be at least 3 characters.',
	}),
	phone_number: z.string().min(11, {
		message: 'Phone number must be at least 11 characters.',
	}),
	email: z.string().email({
		message: 'Invalid email format.',
	}),
	address: z.string().min(2, {
		message: 'Address must be at least 10 characters.',
	}),
	city: z.string().min(2, {
		message: 'City name must be at least 2 characters.',
	}),
	area: z.string().min(2, {
		message: 'Area name must be at least 5 characters.',
	}),
	current_password: z.string().min(6, {
		message: 'Password must be at least 6 characters.',
	}),
	new_password: z.string().min(6, {
		message: 'New password must be at least 6 characters.',
	}),
});

export default function DonorSettings() {
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			first_name: 'farida',
			last_name: 'ahmed',
			phone_number: '01134777803',
			email: 'farida.mohamed@yahoo.com',
			address: 'nasr city building 6',
			city: 'cairo',
			area: 'nasr city',
			currentPassword: '',
			newPassword: '',
		},
	});

	return (
		<Form {...form}>
			<DetailsContextProvider >
				<Details replacementTitle="Settings">
					<div className="grid grid-cols-2 p-6 gap-x-12">
						<TextField
							name="first_name"
							label="First Name"
							description="Your first name"
							detailsClassName=""
							inputClassName=""
							placeholder="Enter first name..."
						/>
						<TextField
							name="last_name"
							label="Last Name"
							description="Your last name"
							detailsClassName=""
							inputClassName=""
							placeholder="Enter last name..."
						/>
						<TextField
							name="phone_number"
							label="Phone Number"
							description="Your phone number"
							detailsClassName=""
							inputClassName=""
							placeholder="Enter phone number..."
						/>
					</div>
				</Details>
			</DetailsContextProvider>
		</Form>
	);
}
