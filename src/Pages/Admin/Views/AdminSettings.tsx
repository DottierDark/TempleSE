import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Form } from '../../../Components/shadcn/ui/form';
import { DetailsContextProvider } from '../../../Components/details/useDetailsContext';
import Details from '../../../Components/details/Details';
import TextField from '../../../Components/details/fields/TextField';

export default function AdminSettings() {
	const formSchema = z
		.object({
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
			confirm_new_password: z.string().min(6, {
				message: 'New password must be at least 6 characters.',
			}),
		})
		.refine((data) => data.new_password === data.confirm_new_password, {
			message: 'Passwords do not match.',
		});

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
			current_password: '',
			new_password: '',
			confirm_new_password: '',
		},
	});

	return (
		<Form {...form}>
			<DetailsContextProvider title="Settings" id="1">
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
						<TextField
							name="email"
							label="Email"
							description="Your email"
							detailsClassName=""
							inputClassName=""
							placeholder="Enter email..."
						/>
						<TextField
							name="address"
							label="Address"
							description="Your address"
							detailsClassName=""
							inputClassName=""
							placeholder="Enter address..."
						/>
						<TextField
							name="city"
							label="City"
							description="Your city"
							detailsClassName=""
							inputClassName=""
							placeholder="Enter city..."
						/>
						<TextField
							name="area"
							label="Area"
							description="Your area"
							detailsClassName=""
							inputClassName=""
							placeholder="Enter area..."
						/>
						<TextField
							name="area"
							label="Area"
							description="Your area"
							detailsClassName=""
							inputClassName=""
							placeholder="Enter area..."
						/>
					</div>
				</Details>
			</DetailsContextProvider>
		</Form>
	);
}