import { HomeIcon, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from './shadcn/ui/navigation-menu';
import { TNavigationMenuTab } from '../types';
import React from 'react';
import { cn } from './shadcn/lib/utils';

export default function TopBar() {
	const navigate = useNavigate();
	const history = window.history;
	const location = window.location.pathname;
	
	const [type, setType] = useState<string | null>(null);

	const onLogout = () => {
		setType('');
		navigate('/');
	};

	useEffect(() => {
		setType(location.split('/')[1]);
	}, [location]);

	const navigationMenu: TNavigationMenuTab[] = [
		{
			name: 'Home',
			key: 'home',
			href: `/${type}`,
		},
		{
			name: 'Views',
			key: 'admin',
			links: [
				{
					name: 'Registered Organizations',
					key: 'admin',
					href: '/admin/RegisteredOrganizations',
				},
				{
					name: 'Donor Requests',
					key: 'admin',
					href: '/admin/DonorRequests',
				},
				{
					name: 'Organization Requests',
					key: 'admin',
					href: '/admin/OrganizationsRequests',
				},
				{
					name: "Account Settings",
					key: "admin",
					href: "/admin/AccountSettings",
				},
			],
		},

		{
			name: 'Donations',
			key: 'donor',
			links: [
				{
					name: 'Toys',
					key: '',
					href: '/donor/toys',
				},
				{
					name: 'Clothes',
					key: '',
					href: '/donor/clothes',
				},
				{
					name: 'Food',
					key: '',
					href: '/donor/food',
				},
				{
					name: 'Medicines Supplies',
					key: '',
					href: '/donor/medical-supplies',
				},
				{
					name: 'School Supplies',
					key: '',
					href: '/donor/school-supplies',
				},
				{
					name: 'Blood',
					key: '',
					href: '/donor/blood-donation',
				},
			],
		},
		{
			name: 'Organisation',
			key: 'organisation',
			links: [
				{
					name: 'Requests',
					key: 'requests',
					href: '/organisation/requests',
				},
				{
					name: 'Donations',
					key: 'donations',
					href: '/organisation/donations',
				},
			],
		},
		{
			name: 'Logout',
			key: 'logout',
			href: '/',
		},
	];

	return type != 'register' && type != '' ? (
		<div
			className="sticky left-0 top-0 z-20 grid h-16 w-full grid-cols-3 grid-rows-1 p-3 transition-shadow"
			style={{
				background:
					'linear-gradient(270deg,rgba(17, 39, 103, 1) 0%,rgba(52, 99, 234, 1) 100%)',
			}}
		>
			<div className="flex items-center gap-4">
				<h1 className="text-3xl font-bold text-white">{type} Portal</h1>
			</div>
			<NavigationMenu className="justify-self-center">
				<NavigationMenuList>
					{navigationMenu.map((tab) =>
						type === tab.key || tab.key === 'logout' || tab.key === 'home' ? (
							<NavigationMenuItem key={tab.key}>
								{tab.links ? (
									<>
										<NavigationMenuTrigger>{tab.name}</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className="grid w-96 p-2 md:grid-cols-2 lg:w-[600px]">
												{tab.links.map((link) => (
													<ListItem
														key={link.key}
														href={link.href}
														title={link.name}
													>
														{link.name}
													</ListItem>
												))}
											</ul>
										</NavigationMenuContent>
									</>
								) : (
									<NavigationMenuLink
										className={navigationMenuTriggerStyle()}
										onClick={() => {
											if (tab.href !== undefined) {
												if (tab.name === 'Logout') {
													onLogout();
												} else {
													navigate(tab.href);
												}
											}
										}}
									>
										<button
											onClick={() => {
												if (tab.href !== undefined) {
													if (tab.name === 'Logout') {
														onLogout();
													} else {
														navigate(tab.href);
													}
												}
											}}
										>
											{tab.name}
										</button>
									</NavigationMenuLink>
								)}
							</NavigationMenuItem>
						) : null
					)}
				</NavigationMenuList>
			</NavigationMenu>
			<div></div>
		</div>
	) : null;
}

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = 'ListItem';
