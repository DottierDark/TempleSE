import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const formSchema = z.object({
	current_password: z.string().min(6, {
		message: 'Password must be at least 6 characters.',
	}),
	new_password: z.string().min(6, {
		message: 'New password must be at least 6 characters.',
	}),
});

const formInfoSchema = z.object({
	first_name: z.string().min(2, {
		message: 'First name must be at least 3 characters.',
	}),
	lastName: z.string().min(2, {
		message: 'Last name must be at least 3 characters.',
	}),
	phoneNumber: z.string().min(8, {
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
});

export default function DonorSettings() {
	const navigate = useNavigate();
	const [passwordChanged, setPasswordChanged] = useState(false);
	const [infoSaved, setInfoSaved] = useState(false);

	const formInfo = useForm({
		resolver: zodResolver(formInfoSchema),
		defaultValues: {
			firstName: 'farida',
			lastName: 'ahmed',
			phoneNumber: '01134777803',
			email: 'farida.mohamed@yahoo.com',
			address: 'nasr city building 6',
			city: 'cairo',
			area: 'nasr city',
		},
	});
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			currentPassword: '',
			newPassword: '',
		},
	});

	useEffect(() => {}, []);

	const onSubmit = (values: any) => {
		console.log('Changing password:', values);
		// Simulate changing password
		setTimeout(() => {
			setPasswordChanged(true);
			setTimeout(() => {
				setPasswordChanged(false);
			}, 3000); // Clear message after 3 seconds
		}, 500); // Simulated loading time
	};
	const onInfoSubmit = (values: any) => {
		// Add your form submission logic here
		console.log('Form values:', values);
		// Simulate saving info
		setTimeout(() => {
			setInfoSaved(true);
			setTimeout(() => {
				setInfoSaved(false);
			}, 3000); // Clear message after 3 seconds
		}, 500); // Simulated loading time
	};

	return (
		<div className="flex">
			<div className="w-1/2 ml-4">
				<Form {...formInfo}>
					<form
						onSubmit={formInfo.handleSubmit(onInfoSubmit)}
						className="space-y-8"
					>
						<FormField
							control={formInfo.control}
							name="firstName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>First Name</FormLabel>
									<FormControl>
										<Input placeholder="Enter first name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={formInfo.control}
							name="lastName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Last Name</FormLabel>
									<FormControl>
										<Input placeholder="Enter last name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={formInfo.control}
							name="phoneNumber"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone Number</FormLabel>
									<FormControl>
										<Input placeholder="Enter phone number" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={formInfo.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input placeholder="Enter email" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={formInfo.control}
							name="address"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Address</FormLabel>
									<FormControl>
										<Input placeholder="Enter address" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={formInfo.control}
							name="city"
							render={({ field }) => (
								<FormItem>
									<FormLabel>City</FormLabel>
									<FormControl>
										<Input placeholder="Enter city" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={formInfo.control}
							name="area"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Area</FormLabel>
									<FormControl>
										<Input placeholder="Enter area" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit">Save Changes</Button>
						{infoSaved && (
							<div className="text-green-600">
								Information saved successfully!
							</div>
						)}
					</form>
				</Form>
			</div>
			<div className="w-1/2 mr-4">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<FormField
							control={form.control}
							name="currentPassword"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Current Password</FormLabel>
									<FormControl>
										<Input
											type="password"
											placeholder="Enter current password"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="newPassword"
							render={({ field }) => (
								<FormItem>
									<FormLabel>New Password</FormLabel>
									<FormControl>
										<Input
											type="password"
											placeholder="Enter new password"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit">Change Password</Button>
						{passwordChanged && (
							<div className="text-green-600">
								Password changed successfully!
							</div>
						)}
					</form>
				</Form>
			</div>
		</div>
	);
}
