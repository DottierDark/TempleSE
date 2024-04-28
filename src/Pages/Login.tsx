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
import { loginContainerClass } from "../assets/Styles";
import { Card } from "../Components/shadcn/ui/card";
import { adminUser } from "../assets/dummyData";
// import { User } from "../types";

export default function Login() {
	const navigate = useNavigate();
	// const formSchema = z.object({
	// 	username: z.string().min(2, {
	// 		message: "Username must be at least 2 characters.",
	// 	}),
	// 	password: z.string().min(6, {
	// 		message: "Password must be at least 6 characters.",
	// 	}),
	// });
	const formSchema = z.object({
		username: z.string().min(2, {
			message: "Wrong UserName, Please try again.",
		}),
		password: z.string().min(6, {
			message: "Wrong Password, Please try again.",
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
		if (values.username === "Admin" && values.password === "Admin") {
			localStorage.setItem("auth", "true");
			navigate("/admin");
		}
		else {
			alert("Invalid username or password");
		}
		
	}

	return (
		
		<div className="absolute flex h-full w-full flex-col items-center justify-center bg-gray-900 ">
			
			<Card className={`${loginContainerClass}`}>
				
				<div className="w-full flex flex-col items-center justify-center gap-3 margin-bottom: 0">
						<br></br>
						<h1 className="text-xl font-bold tracking-tight justify-center text-white md:text-2xl">
							Login
						</h1>
					<p
						className=" text-primary-500 cursor-pointer font-medium text-white hover:underline"
						onClick={() => navigate("/register")}
					>
						Don't have an account? Register here.
					</p>
				</div>
				<div className="margin-top: 0 justify-center">
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
							<Button type="submit">Login</Button>
						</form>
					</Form>
				</div>
			</Card>
		</div>
	);
}
