import { HomeIcon, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "./shadcn/ui/navigation-menu";
import { TNavigationMenuTab } from "../types";
import React from "react";
import { cn } from "./shadcn/lib/utils";

export default function TopBar() {
	const navigate = useNavigate();
	const location = window.location.pathname;

	const [type, setType] = useState<string | null>(null);

	const onLogout = () => {
		localStorage.removeItem("type");
		localStorage.removeItem("token");
		setType(null);
		navigate("/");
	};

	useEffect(() => {
		setType(location.split("/")[1]);
	}, []);

	const navigationMenu: TNavigationMenuTab[] = [
		{
			name: "Menu",
			key: "menu",
			links: [
				{
					name: "Home",
					key: "home",
					href: "/",
				},
				{
					name: "Register",
					key: "register",
					href: "/register",
				},
			],
		},
		{
			name: "Admin",
			key: "admin",
			links: [
				{
					name: "Home",
					key: "home",
					href: "/admin",
				},
			],
		},
		{
			name: "Donor",
			key: "donor",
			links: [
				{
					name: "Home",
					key: "home",
					href: "/donor",
				},
			],
		},
		{
			name: "Organisation",
			key: "organisation",
			links: [
				{
					name: "Home",
					key: "home",
					href: "/organisation",
				},
			],
		},
		{
			name: "Register",
			key: "donor",
			href: "/register",
		},
		{
			name: "Logout",
			key: "logout",
			href: "/",
		},
	];

	return (
		type != "register" &&
		type != "login" && (
			<div
				className="sticky left-0 top-0 z-20 flex h-16 w-full items-center justify-between gap-5 p-3 transition-shadow"
				style={{
					background:
						"linear-gradient(270deg,rgba(17, 39, 103, 1) 0%,rgba(52, 99, 234, 1) 100%)",
				}}
			>
				<div className="flex items-center gap-4">
					<button
						onClick={() => {
							navigate(`/${type}`);
						}}
					>
						<HomeIcon
							size={30}
							className="cursor-pointer text-white"
						/>
					</button>
					<h1 className="text-3xl font-bold text-white">
						{type} Portal
					</h1>
				</div>
				<NavigationMenu className="mr-60">
					<NavigationMenuList>
						{navigationMenu.map(
							(tab) =>
								type && (
									<NavigationMenuItem key={tab.key}>
										{tab.links ? (
											<>
												<NavigationMenuTrigger>
													{tab.name}
												</NavigationMenuTrigger>
												<NavigationMenuContent>
													<ul className="grid w-96 p-2 md:grid-cols-2 lg:w-[600px]">
														{tab.links.map(
															(link) => (
																<ListItem
																	key={
																		link.key
																	}
																	href={
																		link.href
																	}
																	title={
																		link.name
																	}
																>
																	{link.name}
																</ListItem>
															),
														)}
													</ul>
												</NavigationMenuContent>
											</>
										) : (
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												{tab.name}
											</NavigationMenuLink>
										)}
									</NavigationMenuItem>
								),
						)}
					</NavigationMenuList>
				</NavigationMenu>
				{type && (
					<button className="" onClick={() => onLogout()}>
						<LogOut
							className="cursor-pointer text-white"
							size={30}
						/>
					</button>
				)}
			</div>
		)
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className,
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">
						{title}
					</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
