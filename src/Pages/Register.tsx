import { useEffect, useState } from "react";
import { loginButtonClass, loginContainerClass } from "../assets/Styles";
import { useNavigate } from "react-router-dom";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../Components/shadcn/ui/form";

import { Input } from "../Components/shadcn/ui/input";
import { z } from "zod";
import { Button } from "../Components/shadcn/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Register() {
	const [formType, setFormType] = useState<"Donor" | "Organization Rep">(
		"Donor",
	);

	const navigate = useNavigate();
	const [selectedDonorType, setSelectedDonorType] = useState(""); // Initialize selectedDonorType state
	useEffect(() => {
		const id = localStorage.getItem("user");
		const type = localStorage.getItem("type");

		if (id && type) {
			navigate(`/${type}`);
		}
	}, [navigate]);

	const formSchemaDonor = z.object({
		firstName: z.string().min(2, {
			message: "First Name must be at least 2 characters.",
		}),
		lastName: z.string().min(2, {
			message: "Last Name must be at least 2 characters.",
		}),
		userName: z.string().email({
			message: "Please enter a valid email address.",
		}),
		password: z.string().min(5, {
			message: "Password must be at least 6 characters",
		}),
		contactNumber: z.string().min(10, {
			message: "Contact Number must be at least 10 characters.",
		}),
		address: z.string().min(5, {
			message: "Address must be at least 5 characters.",
		}),
		area: z.string().min(2, {
			message: "Area must be at least 2 characters.",
		}),
		city: z.string().min(2, {
			message: "City must be at least 2 characters.",
		}),
		donor_type: z.string().optional(),
		subjects: z.string().optional(),
		classes: z.string().optional(),
		credentials: z.string().optional(),
		proof: z.string().optional(),
		type: z.string().optional(),
	});
	const formSchemaOrganization = z.object({
		firstName: z.string().min(2, {
			message: "First Name must be at least 2 characters.",
		}),
		lastName: z.string().min(2, {
			message: "Last Name must be at least 2 characters.",
		}),
		userName: z.string().email({
			message: "Please enter a valid email address.",
		}),
		password: z.string().min(5, {
			message: "Password must be at least 6 characters",
		}),
		contactNumber: z.string().min(10, {
			message: "Contact Number must be at least 10 characters.",
		}),
		address: z.string().min(5, {
			message: "Address must be at least 5 characters.",
		}),
		area: z.string().min(2, {
			message: "Area must be at least 2 characters.",
		}),
		city: z.string().min(2, {
			message: "City must be at least 2 characters",
		}),
		organizationName: z.string().min(2, {
			message: "Organization Name must be at least 2 characters.",
		}),
		organizationType: z.string().min(2, {
			message: "Organization Type must be at least 2 characters.",
		}),
		credentials: z.string().optional(),
		proof: z.string().optional(),
	});

	const formDonor = useForm<z.infer<typeof formSchemaDonor>>({
		resolver: zodResolver(formSchemaDonor),
		defaultValues: {},
	});
	const formOrganization = useForm<z.infer<typeof formSchemaOrganization>>({
		resolver: zodResolver(formSchemaOrganization),
		defaultValues: {},
	});

	function onSubmitDonor(values: z.infer<typeof formSchemaDonor>) {}
	function onSubmitOrganization(
		values: z.infer<typeof formSchemaOrganization>,
	) {}

	return (
		<div className="absolute flex h-full w-full flex-col items-center justify-center bg-gray-900 ">
			<div className="flex flex-col items-center justify-center p-9">
				<div className="grid grid-cols-2 items-center justify-center gap-5">
					<button
						onClick={() => setFormType("Donor")}
						className={`${loginButtonClass} ${
							formType === "Donor" ? "bg-blue-500" : "bg-gray-700"
						}`}
					>
						Donor
					</button>
					<button
						onClick={() => setFormType("Organization Rep")}
						className={`${loginButtonClass} ${
							formType === "Organization Rep"
								? "bg-blue-500"
								: "bg-gray-700"
						}`}
					>
						Organization
					</button>
				</div>
				<p
					className=" text-primary-500 cursor-pointer font-medium text-white hover:underline"
					onClick={() => navigate("/")}
				>
					Already Have an Account? Login
				</p>
				<h1 className="text-center text-2xl font-bold text-white">
					{formType} Register
				</h1>
			</div>
			<div className="flex flex-col items-center justify-center gap-5">
				{formType === "Donor" ? (
					<Form {...formDonor}>
						<form
							onSubmit={formDonor.handleSubmit(onSubmitDonor)}
							className="gap-30 grid w-full grid-cols-2"
						>
							<div
								className={`${loginContainerClass} flex h-[60vh] w-[50vh] flex-col items-center justify-center gap-4 text-white md:w-96`}
							>
								<FormField
									control={formDonor.control}
									name="firstName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>First Name</FormLabel>
											<FormControl>
												<Input
													placeholder="ahmed"
													{...field}
												/>
											</FormControl>
											<FormMessage>
												{
													formDonor.formState.errors
														.firstName?.message
												}
											</FormMessage>
										</FormItem>
									)}
								/>
								<FormField
									control={formDonor.control}
									name="lastName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Last Name</FormLabel>
											<FormControl>
												<Input
													placeholder="mohamed"
													{...field}
												/>
											</FormControl>
											<FormMessage>
												{
													formDonor.formState.errors
														.lastName?.message
												}
											</FormMessage>
										</FormItem>
									)}
								/>
								<FormField
									control={formDonor.control}
									name="userName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input
													placeholder="ahmed123@gmail.com"
													{...field}
												/>
											</FormControl>
											<FormMessage>
												{
													formDonor.formState.errors
														.userName?.message
												}
											</FormMessage>
										</FormItem>
									)}
								/>
								<FormField
									control={formDonor.control}
									name="password"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Password</FormLabel>
											<FormControl>
												<Input
													placeholder="password123"
													{...field}
												/>
											</FormControl>
											<FormMessage>
												{
													formDonor.formState.errors
														.password?.message
												}
											</FormMessage>
										</FormItem>
									)}
								/>
								<FormField
									control={formDonor.control}
									name="contactNumber"
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												Contact Number
											</FormLabel>
											<FormControl>
												<Input
													placeholder="01000100022"
													{...field}
												/>
											</FormControl>
											<FormMessage>
												{
													formDonor.formState.errors
														.contactNumber?.message
												}
											</FormMessage>
										</FormItem>
									)}
								/>
								<FormField
									control={formDonor.control}
									name="donor_type"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Donor Type</FormLabel>
											<FormControl>
												<select
													{...field}
													className="rounded-lg bg-gray-700 p-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
												>
													<option value="regular">
														Regular
													</option>
													<option value="doctor">
														Doctor
													</option>
													<option value="teacher">
														Teahcer
													</option>
												</select>
											</FormControl>
										</FormItem>
									)}
								/>
								<FormField
									control={formDonor.control}
									name="donor_type"
									render={({ field }) => (
										<FormItem>
											<FormLabel>donor_type</FormLabel>
											<FormControl>
												<select
													{...field}
													className="rounded-lg bg-gray-700 p-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
												>
													<option value="male">
														male
													</option>
													<option value="female">
														female
													</option>
													<option value="other">
														other
													</option>
												</select>
											</FormControl>
										</FormItem>
									)}
								/>
							</div>
							<div
								className={`${loginContainerClass} flex flex-col items-center justify-center gap-4 text-white md:w-96`}
							>
								<FormField
									control={formDonor.control}
									name="address"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Address</FormLabel>
											<FormControl>
												<Input
													placeholder="123 Main St."
													{...field}
												/>
											</FormControl>
											<FormMessage>
												{
													formDonor.formState.errors
														.address?.message
												}
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
												<Input
													placeholder="Area"
													{...field}
												/>
											</FormControl>
											<FormMessage>
												{
													formDonor.formState.errors
														.area?.message
												}
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
												<Input
													placeholder="City"
													{...field}
												/>
											</FormControl>
											<FormMessage>
												{
													formDonor.formState.errors
														.city?.message
												}
											</FormMessage>
										</FormItem>
									)}
								/>
							</div>
						</form>
					</Form>
				) : (
					<Form {...formOrganization}>
						<form
							onSubmit={formOrganization.handleSubmit(
								onSubmitOrganization,
							)}
							className=""
						>
							<FormField
								control={formOrganization.control}
								name="firstName"
								render={({ field }) => (
									<FormItem>
										<FormLabel>First Name</FormLabel>
										<FormControl>
											<Input
												placeholder="John"
												{...field}
											/>
										</FormControl>
										<FormMessage>
											{
												formOrganization.formState
													.errors.firstName?.message
											}
										</FormMessage>
									</FormItem>
								)}
							/>
							<FormField
								control={formOrganization.control}
								name="lastName"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Last Name</FormLabel>
										<FormControl>
											<Input
												placeholder="Doe"
												{...field}
											/>
										</FormControl>
										<FormMessage>
											{
												formOrganization.formState
													.errors.lastName?.message
											}
										</FormMessage>
									</FormItem>
								)}
							/>
							<FormField
								control={formOrganization.control}
								name="userName"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												placeholder="org@gmail.com"
												{...field}
											/>
										</FormControl>
										<FormMessage>
											{
												formOrganization.formState
													.errors.userName?.message
											}
										</FormMessage>
									</FormItem>
								)}
							/>
						</form>
					</Form>
				)}

				<Button
					type="submit"
					onClick={() => {}}
					className="bg-primary-500 w-40"
				>
					Register
				</Button>
			</div>
		</div>
	);
}
