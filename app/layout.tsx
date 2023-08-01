import { Open_Sans, Montserrat } from "next/font/google";

import "@/styles/global.scss";
import Template from "./_layout/Template";

export const metadata = {
	title: "Клининг любой сложности в Ижевске",
	description: "Клининг любой сложности в Ижевске",
};

const MontserratFont = Montserrat({
	weight: ["600", "500"],
	subsets: ["latin", "cyrillic"],
	variable: "--font-title",
});

const LatoFont = Open_Sans({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-main",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru">
			<body
				className={`${LatoFont.variable} ${MontserratFont.variable} font-main`}
			>
				<Template>{children}</Template>
			</body>
		</html>
	);
}
