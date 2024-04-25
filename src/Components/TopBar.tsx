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
} from './shadcn/ui/navigation-menu';
import { TNavigationMenuTab } from '../types';

export default function TopBar() {
	const navigate = useNavigate();

	const [id, setId] = useState<string | null>(null);
	const [type, setType] = useState<string | null>(null);

	const onLogout = () => {
		localStorage.clear();
		setId(null);
		setType(null);
		navigate('/');
	};

	const navigationMenu: TNavigationMenuTab[] = [
		{
			name: 'Menu',
			links: [
				{
					name: 'Home',
					path: '/',
				},
				{
					name: 'Register',
					path: '/register',
				},
			],
		},
		{
			name: 'Admin',
			links: [
				{
					name: 'Home',
					path: '/admin',
				},
			],
		},
		{
			name: 'Donor',
			links: [
				{
					name: 'Home',
					path: '/donor',
				},
			],
		},
		{
			name: 'Organisation',
			links: [
				{
					name: 'Home',
					path: '/organisation',
				},
			],
		},
		{
			name: 'Logout',
			path: '/',
		},
	];

	useEffect(() => {
		setId(localStorage.getItem('user'));
		setType(localStorage.getItem('type'));
	}, []);

	return (
		<div
			className="sticky left-0 top-0 z-20 flex h-16 w-full items-center justify-between gap-5 p-3 transition-shadow"
			style={{
				background:
					'linear-gradient(270deg,rgba(17, 39, 103, 1) 0%,rgba(52, 99, 234, 1) 100%)',
			}}
		>
			<div className="flex items-center gap-4">
				{id && (
					<button
						onClick={() => {
							navigate(`/${type}`);
						}}
					>
						<HomeIcon size={30} className="cursor-pointer text-white" />
					</button>
				)}
				<h1 className="text-3xl font-bold text-white">
					{id && <span>{`${type} ${id}`}</span>} Portal
				</h1>
			</div>
			<NavigationMenu>
				<NavigationMenuList>
					{navigationMenu.map((tab) => (
						<NavigationMenuItem key={tab.name}>
							<NavigationMenuTrigger
								onClick={() => {
									if (tab.path) {
										navigate(tab.path);
									}
								}}
							>
								{tab.name}
							</NavigationMenuTrigger>
							{tab.links && (
								<NavigationMenuContent>
									{tab.links?.map((link) => (
										<NavigationMenuLink
											key={link.name}
											onClick={() => {
												navigate(link.path);
											}}
										>
											{link.name}
										</NavigationMenuLink>
									))}
								</NavigationMenuContent>
							)}
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu>
			{id && (
				<button className="" onClick={() => onLogout()}>
					<LogOut className="cursor-pointer text-white" size={30} />
				</button>
			)}
		</div>
	);
}
