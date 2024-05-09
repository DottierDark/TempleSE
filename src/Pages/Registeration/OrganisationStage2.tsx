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

export default function OrganisationStage2() {
	const formSchemaOrganization = z.object({
		address: z.string().min(5, {
			message: 'Address must be at least 5 characters.',
		}),
		area: z.string().min(2, {
			message: 'Area must be at least 2 characters.',
		}),
		city: z.string().min(2, {
			message: 'City must be at least 2 characters',
		}),
		organizationName: z.string().min(2, {
			message: 'Organization Name must be at least 2 characters.',
		}),
		organizationType: z.string().min(2, {
			message: 'Organization Type must be at least 2 characters.',
		}),
	});

	const formOrganization = useForm<z.infer<typeof formSchemaOrganization>>({
		resolver: zodResolver(formSchemaOrganization),
		defaultValues: {},
	});

	function onSubmitOrganization(
		values: z.infer<typeof formSchemaOrganization>
	) {}
	return (
		<div className="flex flex-col items-center justify-center p-2 gap-5">
			<Form {...formOrganization}>
				<form
					onSubmit={formOrganization.handleSubmit(onSubmitOrganization)}
					className="flex flex-row items-center justify-center gap-4"
				>
					<div
						className={`${loginContainerClass} rounded flex h-full w-full flex-col items-center justify-center gap-4 p-5 text-white md:w-96`}
					>
						<FormField
							control={formOrganization.control}
							name="organizationName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Organization Name</FormLabel>
									<FormControl>
										<Input placeholder="resala" {...field} />
									</FormControl>
									<FormMessage>
										{
											formOrganization.formState.errors.organizationName
												?.message
										}
									</FormMessage>
								</FormItem>
							)}
						/>
						<FormField
							control={formOrganization.control}
							name="organizationType"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="p-2">Organization Type</FormLabel>
									<FormControl>
										<select
											{...field}
											className="rounded-lg bg-gray-700 p-3 text-white placeholder-gray-400 gap-7 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
										>
											<option disabled value="Organization Type">
												Organization Type
											</option>
											<option value="school">School</option>
											<option value="hospital">Hospital</option>
											<option value="church">Church</option>
											<option value="mosque">Mosque</option>
											<option value="nonprofit">Non-Profit</option>
										</select>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={formOrganization.control}
							name="address"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Organization Address</FormLabel>
									<FormControl>
										<Input placeholder="123 Main St." {...field} />
									</FormControl>
									<FormMessage>
										{formOrganization.formState.errors.address?.message}
									</FormMessage>
								</FormItem>
							)}
						/>
						<FormField
							control={formOrganization.control}
							name="area"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Area</FormLabel>
									<FormControl>
										<Input placeholder="Area" {...field} />
									</FormControl>
									<FormMessage>
										{formOrganization.formState.errors.area?.message}
									</FormMessage>
								</FormItem>
							)}
						/>
						<FormField
							control={formOrganization.control}
							name="city"
							render={({ field }) => (
								<FormItem>
									<FormLabel>City</FormLabel>
									<FormControl>
										<Input placeholder="City" {...field} />
									</FormControl>
									<FormMessage>
										{formOrganization.formState.errors.city?.message}
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
