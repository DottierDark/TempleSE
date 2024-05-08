import { useEffect, useState } from "react";
import { loginButtonClass, loginContainerClass } from "../assets/Styles";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function RegisterFormPage1(){

    const [formType, setFormType] = useState<"Donor" | "Organization Rep">("Donor",);

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
		gender: z.string().optional(),
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
		gender: z.string().optional(),
		
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
            <div className="flex flex-col items-center justify-center  gap-5">
            {formType === "Donor" ? (
                <Form {...formDonor}>
                    <form
                        onSubmit={formDonor.handleSubmit(onSubmitDonor)}
                        className="flex flex-row items-center justify-center  gap-4"
                    >
                        <div
                        className={`${loginContainerClass} flex h-full w-full flex-col items-center justify-center gap-4  text-white md:w-96`}
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
                    </form>
                </Form>
            ) : (
                <Form {...formOrganization}>
                    <form
                        onSubmit={formOrganization.handleSubmit(onSubmitOrganization)}
                        className="flex flex-row items-center justify-center gap-4"
                    >
                        <div
                        className={`${loginContainerClass} flex h-full w-full flex-col items-center justify-center gap-4 text-white md:w-96`}
                        >
                            <FormField
                                control={formOrganization.control}
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
                                                formOrganization.formState.errors
                                                    .firstName?.message
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
                                                placeholder="mohamed"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage>
                                            {
                                                formOrganization.formState.errors
                                                    .lastName?.message
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
                                                placeholder="ahmed123@gmail.com"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage>
                                            {
                                                formOrganization.formState.errors
                                                    .userName?.message
                                            }
                                        </FormMessage>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={formOrganization.control}
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
                                                formOrganization.formState.errors
                                                    .password?.message
                                            }
                                        </FormMessage>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={formOrganization.control}
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
                                                formOrganization.formState.errors
                                                    .contactNumber?.message
                                            }
                                        </FormMessage>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={formOrganization.control}
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
                    </form>
                </Form>
            )}
            </div>
    );

}
