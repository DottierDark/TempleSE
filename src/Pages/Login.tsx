import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	Form,
	FormControl,
	FormDescription,
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
import { loginContainerClass } from "../assets/Styles";
import { Card } from "../Components/shadcn/ui/card";
import { adminUser } from "../assets/DummyData";
import { User } from "../types";

export default function Login() {
	const navigate = useNavigate();
	const formSchema = z.object({
		username: z.string().min(2, {
			message: "Username must be at least 2 characters.",
		}),
		password: z.string().min(6, {
			message: "Password must be at least 6 characters.",
		}),
	});
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		if (
			adminUser.username === values.username &&
			adminUser.password === values.password
		) {
			navigate("/admin");
		} else {
			alert("Invalid username or password");
		}
	}

	return (
		<div className="flex h-full w-full flex-col items-center justify-center bg-gray-900 ">
			<Card className={`${loginContainerClass}`}>
				<div className="flex w-full flex-col items-center gap-5">
					<h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
						Login
					</h1>
					<p
						className=" text-primary-500 cursor-pointer font-medium text-white hover:underline"
						onClick={() => navigate("/register")}
					>
						Don't have an account? Register here.
					</p>
				</div>
				<div>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="flex h-96 w-full flex-col items-center justify-center gap-4 text-white md:w-96"
						>
							<FormField
								control={form.control}
								name="username"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Username</FormLabel>
										<FormControl>
											<Input
												placeholder="shadcn"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
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
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type="submit">Submit</Button>
						</form>
					</Form>
				</div>
			</Card>
		</div>
	);
}
