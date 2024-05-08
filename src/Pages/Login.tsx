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
import { Users } from "../assets/dummyData";
import { User } from "../types";
import { buttonClass } from "../assets/Styles";

export default function Login() {
	const navigate = useNavigate();
	const formSchema = z.object({
		username: z.string().min(2, {
			message: "Username must be at least 2 characters.",
		}),
		password: z.string().min(5, {
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
		const user: User | undefined = Users.find((user) => {
			return (
				user.userName === values.username &&
				user.password === values.password
			);
		});

		if (user) {
			navigate(`/${user.type}`); // Navigate based on user type
			localStorage.setItem("user", JSON.stringify(user));
		} else {
			alert("Invalid username or password.");
		}
	}

	return (
		<div className="absolute flex h-full w-full flex-col items-center justify-center bg-gray-900 ">
			<Card className={`${loginContainerClass}`}>
				<div className="flex w-full flex-col items-center justify-center gap-3">
					<h1 className="pt-10 text-3xl font-bold text-white">
						Login
					</h1>
					<p
						className=" text-primary-500 cursor-pointer font-medium text-white hover:underline"
						onClick={() => navigate("/mainregister")}
					>
						Don't have an account? Register here.
					</p>
				</div>
				<div className="">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="flex h-full w-full flex-col items-center justify-center gap-4 py-12 text-white md:w-96"
						>
							<FormField
								control={form.control}
								name="username"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Username</FormLabel>
										<FormControl>
											<Input
												placeholder="ahmed123"
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
							<Button className={`${buttonClass}`} type="submit">
								Login
							</Button>
						</form>
					</Form>
				</div>
			</Card>
		</div>
	);
}
