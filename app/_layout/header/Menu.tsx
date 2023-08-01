import Link from "next/link";

export default function Menu() {
	const links = [
		{
			href: "/",
			label: "Услуги",
		},
		{
			href: "/",
			label: "Акции",
		},
		{
			href: "/",
			label: "Контакты",
		},
		{
			href: "/",
			label: "Статьи",
		},
		{
			href: "/",
			label: "Вопрос-ответ",
		},
	];

	return (
		<>
			<div className="flex items-center justify-start">
				{links.map(function (item, index) {
					return (
						<>
							<MenuLink key={index} href={item.href}>
								{item.label}
							</MenuLink>
						</>
					);
				})}
			</div>
		</>
	);
}

export function MenuLink({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<>
			<Link
				href={href}
				className="font-title text-lg font-medium text-black mr-12 last:mr-0"
			>
				{children}
			</Link>
		</>
	);
}
