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
import { z, ZodType } from "zod";
import { Button } from "../Components/shadcn/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Register() {
	const [formType, setFormType] = useState<"Donor" | "Organization Rep">(
		"Donor",
	);
	const fileSchema: ZodType<File, any> = z.instanceof(File);

	const navigate = useNavigate();
	const [selectedDonorType, setSelectedDonorType] = useState<
		"Regular" | "Teacher" | "Doctor"
	>("Regular"); // Initialize selectedDonorType state
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
		gender: z.string().optional(),
		subjects: z.string().optional(),
		classes: z.string().optional(),
		credentials: fileSchema.optional(),
		proof: fileSchema.optional(),
		teach: z.number().refine(value => value > 0, {
  			message: "Must be greater than 0",
		}),
		cases: z.number().refine(value => value > 0, {
  			message: "Must be greater than 0",
		}),
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
		credentials: fileSchema.optional(),
		proof: fileSchema.optional(),
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
							className=" flex flex-row items-center justify-center gap-4"
						>
							<div
								className={`${loginContainerClass} flex h-full w-full flex-col items-center justify-center gap-4 text-white md:w-96`}
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
									name="gender"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Gender</FormLabel>
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
								<FormField
									control={formDonor.control}
									name="type"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Type</FormLabel>
											<FormControl>
												<select
													{...field}
													className="rounded-lg bg-gray-700 p-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
													onChange={(e) => {
														setSelectedDonorType(
															e.target.value as
																| "Regular"
																| "Teacher"
																| "Doctor",
														);
													}}
												>
													<option value="Regular">
														Regular
													</option>
													<option value="Teacher">
														Teacher
													</option>
													<option value="Doctor">
														Doctor
													</option>
												</select>
											</FormControl>
										</FormItem>
									)}
								/>
							</div>
							{selectedDonorType !== "Regular" ? (
								<div
									className={`${loginContainerClass} flex flex-col items-center justify-center gap-4 text-white md:w-96`}>
									{selectedDonorType === "Teacher" ? (
										<div>
										<FormField
											control={formDonor.control}
											name="subjects"
											render={({ field }) => (
												<FormItem>
													<FormLabel>
														Subjects
													</FormLabel>
													<FormControl>
														<Input
															placeholder="Subjects"
															{...field}
														/>
													</FormControl>
													<FormMessage>
														{
															formDonor.formState
																.errors.subjects
																?.message
														}
													</FormMessage>
												</FormItem>
											)}
										/>
										<FormField
											control={formDonor.control}
											name="teach"
											render={({ field }) => (
												<FormItem>
													<FormLabel>
														How many classes can you teach?
													</FormLabel>
													<FormControl>
														<Input
															placeholder="5"
															{...field}
														/>
													</FormControl>
													<FormMessage>
														{
															formDonor.formState
																.errors.subjects
																?.message
														}
													</FormMessage>
												</FormItem>
											)}
										/>
										</div>			
									) : (
										<div>
										<FormField
											control={formDonor.control}
											name="classes"
											render={({ field }) => (
												<FormItem>
													<FormLabel>
														Classes
													</FormLabel>
													<FormControl>
														<Input
															placeholder="Classe"
															{...field}
														/>
													</FormControl>
													<FormMessage>
														{
															formDonor.formState
																.errors.classes
																?.message
														}
													</FormMessage>
												</FormItem>
											)}
										/>
										<FormField
											control={formDonor.control}
											name="cases"
											render={({ field }) => (
												<FormItem>
													<FormLabel>
														How many cases can you take?
													</FormLabel>
													<FormControl>
														<Input
															placeholder="6"
															{...field}
														/>
													</FormControl>
													<FormMessage>
														{
															formDonor.formState
																.errors.classes
																?.message
														}
													</FormMessage>
												</FormItem>
											)}
										/>
										</div>
									)}
									<FormField
										control={formDonor.control}
										name="proof"
										render={({ }) => (
											<FormItem>
												<FormLabel>Proof of Work</FormLabel>
												<FormControl className="text-center items-center">
													<input className="text-center items-center rounded-full border space-x-2" id="file" type="file" />	
												</FormControl>
												<FormMessage>
													{
														formDonor.formState
															.errors.proof
															?.message
													}
												</FormMessage>
											</FormItem>
										)}
									/>
								</div>
							) : (
								""
							)}
						</form>
					</Form>
				) : (
					<Form {...formOrganization}>
						<form
							onSubmit={formOrganization.handleSubmit(onSubmitOrganization)}
							className=" flex flex-row items-center justify-center gap-4"
						>
							<div
								className={`${loginContainerClass} flex h-full w-full flex-col items-center justify-center gap-4 text-white md:w-96`}
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
									name="gender"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Gender</FormLabel>
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
											<FormLabel>Organization Address</FormLabel>
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
								<FormField
									control={formDonor.control}
									name="type"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Organization Type</FormLabel>
											<FormControl >
												<select
													{...field}
													className="rounded-lg bg-gray-700 p-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
>
													<option value="school">
														School
													</option>
													<option value="hospital">
														Hospital
													</option>
													<option value="church">
														Church
													</option>
													<option value="mosque">
														Mosque
													</option>
													<option value="nonprofit">
														Non-Profit
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
											name="subjects"
											render={({ field }) => (
												<FormItem>
													<FormLabel>
														Organization Name
													</FormLabel>
													<FormControl>
														<Input
															placeholder="resala"
															{...field}
														/>
													</FormControl>
													<FormMessage>
														{
															formDonor.formState
																.errors.subjects
																?.message
														}
													</FormMessage>
												</FormItem>
											)}
										/>
									<FormField
										control={formDonor.control}
										name="proof"
										render={({ }) => (
											<FormItem>
												<FormLabel>Proof Being Part of Organization</FormLabel>
												<FormControl className="text-center items-center">
													<input className="text-center items-center rounded-full border space-x-2" id="file" type="file" />	
												</FormControl>
												<FormMessage>
													{
														formDonor.formState
															.errors.proof
															?.message
													}
												</FormMessage>
											</FormItem>
										)}
									/>
								</div>
							
						</form>
						
					</Form>
				)}

				<Button
					type="submit"
					onClick={() => {}}
					className="bg-gray-500 w-40 "
				>
					Register
				</Button>
			</div>
		</div>
	);
}
